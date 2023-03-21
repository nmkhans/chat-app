import { Navigate } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useAuth();
  console.log(isLoggedIn);

  if (!isLoggedIn) return <Navigate to="/login" replace />;

  return children;
};

export default PrivateRoute;
