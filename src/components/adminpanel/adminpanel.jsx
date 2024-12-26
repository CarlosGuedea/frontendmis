import React from "react";
import "./adminpanel.css"; // Importamos los estilos
import Header from "../header/header";

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
   
    <div className="container">

  <section className="section">
    <h2>Sección 1</h2>
    <div className="row">
      <div className="col-md-3">
        <div className="box-tramites">
          <a href="">
          <img src="icons/tramites.png" alt="tramites" className="img-tramites"/>
          <h4>Trámites</h4>
          <h6>Administración de trámites, requisitos, áreas y puestos</h6>
          </a>
        </div>
      </div>
      <div className="col-md-3">
        <div className="box">Columna 2</div>
      </div>
      <div className="col-md-3">
        <div className="box">Columna 3</div>
      </div>
      <div className="col-md-3">
        <div className="box">Columna 4</div>
      </div>
    </div>
  </section>


  <section class="section">
    <h2>Sección 2</h2>
    <div class="row">
      <div class="col-md-4">
        <div class="box">Columna 1</div>
      </div>
      <div class="col-md-4">
        <div class="box">Columna 2</div>
      </div>
      <div class="col-md-4">
        <div class="box">Columna 3</div>
      </div>
    </div>
  </section>


  <section class="section">
    <h2>Sección 3</h2>
    <div class="row">
      <div class="col-md-6">
        <div class="box">Columna 1</div>
      </div>
      <div class="col-md-6">
        <div class="box">Columna 2</div>
      </div>
    </div>
  </section>
</div>


    </div>
  )
}

export default Adminpanel;