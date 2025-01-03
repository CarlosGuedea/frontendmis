import Header from "../header/header";
import "./nuevo-registro-requisito.css";
import React, { useState } from "react";

function NuevoRegistroRequisito() {
  const [requisito, setRequisito] = useState({
    requisito: "",
    descripcion: "",
    etiqueta: "",
    codigo: "",
  });

  const [seccion, setSeccion] = useState({
    nombre: "",
    descripcion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que los campos requeridos no estén vacíos
    if (
      !requisito.requisito ||
      !requisito.etiqueta ||
      !requisito.codigo ||
      !seccion.nombre
    ) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    // Preparar los datos a enviar
    const datosAEnviar = {
      requisito,
      seccion,
    };

    // Enviar los datos al backend
    fetch("http://localhost:5000/requisitos-nuevo", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosAEnviar),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al registrar el nuevo requisito");
        }
        return response.json();
      })
      .then((data) => {
        alert("Requisito registrado exitosamente");
        // Reiniciar el formulario
        setRequisito({
          requisito: "",
          descripcion: "",
          etiqueta: "",
          codigo: "",
        });
        setSeccion({
          nombre: "",
          descripcion: "",
        });
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
  };

  return (
    <div>
      <Header />
      <div className="container-requisito-edicion">
        <h2>Nuevo Requisito</h2>
        <h4>Información general</h4>
        <hr />
        <form onSubmit={handleSubmit}>
          {/* Nombre del documento */}
          <div className="container-requisito-nombre">
            <h5>Nombre del documento: </h5>
            <input
              type="text"
              value={requisito.requisito}
              onChange={(e) =>
                setRequisito({ ...requisito, requisito: e.target.value })
              }
              required
            />
          </div>

          {/* Etiqueta */}
          <div className="container-requisito-etiqueta">
            <h5>Etiqueta: </h5>
            <input
              type="text"
              value={requisito.etiqueta}
              onChange={(e) =>
                setRequisito({ ...requisito, etiqueta: e.target.value })
              }
              required
            />
          </div>

          {/* Código */}
          <div className="container-requisito-codigo">
            <h5>Código: </h5>
            <input
              type="text"
              value={requisito.codigo}
              onChange={(e) =>
                setRequisito({ ...requisito, codigo: e.target.value })
              }
              required
            />
          </div>

          {/* Descripción */}
          <div className="container-requisito-descripcion">
            <h5>Descripción: </h5>
            <textarea
              className="form-control"
              value={requisito.descripcion}
              onChange={(e) =>
                setRequisito({ ...requisito, descripcion: e.target.value })
              }
              required
            ></textarea>
          </div>

          {/* Sección */}
          <div className="title-seccion">
            <hr />
            <h4>Sección</h4>
          </div>

          {/* Nombre de la sección */}
          <div className="container-seccion-nombre">
            <h5>Nombre: </h5>
            <input
              type="text"
              value={seccion.nombre}
              onChange={(e) =>
                setSeccion({ ...seccion, nombre: e.target.value })
              }
              required
            />
          </div>

          {/* Descripción de la sección */}
          <div className="container-seccion-descripcion">
            <h5>Descripción: </h5>
            <textarea
              className="form-control"
              value={seccion.descripcion}
              onChange={(e) =>
                setSeccion({ ...seccion, descripcion: e.target.value })
              }
              required
            ></textarea>
          </div>

          {/* Botón de envío */}
          <div className="espacio-boton">
            <button type="submit" className="btn btn-primary">
              Guardar Requisito
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NuevoRegistroRequisito;
