import React, { useEffect } from "react";

// Función para obtener el valor de una cookie específica
function getCookie(name) {
  const cookies = document.cookie.split("; "); // Divide las cookies en pares clave=valor
  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].split("="); // Divide cada par clave=valor
    if (key === name) {
      return decodeURIComponent(value); // Decodifica el valor si tiene caracteres especiales
    }
  }
  return null; // Si no se encuentra la cookie, devuelve null
}

// Componente para Mostrar el Valor de la Cookie
function UseAuth() {
  useEffect(() => {
    const accessToken = getCookie("access_token");
    console.log(accessToken);
  }, []); // El array vacío asegura que se ejecute solo al montar el componente

}

export default UseAuth;
