import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('http://localhost:8089/protected', {
          method: 'GET',
          credentials: 'include', // Enviar cookies con la solicitud
        });
        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };

    checkAuth();
  }, []);

  // Mostrar una pantalla de carga mientras se verifica la autenticación
  if (loading) return <div>Loading...</div>;

  // Redirigir si no está autenticado
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
