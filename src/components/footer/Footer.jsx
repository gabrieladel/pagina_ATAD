import './Footer.css';

function Footer() {
  return (
    <div className='container '>
      <footer className='container-footer'>
       
          <div className='lista'>
            < ul className='iconos'>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-whatsapp"></i>
              <i className="bi bi-envelope-at"></i>
            </ul>

            <div className='ubicacion text-center text-dark p-3 '><i className="bi bi-geo-alt"></i>
              Encontranos en:
  
              <a className='text-dark href="#" '> Cnel. Brandsen 491, Tandil, Provincia de Buenos Aires</a>
            </div>
          
        </div>
      </footer>
    </div>
  )
}
export default Footer