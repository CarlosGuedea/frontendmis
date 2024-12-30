import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/login"; // Importamos el componente Login
import Adminpanel from "./components/adminpanel/adminpanel";
import ProtectedRoute from "./components/Hooks/redirigir";
import SimpleButtonRequest from "./components/boton/boton";
import Tramitespanel from "./components/tramitespanel/tramitespanel";
import RequisitosTabla from "./components/requisitos-tabla/requisitos-tabla";
import EditarRegistroRequisito from "./components/requisitos-tabla/editar-registro-requisitos";



function App() {

  return (
    <Router>
      <Routes>
        {/* Define las rutas */}
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Adminpanel />} />
        <Route path="/mostrar-cookie" />
        <Route
          path="/adminpanel"
          element={
            <ProtectedRoute>
              <Adminpanel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tramites-panel"
          element={
            <ProtectedRoute>
              <Tramitespanel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/requisitos"
          element={
            <ProtectedRoute>
              <RequisitosTabla/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/requisitos/:id"
          element={
            <ProtectedRoute>
              <EditarRegistroRequisito/>
            </ProtectedRoute>
          }
        />

        <Route path="/boton" element={<SimpleButtonRequest />} />

      </Routes>
    </Router>
  );
}

export default App;
