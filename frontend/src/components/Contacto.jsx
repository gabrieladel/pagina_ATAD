import React, { useState } from "react";
import axios from "axios";

const Contacto = () => {
  const [form, setForm] = useState({ nombre: "", telefono: "" , email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const enviarMensaje = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/contactos", form);
      setEnviado(true);
      setForm({ nombre: "", telefono: "" , email: "", mensaje: "" });
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contacto</h2>
      {enviado && <p style={{ color: "green" }}>✅ Mensaje enviado correctamente.</p>}
      <form onSubmit={enviarMensaje}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          required
        />
        <br />
        <input
          type="email"
          placeholder="Tu correo"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <br />
        <textarea
          placeholder="Tu mensaje"
          value={form.mensaje}
          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          required
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
