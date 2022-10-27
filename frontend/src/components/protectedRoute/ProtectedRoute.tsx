import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useCart } from "../../Store";
type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps):JSX.Element => {

  const { getUserInfo } = useCart();
  const userInfo = getUserInfo();
  return userInfo ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
