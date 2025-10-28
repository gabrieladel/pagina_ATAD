const Contacto = require("../models/contactos.js");

// Crear una nueva contacto
exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "El contenido no puede estar vacío." });
  }

  const newContacto = {
    nombre: req.body.nombre,
    celular: req.body.celular,
    email: req.body.email,
    mensaje: req.body.mensaje,
    id_usuario : req.body.id_usuario,
  };

  Contacto.create(newContacto, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Ocurrió un error al crear la contacto.",
      });
    } else {
      res.send(data);
    }
  });
};

// Obtener todos los contactos
exports.findAll = (req, res) => {
  const nombre = req.query.nombre;
  Contacto.getAll(nombre, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Ocurrió un error al obtener las contactos.",
      });
    } else {
      res.send(data);
    }
  });
};

// Obtener todos los contactos con email = true
exports.findAllemail = (req, res) => {
  Contacto.getAllemail((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Error al obtener contactos por email.",
      });
    } else {
      res.send(data);
    }
  });
};

// Obtener todos los contactos con mensaje = true
exports.findAllmensaje = (req, res) => {
  Contacto.getAllmensaje((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Error al obtener contactos por mensaje.",
      });
    } else {
      res.send(data);
    }
  });
};

// Obtener un contacto por ID
exports.findOne = (req, res) => {
  Contacto.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({ message: `No se encontró la contacto con id ${req.params.id}.` });
      } else {
        res.status(500).send({ message: "Error al buscar la contacto con id " + req.params.id });
      }
    } else {
      res.send(data);
    }
  });
};

// Actualizar contacto por ID
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "El celular no puede estar vacío." });
  }

  Contacto.updateById(req.params.id, req.body, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({ message: `No se encontró la contacto con id ${req.params.id}.` });
      } else {
        res.status(500).send({ message: "Error al actualizar la contacto con id " + req.params.id });
      }
    } else {
      res.send(data);
    }
  });
};

// Eliminar un contacto por ID
exports.delete = (req, res) => {
  Contacto.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({ message: `No se encontró la contacto con id ${req.params.id}.` });
      } else {
        res.status(500).send({ message: "No se pudo eliminar la contacto con id " + req.params.id });
      }
    } else {
      res.send({ message: "contacto eliminada correctamente." });
    }
  });
};

// Eliminar todos los contactos
exports.deleteAll = (req, res) => {
  Contacto.removeAll((err, data) => {
    if (err) {
      res.status(500).send({ message: err.message || "Error al eliminar todas las contactos." });
    } else {
      res.send({ message: "Todas las contactos fueron eliminadas correctamente." });
    }
  });
};
