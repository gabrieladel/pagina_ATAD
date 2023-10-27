import './Nosotros.css'
import imagen from '../../assets/images/ATAD-In.jpg'
import imagen_atdi from '../../assets/images/atdi_img.jpg'

export default function Nosotros() {
    return (
        <>
        <div className='conteiner'>
          <div className='conteiner-text'>
        <h1>ATAD</h1>
           <h3>Asociación Tandilense de Ayuda al Discapacitado </h3>
           <p>Es una institución educativa  privada fundada en 1982, de modalidad especial.
               Abarca los niveles: </p>
         <ul>
          <li>Inicial</li>
          <li>Primario</li>
          <li>CFI</li>
         </ul>
         </div>
         <div className='imagen1'>
        <img src={ imagen } alt="ATAD" width="350" height="270"/> 
        </div>
<div className="card">
  <img src={ imagen_atdi } alt="ATAD" className="card-img-top" width="360" height="280" />
  <div className="card-body">
    <h5 className="card-title">ATDI</h5>
    <p className="card-text">Atención temprana del desarrollo infantil.</p>
    <a href="#" className="btn btn-primary">Para mas info</a>
  </div>
</div>

</div>

                            
        </>
    )
}

 