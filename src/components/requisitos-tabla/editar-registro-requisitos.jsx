import React, { useEffect, useState } from "react";
import { decode } from "html-entities";
import "./editar-registro-requisitos.css";
import Header from "../header/header";
import { useParams, useNavigate } from "react-router-dom";

function EditarRegistroRequisito() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Inicializa ambos estados para requisito y seccion
  const [requisito, setRequisito] = useState({
    id: "",
    estatus: "",
    codigo: "",
    valor: "",
    etiqueta: "",
    descripcion: "",
  });

  const [seccion, setSeccion] = useState({
    id_requisito: "",
    descripcion_requisito: "",
    id_seccion: "",
    valor_seccion: "",
    descripcion_seccion: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Llama a la API para obtener los datos
    fetch(`http://localhost:8089/requisitos/${id}`, {
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
        // Decodifica y asigna los datos al estado
        const requisitoDecodificado = {
          ...data.requisito,
          descripcion: decode(data.requisito.descripcion),
          etiqueta: decode(data.requisito.etiqueta),
        };

        const seccionDecodificada = {
          ...data.seccion,
          descripcion_requisito: decode(data.seccion.descripcion_requisito),
          descripcion_seccion: decode(data.seccion.descripcion_seccion),
          valor_seccion: decode(data.seccion.valor_seccion),
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

  const handleSubmitRequisito = (e) => {
    console.log("Datos enviados para actualizar requisito:", requisito);
    e.preventDefault();

    fetch(`http://localhost:8089/requisitos-actualizar/${id}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requisito),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al actualizar el requisito");
        }
        alert("Requisito actualizado exitosamente");
        navigate("/requisitos");
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
  };

  const handleSubmitSeccion = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8089/requisitos-seccion/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ seccion }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al actualizar la sección");
        }
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
        <form onSubmit={handleSubmitRequisito}>
          <label>Codigo:</label>
          <input type="text" value={requisito.codigo} />
          <label>Etiqueta:</label>
          <input
            type="text"
            value={requisito.etiqueta}
            onChange={(e) =>
              setRequisito({ ...requisito, etiqueta: e.target.value })
            }
          />
          <label>Descripción:</label>
          <textarea
            // Ajusta el número de filas visibles
            cols="50"
            value={requisito.descripcion}
            onChange={(e) =>
              setRequisito({ ...requisito, descripcion: e.target.value })
            }
          />
          <div>
            <button type="submit">Guardar Cambios del Requisito</button>
          </div>
        </form>

        <h2>Editar Sección</h2>
        <form onSubmit={handleSubmitSeccion}>
          <label>Valor de Sección:</label>
          <input
            type="text"
            value={seccion.valor_seccion}
            onChange={(e) =>
              setSeccion({ ...seccion, valor_seccion: e.target.value })
            }
          />
          <label>Descripción de Sección:</label>
          <textarea
 // Ajusta el número de filas visibles
            cols="50"
            value={seccion.descripcion_seccion}
            onChange={(e) =>
              setSeccion({ ...seccion, descripcion_seccion: e.target.value })
            }
          />
          <div>
            <button type="submit">Guardar Cambios de la Sección</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditarRegistroRequisito;
