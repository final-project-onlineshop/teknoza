import axios from "axios";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Store";

import "./addToCartButton.scss";
import { CartItem } from "../..";
const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
type ProductAsProps = {
  product: CartItem;
};

const AddToCartButton = ({ product }: ProductAsProps) => {
 
  const { getCartItems, addItemToCart } = useCart();
  const cart = getCartItems();
  const navigate = useNavigate();

  const addToCartHandler = async () => {
    const existItem = cart.find((cartItem) => cartItem._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`${BASE_API_URL}/products/${product._id}`);
    if (data.stock < quantity) {
      window.alert("Sorry, product is out of stock.");
      return;
    }
    addItemToCart(product);
   

    navigate("/cart");
  };
  return (
    <Button
      onClick={addToCartHandler}
      variant="primary"
      className="add-to-cart-button"
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
