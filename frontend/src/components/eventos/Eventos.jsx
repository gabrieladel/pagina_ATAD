import "./Eventos.css";
import Instagram from "../../assets/images/instagram-logo.png";
import Facebook from "../../assets/images/facebook-logo.svg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Eventos() {
  return (
    <>
<section id="eventos" className="text-center my-5">
  <h2>Seguinos en nuestras redes y enterate de nuestros eventos</h2>

  <CardGroup className="d-flex justify-content-center gap-4 mt-4 flex-wrap">
    {/* Facebook */}
    <Card style={{ width: "220px", border: "none", alignItems: "center" }}>
      <Card.Img variant="top" src={Facebook} className="logo-redes" />
      <Card.Body className="text-center">
        <Card.Link href="https://www.facebook.com/profile.php?id=100057622172867&locale=es_LA" target="_blank" rel="noopener noreferrer"
          className="btn btn-primary mt-3">
           Seguinos
        </Card.Link> 
      </Card.Body>
    </Card>

    {/* Instagram */}
    <Card style={{ width: "220px", border: "none", alignItems: "center" }}>
      <Card.Img variant="top" src={Instagram} className="logo-redes" />
      <Card.Body className="text-center">
        <Card.Link href="https://www.instagram.com/atad1963/" target="_blank" rel="noopener noreferrer"
          className="btn btn-primary mt-3">
           Seguinos
        </Card.Link> 
      </Card.Body>
    </Card>
  </CardGroup>
</section>

    </>
  );
}
export default Eventos;
