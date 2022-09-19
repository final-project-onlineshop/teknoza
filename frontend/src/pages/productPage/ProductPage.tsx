import "./productPage.scss";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  Badge,
  Button,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import Rating from "../../components/rating/Rating";
import { Helmet } from "react-helmet-async";
import { Store } from "../../Store";

const ProductPage = () => {
  const params = useParams();
  const { slug } = params;
  const [product, setProduct] = useState([]);

  useEffect(() => {

    const fetchData = async () => {

      const dataFromApi = await axios.get(
        `http://localhost:3048/api/products/${slug}`
      );

      setProduct(dataFromApi.data);
      // console.log(dataFromApi);
    };

    fetchData();
  }, [slug]);

  const {state, dispatch: ctxDispatch} = useContext(Store);

  const addToCartHandler = () => {
    ctxDispatch({
      type:'CART_ADD_ITEM', 
      payload:{...product, quantity:1},
  });

  console.log(cart.cartItems.length);
  };

  return (
    <div className="ProductPage">
      <Row>
        <Col md={6}>
          <img
            src={`/images/products/${product.slug}.jpg`}
            alt={product.name}
            className="img-large"
          />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
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
                      {product.countInStock > 0 ? (
                        <Badge bg="success"> In Stock </Badge>
                      ) : (
                        <Badge bg="danger">Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button onClick={addToCartHandler} variant="primary">Add to Cart</Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductPage;
