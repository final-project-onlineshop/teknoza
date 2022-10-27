import { Children, ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { useCart } from "../../Store";
type AdminRouteProps={
  children:ReactNode
}
const AdminRoute = ({ children }:AdminRouteProps) => {

  const { getUserInfo } = useCart();
  const userInfo = getUserInfo();

  return userInfo.isAdmin ? children : <Navigate to="../login" />;
};

export default AdminRoute;
