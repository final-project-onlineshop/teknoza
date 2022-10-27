import axios from "axios";
import { useContext } from "react";
import { Button, Col, ListGroup, NavItem, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartItem } from "../..";
import { useCart } from "../../Store";
import "./productInCart.scss";
const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
type PropsOfProductInCartPage = {
  product: CartItem;
  uneditable?: boolean;
};

const ProductInCart = (props: PropsOfProductInCartPage) => {
  const { getCartSum, addItemToCart, removeItemFromCart, updateItemQuantity } =
    useCart();
  const { product, uneditable } = props;
  const cartSum = getCartSum();

  const updateCartHandler = async (product: CartItem, difference: number) => {
    const newQuantity = product.quantity + difference;

    const { data } = await axios.get(`${BASE_API_URL}/products/${product._id}`);
    if (data.stock < newQuantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }

    updateItemQuantity(product, newQuantity);
  };
  const removeItemHandler = (product: CartItem) => {
    removeItemFromCart(product);
  };

  return (
    <ListGroup.Item key={product._id} className="productInCart">
      <Row className="align-items-center text-center p-3 row-container">
        <Col md={2} className="image-box ">
          <img
            src={product.thumbnail}
            alt={product.name}
            className="img-fluid rounded img-thumbnail"
          />
        </Col>
        <Col md={2} className="row-md">
          <Link to={`/product/${product._id}`}>{product.name}</Link>
        </Col>
        <Col
          md={3}
          className="d-flex flex-row justify-content-center align-items-center "
        >
          {!uneditable && (
            <Button
              onClick={() => {
                updateCartHandler(product, -1);
              }}
              variant="light"
              disabled={product.quantity === 1}
            >
              <i className="fa-solid fa-square-minus"></i>
            </Button>
          )}
          <span>
            {uneditable && "X "}
            {product.quantity}
          </span>
          {!uneditable && (
            <Button
              onClick={() => {
                updateCartHandler(product, 1);
              }}
              variant="light"
              disabled={product.quantity === product.stock}
            >
              <i className="fa-solid fa-square-plus"></i>
            </Button>
          )}
        </Col>
        <Col md={3}>$ {product.price} </Col>
        <Col md={2}>
          {!uneditable && (
            <Button
              onClick={() => {
                removeItemHandler(product);
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </Button>
          )}
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default ProductInCart;
