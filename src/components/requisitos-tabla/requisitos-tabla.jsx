import React, { useEffect, useState } from "react";
import { Grid, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css"; // Estilo de Grid.js
import Header from "../header/header";
import { decode } from "html-entities";
import "./requisitos-tabla.css";

const RequisitosListar = () => {
  const [requisitos, setRequisitos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Obtener los requisitos desde el servidor
  useEffect(() => {
    fetch("http://localhost:8089/requisitos", {
      method: "GET",
      credentials: "include", // Incluye credenciales en la solicitud
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los requisitos");
        }
        return response.json();
      })
      .then((data) => {
        // Decodifica las entidades HTML de cada campo necesario
        const requisitosDecodificados = data.map((requisito) => ({
          ...requisito,
          requisito: decode(requisito.requisito),
          etiqueta: decode(requisito.etiqueta),
        }));
        setRequisitos(requisitosDecodificados);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  // Función para eliminar un requisito usando fetch
  const eliminarRequisito = (id) => {
    fetch(`http://localhost:8089/requisitos-delete/${id}`, {
      method: "POST",
      credentials: "include", // Asegúrate de enviar las credenciales si las necesitas
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        // Recarga la página después de eliminar el requisito
        window.location.reload();
      })
      .catch((error) => {
        console.error(`Error al eliminar: ${error.message}`);
      });
  };

  useEffect(() => {
    if (requisitos.length > 0) {
      const grid = new Grid({
        columns: [
          "ID",
          {
            name: "Estatus",
            formatter: (cell) =>
              html(
                cell
                  ? `<span style="color: green; font-weight: bold;">Activo</span>`
                  : `<span style="color: red; font-weight: bold;">Inactivo</span>`
              ),
          },
          "Código",
          "Requisito",
          "Etiqueta",
          {
            name: "Acciones",
            formatter: (_, row) =>
              html(`
                <div class="botones-requisitos">
                  <a href="/requisitos/${row.cells[0].data}">
                    <button class="btn btn-warning">Editar</button>
                  </a>
                  <button id="eliminar-${row.cells[0].data}" class="btn btn-danger">Eliminar</button>
                </div>
              `),
          },
        ],
        data: requisitos.map((requisito) => [
          requisito.id,
          requisito.estatus,
          requisito.codigo,
          requisito.valor,
          requisito.etiqueta,
        ]),
        pagination: true,
        search: true,
        sort: true,
        resizable: true,
        language: {
          search: {
            placeholder: "Buscar...",
          },
          pagination: {
            previous: "Anterior",
            next: "Siguiente",
            showing: "Mostrando",
            results: () => "resultados",
          },
        },
      });

      // Se asegura de que el evento click sea escuchado correctamente
      const gridContainer = document.getElementById("requisitos-grid");
      gridContainer.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("btn-danger")) {
          const id = e.target.id.replace("eliminar-", "");
          eliminarRequisito(id);
        }
      });

      grid.render(gridContainer);
    }
  }, [requisitos]);

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <Header />
      <div>
        <div className="title-requisitos">
          <h2>Requisitos</h2>
        </div>
        <div className="button-nuevo-requisito">
          <a href="/requisitos-nuevo">
            <button className="">Nuevo requisito</button>
          </a>
        </div>
        <div className="table-container">
          <div id="requisitos-grid" className="overflow-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default RequisitosListar;
