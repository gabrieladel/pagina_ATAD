import './Header.css'
import imgLogo from '../../assets/images/logoAtad.jpg'

function Header() {
    return (
        <>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quos labore perferendis dolorum dignissimos fugiat aliquam adipisci minus! Voluptatibus fugiat quidem dolore rerum obcaecati vitae soluta alias accusantium atque praesentium!</p>
          <img src={imgLogo} className='header_logo' alt="Logo ATAD" />
        </>
    )
}

export default Header