import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/login"; // Importamos el componente Login
import Adminpanel from "./components/adminpanel/adminpanel";
import UseAuth from "./components/Hooks/useAuth";
import ProtectedRoute from "./components/Hooks/redirigir";
import SimpleButtonRequest from "./components/boton/boton";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <Router>
      <Routes>
        {/* Define las rutas */}
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Adminpanel />} />
        <Route path="/mostrar-cookie" element={<UseAuth />} />
         <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Adminpanel />
            </ProtectedRoute>
          }
        />
        <Route path="/boton" element={<SimpleButtonRequest />} />
        
      </Routes>
    </Router>
  );
}

export default App;
