import { useState, useEffect } from "react";

function useAuth(sessionEndpoint) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch(sessionEndpoint, {
          credentials: "include", // Envía cookies para verificar la sesión
        });
        const data = await response.json();
        setIsAuthenticated(data.authenticated);
      } catch (error) {
        console.error("Error al verificar la sesión:", error);
        setIsAuthenticated(false);
      }
    };

    checkSession();
  }, [sessionEndpoint]);

  return isAuthenticated;
}

export default useAuth;
