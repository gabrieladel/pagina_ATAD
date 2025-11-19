import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard/Dashboard";

import { AuthProvider } from "./context/AuthContext";

import NosotrosPage from "./pages/NosotrosPage";
import ProyectosPage from "./pages/ProyectosPage";
import NoticiasPage from "./pages/NoticiasPage";
import ActividadesPage from "./pages/ActividadesPage";
import ContactoPage from "./pages/ContactoPage";

function AppContent() {
  const location = useLocation();

  // Si estoy en estas rutas NO muestra el Header y Footer
  const hideHeader =
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/register") ||
    location.pathname.startsWith("/dashboard");

  const hideFooter = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
        <Route path="/noticias" element={<NoticiasPage />} />
        <Route path="/actividades" element={<ActividadesPage />} />
        <Route path="/contacto" element={<ContactoPage />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* DASHBOARD */}
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

      {!hideFooter && <Footer />}
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