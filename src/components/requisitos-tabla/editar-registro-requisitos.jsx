import React, { useEffect, useState } from "react";
import { decode } from "html-entities";
import "./editar-registro-requisitos.css";
import Header from "../header/header";
import { useParams, useNavigate } from "react-router-dom";

function EditarRegistroRequisito() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [seccion, setSeccion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [requisito, setRequisito] = useState({
    requisito: "",
    descripcion: "",
    etiqueta: "",
  });

  useEffect(() => {
    fetch(`http://localhost:5000/requisitos/${id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos del requisito");
        }
        return response.json();
      })
      .then((data) => {
        const requisitoDecodificado = {
          ...data.requisito,
          descripcion: decode(data.requisito.descripcion),
          requisito: decode(data.requisito.requisito),
          codigo: decode(data.requisito.codigo),
        };

        const seccionDecodificada = {
          ...data.seccion,
          descripcion_requisito: decode(data.seccion.descripcion_requisito),
          descripcion_seccion: decode(data.seccion.descripcion_seccion),
          valor: decode(data.seccion.valor),
        };

        setRequisito(requisitoDecodificado);
        setSeccion(seccionDecodificada);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const datosFiltrados = {
      codigo: requisito.codigo,
      descripcion: requisito.descripcion,
      requisito: requisito.requisito,
    };

    fetch(`http://localhost:5000/requisitos/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosFiltrados),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al actualizar el requisito");
        }
        return response.json();
      })
      .then(() => {
        alert("Requisito actualizado exitosamente");
        navigate("/requisitos");
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
  };

  const handleSubmitSeccion = (e) => {
    e.preventDefault();

    const datosFiltrados = {
      valor: seccion.valor,
      descripcion_seccion: seccion.descripcion_seccion,
    };

    fetch(`http://localhost:5000/requisitos-seccion/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosFiltrados),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al actualizar la sección");
        }
        return response.json();
      })
      .then(() => {
        alert("Sección actualizada exitosamente");
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Header />

      <div className="container-requisito-edicion">
        <h2>Editar Requisito</h2>

        <h4>Información general</h4>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="container-requisito-nombre">
            <h5>Nombre del documento:</h5>
            <input
              type="text"
              value={requisito.requisito || ""}
              onChange={(e) =>
                setRequisito({ ...requisito, requisito: e.target.value })
              }
            />
          </div>

          <div className="container-requisito-nombre">
            <h5>Código: </h5>
            <input
              type="text"
              value={requisito.codigo || ""}
              onChange={(e) =>
                setRequisito({ ...requisito, codigo: e.target.value })
              }
            />
          </div>

          <div className="container-requisito-descripcion">
            <textarea
              className="form-control"
              value={requisito.descripcion || ""}
              onChange={(e) =>
                setRequisito({ ...requisito, descripcion: e.target.value })
              }
            />
          </div>
          <div className="espacio-boton">
            <button type="submit" className="btn btn-primary">
              Guardar Cambios del Requisito
            </button>
          </div>
        </form>
        <hr />

        <h4>Sección</h4>
        <form onSubmit={handleSubmitSeccion}>
          <div className="container-seccion-valor">
            <h5>Valor de la sección:</h5>
            <input
              type="text"
              value={seccion.valor || ""}
              onChange={(e) =>
                setSeccion({ ...seccion, valor: e.target.value })
              }
            />
          </div>

          <div className="container-seccion-nombre">
            <textarea
              className="form-control"
              value={seccion.descripcion_seccion || ""}
              onChange={(e) =>
                setSeccion({ ...seccion, descripcion_seccion: e.target.value })
              }
            />
          </div>

          <div className="espacio-boton">
            <button type="submit" className="btn btn-primary">
              Guardar Cambios de la Sección
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditarRegistroRequisito;
