import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card, Button, Container, Stack } from "react-bootstrap";
import Rating from "../rating/Rating";
import './product.scss'

const Product = (props) => {
  const params = useParams();
  const { slug } = params;
  const { product } = props;
  return (
    <div className="Product">
      <Card  className="product-card">
        <Link to={`/product/${product.slug}`}
        className="card-link">
          <Card.Img
          className="card-img"
            variant="top"
            src={`/images/products/${product.slug}.jpg`}
          />
        </Link>

        <Card.Body >

          <Link to={`/product/${product.slug}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>

          <Rating rating={product.rating} numReviews={product.numReviews} />

          <Card.Text>
            <strong>{`${product.price} €`}</strong>
          </Card.Text>

          <Button className="btn-primary" >Add to cart</Button>

        </Card.Body>
      </Card>
    </div>
  );
};

export default Product; 
