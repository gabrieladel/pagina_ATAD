const Contacto = require("../models/contactos");

// Crear un mensaje
exports.create = async (req, res) => {
  try {
    const { nombre, email, telefono, mensaje } = req.body;
    const nuevo = await Contacto.create({ nombre, email, telefono, mensaje });
    res.status(201).json({ message: "Mensaje guardado correctamente", data: nuevo });
  } catch (error) {
    console.error("Error al guardar contacto:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Obtener todos los mensajes
exports.findAll = async (req, res) => {
  try {
    const contactos = await Contacto.findAll({ order: [['createdAt', 'DESC']] });
    res.json(contactos);
  } catch (error) {
    console.error("Error al obtener contactos:", error);
    res.status(500).json({ message: "Error al obtener los mensajes" });
  }
};

// Eliminar un mensaje
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await Contacto.destroy({ where: { id } });
    res.json({ message: "Mensaje eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar contacto:", error);
    res.status(500).json({ message: "Error al eliminar" });
  }
};
