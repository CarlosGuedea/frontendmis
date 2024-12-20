import React from "react";
import "./Login.css"; // Importamos los estilos

function Login() {
  return (
    <html>
    <body>
      <div className="login-container">
      <div className="column">
        <img src="/icons/MIS_LOGO.png" className="img-logo" width="70%" />
        <p>Municipio Inteligente y Sustentable</p>
      </div>

      <div className="column-2">
        <h2>Iniciar sesión</h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Ingrese su usuario"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingrese su contraseña"
              required
            />
          </div>
          <button className="btn-sesion" type="submit">
            Iniciar sesión
          </button>
        </form>
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
    </body>
    </html>
  );
}

export default Login;
