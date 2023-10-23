import './Footer.css';

function Footer() {
  return (
    <div className='container  my-5'>
      <footer className='text-center text-white style=background-color: #f1f1f1'>
        <div className='container pt-4'>
          <div className='mb-4'>
            < ul
              className='btn btn-link btn-floating btn-lg text-dark m-1'>
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
        </div>
      </footer>
    </div>
  )
}
export default Footer