import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, password }),
      });


      const data = await response.json();

      if (response.ok) {
        // Si el registro fue exitoso, guardar usuario y token
        login(data.usuario, data.token);

        // Si el usuario es admin, redirige al dashboard
        if (data.usuario.rol === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      } else {
        // Si el servidor responde con un error
        setMessage(data.message || "Error al registrar usuario.");
      }
    } catch (error) {
      setMessage("Error de conexión con el servidor.");
    }
  };

  return (
    <div>
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleRegister}>
          <h1 className="h3 mb-3 fw-normal">Crear una cuenta</h1>

          <div className="form-floating">
            <input
              type="text"
              value={nombre}
              className="form-control"
              id="nombreInput"
              placeholder="Nombre de usuario"
              onChange={(e) => setNombre(e.target.value)}
              required
            />
            <label htmlFor="nombreInput">Nombre de usuario</label>
          </div>

          <div className="form-floating">
            <input
              type="email"
              value={email}
              className="form-control"
              id="emailInput"
              placeholder="Correo electrónico"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="emailInput">Correo electrónico</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              value={password}
              className="form-control"
              id="passwordInput"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="passwordInput">Contraseña</label>
          </div>

          <button className="btn btn-primary w-100 py-2 mt-3" type="submit">
            Registrarse
          </button>

          {message && (
            <p className="text-danger mt-3 text-center">{message}</p>
          )}

          <p className="mt-5 mb-3 text-body-secondary text-center">
            &copy; 2025
          </p>
        </form>
      </main>
    </div>
  );
};

export default Register;
