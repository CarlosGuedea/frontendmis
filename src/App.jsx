import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/login/login'; // Importamos el componente Login
import Adminpanel from './components/adminpanel/adminpanel';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define las rutas */}
        <Route path="/" element={<Login />} />
        <Route path="/adminpanel" element={<Adminpanel />} />
       
      </Routes>
    </Router>
  );
}

export default App;
