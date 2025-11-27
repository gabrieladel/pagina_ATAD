import { useState } from "react";
import { Form, Button, Alert, Row, Col, InputGroup } from "react-bootstrap";
import axios from "axios";

// Validación
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const TELEFONO_LONGITUD_REQUERIDA = 10;

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const [validated, setValidated] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [customErrors, setCustomErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    
    // Limpia el error personalizado al escribir
    if (customErrors[name]) {
        setCustomErrors({ ...customErrors, [name]: "" });
    }

    // Filtra el "telefono" para aceptar solo numeros
    if (name === "telefono") {
      newValue = value.replace(/\D/g, ''); 
    }

    setForm({ ...form, [name]: newValue });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    let validacionManual = true;
    const newCustomErrors = {};

    // Valida Email 
    if (form.email && !EMAIL_REGEX.test(form.email)) {
        newCustomErrors.email = "El email debe tener el formato: usuario@dominio.com";
        validacionManual = false;
    }
    
    // Valida Longitud del Teléfono
    if (form.telefono && form.telefono.length !== TELEFONO_LONGITUD_REQUERIDA) {
        newCustomErrors.telefono = `El teléfono debe tener exactamente ${TELEFONO_LONGITUD_REQUERIDA} dígitos.`;
        validacionManual = false;
    }

    // Validación de Bootstrap
    if (formElement.checkValidity() === false || !validacionManual) {
      event.stopPropagation();
      setValidated(true);
      setCustomErrors(newCustomErrors); // Mostrar errores manuales (email y teléfono)
      return; // Detiene el envío
    }

    setValidated(true);
    setCustomErrors({}); 

    try {
      await axios.post("https://paginaatad-production.up.railway.app/api/contactos", form);
      setEnviado(true);
      setForm({ nombre: "", telefono: "", email: "", mensaje: "" });
      setValidated(false);     
      setCustomErrors({});
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
    }
  };
  

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contacto</h2>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              El nombre es obligatorio.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="telefono">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="tel"
              name="telefono"
              placeholder="Tu teléfono (solo números)"
              value={form.telefono}
              onChange={handleChange}
              pattern="[0-9]{10}" 
              isInvalid={validated && customErrors.telefono} 
            />
            <Form.Control.Feedback type="invalid">
                {customErrors.telefono || "Solo se permiten números."}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="email">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                required
                type="email"
                name="email"
                placeholder="Tu correo"
                value={form.email}
                onChange={handleChange}
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                isInvalid={validated && customErrors.email}
              />
              <Form.Control.Feedback type="invalid">
                {customErrors.email || "Ingresá un email válido."}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="mensaje">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={4}
            name="mensaje"
            placeholder="Tu mensaje"
            value={form.mensaje}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            El mensaje no puede estar vacío.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
      {enviado && (
        <Alert variant="success">✅ Mensaje enviado correctamente.</Alert>
      )}
    </div>
  );
};

export default Contacto;
