import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import NoticiasCRUD from './Crud/NoticiasCrud';
import ActividadesCRUD from './Crud/ActividadesCRUD';
import ContactosCRUD from './Crud/ContactosCRUD';
import UsuariosCRUD from './Crud/UsuariosCRUD';



const Dashboard = () => {
    const { usuario, token, logout } = useAuth();
    const [dashboardMessage, setDashboardMessage] = useState('');
    const [seccionActiva, setSeccionActiva] = useState('inicio'); // Nuevo estado para la sección activa
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const response = await fetch('http://localhost:3000/dashboard', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                if (response.ok) {
                    setDashboardMessage(data.message);
                } else {
                    setDashboardMessage('Acceso no autorizado.');
                    logout();
                }
            } catch (error) {
                setDashboardMessage('Error al obtener datos protegidos.');
                console.error(error);
            }
        };

        if (token) {
            fetchProtectedData();
        } else {
            navigate('/login');
        }
    }, [token, navigate, logout]);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    // Función para renderizar el contenido principal
    const renderizarContenido = () => {
        switch (seccionActiva) {
            case 'noticias':
                return <NoticiasCRUD />;
            case 'actividades':
                return <ActividadesCRUD />;
            case 'usuarios':
                return <UsuariosCRUD />;
            case 'contactos':
                return <ContactosCRUD />;
            default:
                return (
                    <div style={{ padding: "2rem", textAlign: "center" }}>
                        <h2>Bienvenido, {usuario?.nombre}</h2>
                        <p>{dashboardMessage}</p>
                        <button
                            className="btn btn-outline-dark"
                            onClick={() => navigate("/")}
                        >
                            Ver Página
                        </button>
                    </div>
                );
        }
    };

    return (
        <div>
            <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#">Institucion ATAD</a>
            </header>
            <div className="container-fluid">
                <div className="row">
                    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                        <div className="offcanvas-md offcanvas-end bg-body-tertiary" tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className={`nav-link d-flex align-items-center gap-2 ${seccionActiva === 'inicio' ? 'active' : ''}`}
                                            href="#"
                                            onClick={() => setSeccionActiva('inicio')}>
                                            <svg className="bi" aria-hidden="true"><use xlinkHref="#house-fill"></use></svg>
                                            INICIO
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link d-flex align-items-center gap-2 ${seccionActiva === 'noticias' ? 'active' : ''}`}
                                            href="#"
                                            onClick={() => setSeccionActiva('noticias')}>
                                            <svg className="bi" aria-hidden="true"><use xlinkHref="#file-earmark"></use></svg>
                                            NOTICIAS
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link d-flex align-items-center gap-2 ${seccionActiva === 'actividades' ? 'active' : ''}`}
                                            href="#"
                                            onClick={() => setSeccionActiva('actividades')}>
                                            <svg className="bi" aria-hidden="true"><use xlinkHref="#cart"></use></svg>
                                            ACTIVIDADES
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link d-flex align-items-center gap-2 ${seccionActiva === 'usuarios' ? 'active' : ''}`}
                                            href="#"
                                            onClick={() => setSeccionActiva('usuarios')}>
                                            <svg className="bi" aria-hidden="true"><use xlinkHref="#file-earmark-text"></use></svg>
                                            USUARIOS
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link d-flex align-items-center gap-2 ${seccionActiva === 'contactos' ? 'active' : ''}`}
                                            href="#"
                                            onClick={() => setSeccionActiva('contactos')}
                                        >
                                            <svg className="bi" aria-hidden="true"><use xlinkHref="#gear-wide-connected"></use></svg>
                                            CONTACTOS
                                        </a>
                                    </li>
                                </ul>

                                <ul className="nav flex-column mb-auto">
                                    <hr className="my-3" />
                                    <li className="nav-item BLACK">
                                        <a className="nav-link d-flex align-items-center gap-2" href="#">
                                            <button className="btn btn-primary w-100 py-2" type="submit" onClick={handleLogout}>Cerrar Sesión</button>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Dashboard</h1>
                        </div>
                        {renderizarContenido()} {/* Llamamos a la función para renderizar el contenido */}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;


