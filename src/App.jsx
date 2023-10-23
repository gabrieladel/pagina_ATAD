// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import ImageCircle from './components/main/ImageCircle'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      
      <br />
      <br />
      <br />
      <br />
      <br />
    <section id="nosotros">
    <h2>Nosotros</h2>
    <p>***************</p>
    <p>***************</p>

  </section>

  <section id="eventos">
    <h2>Eventos</h2>
    {/* Contenido de la sección Eventos */}
    <p>***************</p>
    <p>***************</p>
    <ImageCircle urlImage='https://live.staticflickr.com/8258/8683827826_7345599262_b.jpg' borderColor='red'  />

  </section>

  <section id="proyectos">
    <h2>Proyectos</h2>
    {/* Contenido de la sección Proyectos */}
    <p>***************</p>
    <p>***************</p>
    <ImageCircle urlImage='https://live.staticflickr.com/8258/8683827826_7345599262_b.jpg' borderColor='red'  />
    
  </section>

  <section id="contacto">
    <h2>Contacto</h2>
   
    {/* Contenido de la sección Contacto */}
    <p>***************</p>
    <p>***************</p>
    
  </section>

</>
  )
}

export default App
