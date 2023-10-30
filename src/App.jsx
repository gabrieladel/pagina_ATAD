// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./components/header/Header";
import Nosotros from "./components/nosotros/Nosotros";
import ImageCircle from "./components/main/ImageCircle";
import Footer from "./components/footer/Footer";

import Face from "./components/social/Face";

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
        <Face />
      </section>
      <section id="contacto">
        <h2>Contacto</h2>

        {/* Contenido de la sección Contacto */}
        <p>***************</p>
        <p>***************</p>
      </section>
      <Footer />
    
    </>
  );
}

export default App;
