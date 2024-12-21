import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ isAuthenticated, children }) {
  // Si el usuario está autenticado, renderiza el componente hijo.
  // De lo contrario, redirige al inicio de sesión u otra página.
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default PrivateRoute;
