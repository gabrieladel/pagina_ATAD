const Actividad = require("../models/actividades.js");

// Crear una nueva actividad
exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "El contenido no puede estar vacío." });
  }

  const newActividad = {
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    fecha: req.body.fecha || new Date(),
    id_usuario : req.body.id_usuario,
  };

  Actividad.create(newActividad, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Ocurrió un error al crear la actividad.",
      });
    } else {
      res.send(data);
    }
  });
};

// Obtener todas las actividades
exports.findAll = (req, res) => {
  const titulo = req.query.titulo;
  Actividad.getAll(titulo, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Ocurrió un error al obtener las actividades.",
      });
    } else {
      res.send(data);
    }
  });
};

// Obtener todas las actividades con fecha = true
exports.findAllfecha = (req, res) => {
  Actividad.getAllfecha((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Error al obtener actividades por fecha.",
      });
    } else {
      res.send(data);
    }
  });
};

// Obtener una actividad por ID
exports.findOne = (req, res) => {
  Actividad.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({ message: `No se encontró la actividad con id ${req.params.id}.` });
      } else {
        res.status(500).send({ message: "Error al buscar la actividad con id " + req.params.id });
      }
    } else {
      res.send(data);
    }
  });
};

// Actualizar actividad por ID
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "El contenido no puede estar vacío." });
  }

  Actividad.updateById(req.params.id, req.body, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({ message: `No se encontró la actividad con id ${req.params.id}.` });
      } else {
        res.status(500).send({ message: "Error al actualizar la actividad con id " + req.params.id });
      }
    } else {
      res.send(data);
    }
  });
};

// Eliminar una actividad por ID
exports.delete = (req, res) => {
  Actividad.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({ message: `No se encontró la actividad con id ${req.params.id}.` });
      } else {
        res.status(500).send({ message: "No se pudo eliminar la actividad con id " + req.params.id });
      }
    } else {
      res.send({ message: "Actividad eliminada correctamente." });
    }
  });
};

// Eliminar todas las actividades
exports.deleteAll = (req, res) => {
  Actividad.removeAll((err, data) => {
    if (err) {
      res.status(500).send({ message: err.message || "Error al eliminar todas las actividades." });
    } else {
      res.send({ message: "Todas las actividades fueron eliminadas correctamente." });
    }
  });
};
