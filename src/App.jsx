// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import ImageCircle from './components/main/ImageCircle'
import Footer from './components/footer/Footer'

import SeccionProyectos from './components/Seccion/SeccionProyectos'
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

  <SeccionProyectos />
  <section id="proyectos">
  <ImageCircle urlImage='https://scontent.fmdq6-1.fna.fbcdn.net/v/t39.30808-6/378556112_747480623849337_405259609514579001_n.jpg?stp=dst-jpg_s552x414&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHSorK9M7sm27m8Hu7kpvNKImXSLrrbMiMiZdIuutsyIwCC3pV_2Yll2NO4x5MgPqg&_nc_ohc=UJIf51KrG5YAX953pLg&_nc_ht=scontent.fmdq6-1.fna&oh=00_AfCLB8lZeh2Uty0zH8a9rMl4dSw8lyd2aPbA7xfLPZ9_kQ&oe=653CAE18' borderColor='red'  />
  <ImageCircle urlImage='https://scontent.fmdq6-1.fna.fbcdn.net/v/t39.30808-6/378534433_747480640516002_7148719400765901053_n.jpg?stp=dst-jpg_s552x414&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEmt8TlClinG8199HnT1A24PKEJ7DW3rao8oQnsNbetqou-nc-3bwcq0dgSkoy9JiA&_nc_ohc=z3aM6pkwWWwAX_iH_lH&_nc_ht=scontent.fmdq6-1.fna&oh=00_AfByzOaGF-7SRwSF3zq0ZUzk2BO9c9gn4UeVixo-cUUvLA&oe=653BB90A' borderColor='blue'/>
  <ImageCircle urlImage='https://scontent.fmdq6-1.fna.fbcdn.net/v/t39.30808-6/378513093_747480637182669_3823426743743443009_n.jpg?stp=dst-jpg_s552x414&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHjIL0hn5bjzpkKl_PfSUFmA3B8KCNEhz8DcHwoI0SHP2uccTtzzk2k-FHielJWTbk&_nc_ohc=9M5BDrqH6goAX88nNUQ&_nc_ht=scontent.fmdq6-1.fna&oh=00_AfCf3H46UaCeqgtSsWUnxCw2CHHuCQDwLE0SqaNy75HmhA&oe=653C52E1' borderColor='green'/>
  </section>

  <section id="contacto">
    <h2>Contacto</h2>
   
    {/* Contenido de la sección Contacto */}
    <p>***************</p>
    <p>***************</p>
    
  </section>
<Footer />
</>
  )
}

export default App
