import React from "react";
import "./tramitespanel.css"; // Importamos los estilos
import Header from "../header/header";

function Tramitespanel() {
  return (
    <div>
      <Header />
      <div className="titulo-administracion">
        <img
          className="img-administracion"
          src="./icons/tramites.png"
          alt="Tramites"
        />
        <h2>Trámites</h2>
      </div>
      <div className="subtitulo-administracion">
        <h5>Administración de trámites, requisitos, áreas y puestos</h5>
      </div>

      <div className="container fluid-container">
        <section className="section">
          {/* Primera fila */}
          <div className="row flex-row">
            <div className="col-sm-6 col-md-4">
              <a href="">
                <div className="box box-requisitos">
                  <img
                    src="icons/requisito.png"
                    alt="tramites"
                    className="img-requisito"
                  />
                  <h4>Requisito</h4>
                  <h6 className="title">Administración para los requisitos</h6>
                </div>
              </a>
            </div>

            <div className="col-sm-6 col-md-4">
              <a href="">
                <div className="box box-recepcion">
                  <img
                    src="icons/recepcion.png"
                    alt="recepcion"
                    className="img-recepcion"
                  />
                  <h4>Recepción de trámites</h4>
                  <h6>Administración de módulos y usuarios</h6>
                </div>
              </a>
            </div>

            <div className="col-sm-6 col-md-4">
              <a href="">
                <div className="box box-tramites2">
                  <img
                    src="icons/tramites.png"
                    alt="tramites"
                    className="img-tramites"
                  />
                  <h4>Trámites</h4>
                  <h6>Administración para los trámites</h6>
                </div>
              </a>
            </div>

            <div className="col-sm-6 col-md-4">
              <a href="">
                <div className="box box-areas">
                  <img
                    src="icons/areas.png"
                    alt="areas"
                    className="img-areas"
                  />
                  <h4>Áreas</h4>
                  <h6>Administración para las áreas y subáreas</h6>
                </div>
              </a>
            </div>

            <div className="col-sm-6 col-md-4">
              <a href="">
                <div className="box box-puestos">
                  <img
                    src="icons/puestos.png"
                    alt="puestos"
                    className="img-puestos"
                  />
                  <h4>Puestos</h4>
                  <h6>Administración para los puestos</h6>
                </div>
              </a>
            </div>

            <div className="col-sm-6 col-md-4">
              <a href="">
                <div className="box box-cargos">
                  <img
                    src="icons/cargos.png"
                    alt="cargos"
                    className="img-cargos"
                  />
                  <h4>Cargos</h4>
                  <h6>Administración para los cargos</h6>
                </div>
              </a>
            </div>

            <div className="col-sm-6 col-md-4">
              <a href="">
                <div className="box box-validaciones">
                  <img
                    src="icons/validaciones.png"
                    alt="validaciones"
                    className="img-validaciones"
                  />
                  <h4>Validaciones</h4>
                  <h6>Administración para las validaciones</h6>
                </div>
              </a>
            </div>

            <div className="col-sm-6 col-md-4">
              <a href="">
                <div className="box box-centrovalidaciones">
                  <img
                    src="icons/validaciones.png"
                    alt="centro de validaciones"
                    className="img-centrovalidaciones"
                  />
                  <h4>Centro de Validaciones</h4>
                  <h6>Centro de validaciones de trámites</h6>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Tramitespanel;
