import { createContext, ReactNode, useContext, useReducer } from "react";
import { CartItem } from ".";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { round2 } from "./utils";
type CartProviderProps = {
  children: ReactNode;
};

type ShippingAddress = {
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
};

type Cart = {
  cartSum: number;
  cartItems?: CartItem[];
  paymentName?: string;
  shippingAddress?: ShippingAddress;
};

type UserInfo = {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  token: string;
};

type CartContext = {
  getItemQuantity: (id: string) => number;
  addItemToCart: (item: CartItem) => void;
  decreaseCartQuantity: (itemToRemove: CartItem) => void;
  removeItemFromCart: (item: CartItem) => void;
  clearCart: () => void;
  savePaymentMethod: (paymentMethod: "PayPal" | "Stripe") => void;
  saveShippingAddress: (address: ShippingAddress) => void;
  loginUser: (user: UserInfo) => void;
  logoutUser: () => void;
  getCartItems: () => CartItem[];
  getUserInfo: () => UserInfo;
  getCartSum: () => number;
  getShippingAddress: () => ShippingAddress;
  getPaymentMethod: () => "PayPal" | "Stripe";
  getShippingPrice: () => number;
  getTaxPrice: () => number;
  updateItemQuantity: (item: CartItem, newQuantity: number) => void;
};
const CartContext = createContext({} as CartContext);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("cart", []);
  const [paymentMethod, setPaymentMethod] = useLocalStorage<
    "PayPal" | "Stripe"
  >("paymentMethod", "PayPal");
  const [userInfo, setUserInfo] = useLocalStorage<UserInfo>("userInfo", {
    _id: "",
    name: "",
    email: "",
    isAdmin: false,
    token: "",
  });
  const [shippingAddress, setShippingAddress] =
    useLocalStorage<ShippingAddress>("shippingAddress", {
      fullName: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
    });

  function getShippingPrice() {
    return getCartSum() > 100 ? 0 : 10;
  }
  function getShippingAddress() {
    return shippingAddress;
  }
  function getCartSum() {
    let sum = 0;
    sum = cartItems.reduce((sumOfCart: number, item: CartItem) => {
      return (sumOfCart += item.price * item.quantity);
    }, 0);
    return sum;
  }

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item._id === id)?.quantity || 0;
  }
  function updateItemQuantity(item: CartItem, newQuantity: number) {
    setCartItems((currItems) => {
      return currItems.map((currItem) => {
        if (currItem._id === item._id) {
          return { ...currItem, quantity: newQuantity };
        } else {
          return currItem;
        }
      });
    });
  }
  function getCartItems() {
    return cartItems;
  }
  function getUserInfo() {
    return userInfo;
  }
  function getTaxPrice() {
    return round2(getCartSum() * 0.19);
  }
  function addItemToCart(newItem: CartItem) {
    setCartItems((currItems) => {
      if (
        currItems.find((currItem) => currItem._id === newItem._id) === undefined
      ) {
        newItem.quantity = 1;
        return [...currItems, newItem];
      } else {
        return currItems.map((currItem) => {
          if (currItem._id === newItem._id) {
            return { ...currItem, quantity: currItem.quantity + 1 };
          } else {
            return currItem;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(itemToRemove: CartItem) {
    setCartItems((currItems) => {
      if (
        currItems.find((currItem) => currItem._id === itemToRemove._id)
          ?.quantity === 1
      ) {
        return currItems.filter(
          (currItem) => currItem._id !== itemToRemove._id
        );
      } else {
        return currItems.map((currItem) => {
          if (currItem._id === itemToRemove._id) {
            return { ...currItem, quantity: currItem.quantity - 1 };
          } else {
            return currItem;
          }
        });
      }
    });
  }
  function removeItemFromCart(item: CartItem) {
    setCartItems((currItems) => {
      return currItems.filter((currItem) => currItem._id !== item._id);
    });
  }
  function clearCart() {
    setCartItems(() => []);
  }

  function savePaymentMethod(paymentMethod: "PayPal" | "Stripe") {
    setPaymentMethod(() => paymentMethod);
  }
  function getPaymentMethod(): "PayPal" | "Stripe" {
    return paymentMethod;
  }
  function saveShippingAddress(shippingAddress: ShippingAddress) {
    setShippingAddress(() => shippingAddress);
  }
  function loginUser(userInfo: UserInfo) {
    setUserInfo(userInfo);
  }
  function logoutUser() {
    setUserInfo({ _id: "", name: "", email: "", isAdmin: false, token: "" });
  }

  enum StoreActionKind {
    CART_ADD_ITEM = "CART_ADD_ITEM",
    CART_REMOVE_ITEM = "CART_REMOVE_ITEM",
    CART_CLEAR = "CART_CLEAR",
    SAVE_PAYMENT_METHOD = "SAVE_PAYMENT_METHOD",
    SAVE_SHIPPING_ADDRESS = "SAVE_SHIPPING_ADDRESS",
    USER_LOGIN = "USER_LOGIN",
    USER_LOGOUT = "USER_LOGOUT",
  }
  type Actions =
    | {
        type: StoreActionKind.CART_ADD_ITEM | StoreActionKind.CART_REMOVE_ITEM;
        payload: CartItem;
      }
    | { type: StoreActionKind.CART_CLEAR | StoreActionKind.USER_LOGOUT }
    | { type: StoreActionKind.SAVE_PAYMENT_METHOD; payload: string }
    | { type: StoreActionKind.SAVE_SHIPPING_ADDRESS; payload: ShippingAddress }
    | { type: StoreActionKind.USER_LOGIN; payload: UserInfo };

  interface LocalDataState {
    cart: Cart;
    userInfo?: UserInfo;
  }

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        addItemToCart,
        decreaseCartQuantity,
        removeItemFromCart,
        clearCart,
        savePaymentMethod,
        saveShippingAddress,
        loginUser,
        logoutUser,
        getCartItems,
        getUserInfo,
        getCartSum,
        getShippingAddress,
        getPaymentMethod,
        getShippingPrice,
        getTaxPrice,
        updateItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
