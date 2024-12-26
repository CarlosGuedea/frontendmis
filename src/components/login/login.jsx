import React, { useState } from "react";
import axios from "axios"; // Importamos axios para hacer peticiones HTTP
import { useNavigate } from "react-router-dom"; // Importa useNavigate para redirigir
import "./Login.css"; // Importamos los estilos

function Login() {
  // Definir el estado para los campos del formulario y los errores
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Para mostrar errores
  const [isLoading, setIsLoading] = useState(false); // Para mostrar un loading

  const navigate = useNavigate(); // Definir el hook para redirigir

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado de enviar el formulario

    // Restablecemos el mensaje de error antes de intentar enviar los datos
    setErrorMessage("");
    setIsLoading(true); // Mostrar loading mientras se procesa la solicitud

    try {
      // Enviar la solicitud al backend con axios
      const response = await axios.post(
        "http://localhost:5000/login",
        { email, password },
        {
          withCredentials: true, // Enviar las cookies de sesión si las tienes
        }
      );

      console.log(response.status); // Ver la respuesta del servidor

      // Si la respuesta es exitosa, redirigir o realizar alguna acción
      if (response.status === 200) {
        console.log("hola mundo");
        // Redirigir a otra página, como el dashboard
        navigate("/dashboard"); // Redirige a /dashboard
      } else {
        setErrorMessage(response.data.message); // Mostrar el mensaje de error
      }
    } catch (error) {
      console.error("Error en la solicitud", error);
      setErrorMessage("Hubo un error al intentar iniciar sesión.");
    } finally {
      setIsLoading(false); // Dejar de mostrar el loading
    }
  };

  return (
    <div className="login-container">
      <div className="column">
        <img src="/icons/MIS_LOGO.png" className="img-logo" width="70%" alt="Logo" />
        <p>Municipio Inteligente y Sustentable</p>
      </div>

      <div className="column-2">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Ingrese su usuario"
              value={email}
              onChange={(e) => setemail(e.target.value)} // Actualizamos el estado
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Actualizamos el estado
              required
            />
          </div>
          <button className="btn-sesion" type="submit" disabled={isLoading}>
            {isLoading ? "Iniciando..." : "Iniciar sesión"}
          </button>
        </form>

        {/* Mostrar mensaje de error si lo hay */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <hr />
        <h5>Ingresar como ciudadano</h5>
        <form>
          <input type="tel" id="phone" placeholder="Ingrese su número" />
          <div>
            <button className="btn-whatsapp">Ingresar con Whatsapp</button>
          </div>
        </form>
        <h5>O continúa con</h5>
      </div>
    </div>
  );
}

export default Login;
