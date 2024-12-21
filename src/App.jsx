import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/login"; // Importamos el componente Login
import Adminpanel from "./components/adminpanel/adminpanel";
import useAuth from "./components/Hooks/useAuth";
import PrivateRoute from "./components/Hooks/redirigir";


function App() {

  const isAuthenticated = useAuth("http://localhost:8084/Sesion");


  return (
    <Router>
      <Routes>
        {/* Define las rutas */}
        <Route path="/" element={<Login />} />
        <Route
          path="/adminpanel"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Adminpanel />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
