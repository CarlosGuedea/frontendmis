import React, { useEffect, useState } from "react";
import { Grid, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css"; // Estilo de Grid.js
import Header from "../header/header";
import { decode } from "html-entities";
import "./requisitos-tabla.css";

const RequisitosListar = () => {
  const [requisitos, setRequisitos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Llama al endpoint para obtener los datos
    fetch("http://localhost:5000/requisitos", {
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

  useEffect(() => {
    if (requisitos.length > 0) {
      // Renderiza Grid.js cuando los datos están disponibles
      new Grid({
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
                  <a href="/requisitos/${row.cells[0].data}">
                  <button class="btn btn-danger">Eliminar</button>
                  </a>
                </div>
              `),
          },
        ],
        data: requisitos.map((requisito) => [
          requisito.id,
          requisito.estatus,
          requisito.codigo,
          requisito.requisito,
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
      }).render(document.getElementById("requisitos-grid"));
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
        <div className="table-container">
          <div id="requisitos-grid" className="overflow-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default RequisitosListar;
