import "./productPage.scss";
import { useParams } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import Rating from "../../components/rating/Rating";
import { Helmet } from "react-helmet-async";

import AddToCartButton from "../../components/addToCartButton/AddToCartButton";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

const ProductPage = () => {
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: {},
    loading: true,
    error: "",
  });

  const params = useParams();

  const productId = params._id;
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });

      try {
        const dataFromApi = await axios.get(
          `${BASE_API_URL}/products/${productId}`
        );
        dispatch({ type: "FETCH_SUCCESS", payload: dataFromApi.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();

    // setProduct(dataFromApi.data);
  }, [productId]);

  return (
    <Container className="ProductPage mt-3">
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      {loading ? (
        <p>LOADING...</p>
      ) : error ? (
        <p>ERROR!</p>
      ) : (
        <Row>
          <Col md={5} className="col">
            <img
              className="img-large"
              src={selectedImage || product.thumbnail}
              alt={product.name}
            />
          </Col>
          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Helmet>
                  <title>{product.name}</title>
                </Helmet>
                <h1>{product.name}</h1>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  reviews={product.reviews}
                  numReviews={product.numReviews}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <Row xs={1} md={2} className="g-2">
                  {[product.thumbnail, ...product.images].map((x) => (
                    <Col key={x}>
                      <Card>
                        <Button
                          className="thumbnail"
                          type="button"
                          variant="light"
                          onClick={() => setSelectedImage(x)}
                        >
                          <Card.Img variant="top" src={x} alt="product" />
                        </Button>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                Description:
                <p>{product.description}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>${product.price}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.stock > 0 ? (
                          <Badge bg="success"> In Stock </Badge>
                        ) : (
                          <Badge bg="danger">Unavailable</Badge>
                        )}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {product.stock > 0 && (
                    <ListGroup.Item>
                      <div className="d-grid">
                        <AddToCartButton product={product} />
                      </div>
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductPage;
