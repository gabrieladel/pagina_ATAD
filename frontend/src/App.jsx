import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./components/header/Header";
import Nosotros from "./components/nosotros/Nosotros";
import Footer from "./components/footer/Footer";
import Contacto from "./components/contacto/contacto";
import Noticia from "./components/noticias/Noticias";
import Actividad from "./components/actividades/Activides";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import SeccionProyectos from "./components/Seccion/SeccionProyectos";
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";


const LandingPageLayout = () => (
  <>
    
    <section id="nosotros">
      <Nosotros />
    </section>

    <section id="proyectos">
      <SeccionProyectos />
    </section>
    <section id="noticias">
      <h2>Noticias</h2>
      <Noticia />
    </section>
      <section id="actividades">
      <h2>Actividades</h2>
      <Actividad />
    </section>

    <section id="contacto">
      <Contacto />
    </section>
    <Footer />
  </>
);


function AppContent() {
  const location = useLocation();

  // Si estoy en alguna de estas rutas NO muestra el Header
  const hideHeader =
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/register") ||
    location.pathname.startsWith("/dashboard");

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<LandingPageLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute requireAdmin={true}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
