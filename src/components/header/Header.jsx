import './Header.css'
import imgLogo from '../../assets/images/logoAtad.jpg'
import Button from '../Button/Button'

function Header() {
    return (
        <>
        <div className='header_container'>
        
          <img src={imgLogo} className='header_logo' alt="Logo ATAD" />
          <div>
          <Button text='Nosotros'/>
          <Button text='Eventos'/>
          <Button text='Proyectos'/>
          <Button text='Contacto'/>
          
          </div>
          </div>
        </>
    )
}

export default Header