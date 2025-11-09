import "./Header.css";
import imgLogo from "../../assets/images/logoAtad.jpg";
import Navbar from "../Navbar";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-white bg-light fixed-top">
        <div className="container">
          <img src={imgLogo} className="header_logo" width="30" height="24" />
   
         <Navbar />
        </div>
      </nav>
    </>
  );
}

export default Header;
