import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.tsx";

type ProtectedRouteProps = {
  children: JSX.Element;
};

//Verifies the authentication status using isAuthenticated for routes.
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
