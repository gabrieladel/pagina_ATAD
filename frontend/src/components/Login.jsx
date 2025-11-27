import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import React, { useState } from "react";
import Register from './Register';


const Login = () => {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); 
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://paginaatad-production.up.railway.app/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, password }),
      });
      const data = await response.json();

      if (response.ok) {
        login(data.usuario, data.token);
        if (data.usuario.rol === 'admin') navigate('/dashboard');
        else navigate('/');
      } else {
        setMessage(data.message || 'Error en el login.');
      }
    } catch (error) {
      setMessage('Error de conexión con el servidor.');
    }
  };

  return (
    <div>
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleLogin}>
          <h1 className="h3 mb-3 fw-normal">Por favor inicia sesión</h1>

          <div className="form-floating">
            <input
              value={nombre}
              className="form-control"
              id="floatingInput"
              placeholder="name"
              onChange={(e) => setNombre(e.target.value)}
              required
            />
            <label htmlFor="floatingInput">Nombre de usuario</label>
          </div>

          <div className="form-floating">
            <input
              value={password}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="floatingPassword">Contraseña</label>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="checkDefault"
            />
            <label className="form-check-label" htmlFor="checkDefault">
              Recordarme
            </label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">
            Iniciar sesión
          </button>

          {message && <p className="text-danger mt-3">{message}</p>}

        
          <div className="mt-3 text-center">
            <span>¿No tienes cuenta? </span>
            <Link to="/register" className="btn btn-link p-0">
              Regístrate
            </Link>
          </div>

          <p className="mt-5 mb-3 text-body-secondary">&copy; 2025</p>
        </form>
      </main>
    </div>
  );
};

export default Login;

