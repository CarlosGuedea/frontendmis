import React from "react";
import "./adminpanel.css"; // Importamos los estilos
import Header from "../header/header";
import { Link } from 'react-router-dom'; 

function Adminpanel() {
  return (
    <div>
    <Header></Header>
    <div className="titulo-administracion">
    <img className="img-administracion" src="./icons/engranaje.png" alt="Administración" />
    <h2>Administración</h2>
    </div>
    <div className="subtitulo-administracion">
    <h5>Administración de trámites, requisitios, áreas y puestos</h5>
    </div>
   
    <div className="container fluid-container">

  <section className="section">

    <div className="row flex-row">
      <div className="col-md-3 flex-item justify-content-center">
      
      <Link to="/tramites-panel">
        <div className="box box-tramites">
          <img src="icons/tramites.png" alt="tramites" className="img-tramites"/>
          <h4>Trámites</h4>
          <h6 className="title">Administración de trámites, requisitos, áreas y puestos</h6>
        </div>
      </Link>

      </div>
      <div className="col-md-3">
      
      <a href="/tramites-panel">
        <div className="box box-usuarios">
            <img src="icons/usuarios.png" alt="usuarios" className="img-usuarios"/>
            <h4>Panel de Módulos y Usuarios</h4>
          <h6>Administración de módulos y usuarios</h6>
        </div>
        </a>

      </div>
      <div className="col-md-3">
      <a href="">
        <div className="box box-empleados">
            <img src="icons/empleados.png" alt="areas" className="img-empleados"/>
            <h4>Módulo de empleados</h4>
          <h6>Administración para la lista de empleados</h6>
        </div>
        </a>
    
      </div>
      <div className="col-md-3">
      <a href="">
        <div className="box box-micrositios">
          
            <img src="icons/micrositios.png" alt="" srcset="" className="img-micrositios"/>
            <h4>Micrositios</h4>
          <h6>Administración para Micrositios</h6>
          
        </div>
        </a>
      </div>

      <div className="col-md-3">
      <a href="">
        <div className="box box-oficialia">
            <img src="icons/oficialia.png" alt="oficialia" srcset="" className="img-oficialia"/>
            <h4>Oficicialia de Partes</h4>
          <h6>Administración de oficios y documentos</h6>
        </div>
        </a>
      </div>

    </div>
  </section>


</div>


    </div>
  )
}

export default Adminpanel;