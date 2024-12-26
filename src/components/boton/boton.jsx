import React, { useState } from "react";

function SimpleButtonRequest() {
  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleButtonClick = async () => {
    setIsLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Para enviar cookies si es necesario
        mode: "cors",
        body: JSON.stringify({ email, password }), // Incluir los campos en el cuerpo
      });

      console.log(response);
      if (response.ok) {
        const data = await response.json();
        setResponseMessage(data.message || "Solicitud exitosa");
      } else {
        setResponseMessage("Error en la solicitud.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setResponseMessage("Hubo un error al procesar la solicitud.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "10px", marginBottom: "10px", width: "80%" }}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "10px", marginBottom: "10px", width: "80%" }}
      />
      <br />
      <button
        onClick={handleButtonClick}
        disabled={isLoading}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: isLoading ? "not-allowed" : "pointer",
        }}
      >
        {isLoading ? "Cargando..." : "Enviar Solicitud"}
      </button>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default SimpleButtonRequest;
