import React, { useEffect, useState } from "react";
import $ from "jquery"; // Asegúrate de importar jQuery
import './requisitos-tabla.css';
import Header from '../header/header';
import { decode } from "html-entities";
import DataTable from "datatables.net-dt"; // Importa la librería de DataTables
import Responsive from "datatables.net-responsive-dt";

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
  }, []); // El arreglo vacío asegura que solo se ejecuta una vez al cargar el componente

  useEffect(() => {
    // Inicializa DataTable solo cuando los datos estén disponibles
    if (requisitos.length > 0) {
      // Inicializa DataTable en la tabla después de que los datos se hayan cargado
      $("#requisitos-table").DataTable();
    }
  }, [requisitos]); // Ejecuta el efecto cada vez que los requisitos cambien

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <Header></Header>
      <div>
        <div className="title-requisitos">
          <h2>Requisitos</h2>
        </div>
        <table id="requisitos-table" className="table table-hover table-bordered table-striped table-requisitos" border="1">
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>Estatus</th>
              <th>Código</th>
              <th>Requisito</th>
              <th>Etiqueta</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {requisitos.map((requisito) => (
              <tr key={requisito.id}>
                <td>{requisito.id}</td>
                <td>{requisito.estatus}</td>
                <td>{requisito.codigo}</td>
                <td>{requisito.requisito}</td>
                <td>{requisito.etiqueta}</td>
                <td><button></button><button></button></td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequisitosListar;
