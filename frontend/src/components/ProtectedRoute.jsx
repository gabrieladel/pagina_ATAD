import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, requireAdmin }) => {
  const { usuario } = useAuth();

  if (!usuario) {
    return <Navigate to="/login" />;
  }

  if (requireAdmin && usuario.rol !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;




