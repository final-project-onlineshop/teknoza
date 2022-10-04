import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  cart: {
    cartSum: 0,
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM":
      //add to cart
      
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find((item) => {
        return item._id === newItem._id;
      });

      const cartItems = existItem
        ? state.cart.cartItems.map((item) => {
            return item._id === existItem._id ? newItem : item;
          })
        : [...state.cart.cartItems, newItem];

      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      return {
        ...state,
        cart: {
          ...state.cart,
          cartSum: state.cart.cartSum + newItem.price,
          cartItems,
        },
      };
    case "USER_LOGIN":
      return { ...state, userInfo: action.payload };
    case "USER_LOGOUT":
      return { ...state, userInfo: null, cart: { cartItems: [] } };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
