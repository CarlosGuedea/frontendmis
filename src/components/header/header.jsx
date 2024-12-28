import React, { useState } from "react";
import "./header.css"; // Importamos los estilos

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <img
        className="img-logo-header"
        src="./icons/MIS_LOGO.png"
        alt="logo mis"
      />
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav-links ${isMenuOpen ? "show" : ""}`}>
        <a className="link-home" href="">
          <img className="img-home" src="./icons/home.png" alt="home" />
          <h5>Inicio</h5>
        </a>

        <a className="link-administracion" href="">
          <img
            className="img-engranaje"
            src="./icons/engranaje.png"
            alt="administracion"
          />
          <h5>Administración</h5>
        </a>

        <a className="link-modulos" href="">
          <img className="img-modulos" src="./icons/hombre.png" alt="modulos" />
          <h5>Módulos</h5>
        </a>
      </nav>
    </div>
  );
}

export default Header;
