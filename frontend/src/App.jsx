// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./components/header/Header";
import Nosotros from "./components/nosotros/Nosotros";
import Footer from "./components/footer/Footer";
import Contacto from "./components/contacto/contacto";
import Eventos from "./components/eventos/Eventos";

/* import Face from "./components/social/Face"; */

import SeccionProyectos from "./components/Seccion/SeccionProyectos";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Nosotros />
      <section id="proyectos">
        <SeccionProyectos />
      </section>
      <section id="eventos">
        <h2>Eventos</h2>
        {/* Contenido de la sección Eventos */}
        {/*  <Face /> */}
      </section>
      <Eventos />
      <section id="contacto">
        <Contacto />
      </section>
      <Footer />
    </>
  );
}

export default App;
