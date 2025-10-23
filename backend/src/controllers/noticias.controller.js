
const Noticia = require("../models/noticias.js");

// Crear una nueva noticia
exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "El contenido no puede estar vacío." });
  }

  const newNoticia = {
    titulo: req.body.titulo,
    contenido: req.body.contenido,
    fecha: req.body.fecha || new Date(),
  };

  Noticia.create(newNoticia, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Ocurrió un error al crear la noticia.",
      });
    } else {
      res.send(data);
    }
  });
};

// Obtener todas las noticias
exports.findAll = (req, res) => {
  const titulo = req.query.titulo;
  Noticia.getAll(titulo, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Ocurrió un error al obtener las noticias.",
      });
    } else {
      res.send(data);
    }
  });
};

// Obtener todas las noticias con fecha = true
exports.findAllfecha = (req, res) => {
  Noticia.getAllfecha((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Error al obtener noticias por fecha.",
      });
    } else {
      res.send(data);
    }
  });
};

// Obtener una noticia por ID
exports.findOne = (req, res) => {
  Noticia.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({ message: `No se encontró la noticia con id ${req.params.id}.` });
      } else {
        res.status(500).send({ message: "Error al buscar la noticia con id " + req.params.id });
      }
    } else {
      res.send(data);
    }
  });
};

// Actualizar noticia por ID
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "El contenido no puede estar vacío." });
  }

  Noticia.updateById(req.params.id, req.body, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({ message: `No se encontró la noticia con id ${req.params.id}.` });
      } else {
        res.status(500).send({ message: "Error al actualizar la noticia con id " + req.params.id });
      }
    } else {
      res.send(data);
    }
  });
};

// Eliminar una noticia por ID
exports.delete = (req, res) => {
  Noticia.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({ message: `No se encontró la noticia con id ${req.params.id}.` });
      } else {
        res.status(500).send({ message: "No se pudo eliminar la noticia con id " + req.params.id });
      }
    } else {
      res.send({ message: "Noticia eliminada correctamente." });
    }
  });
};

// Eliminar todas las noticias
exports.deleteAll = (req, res) => {
  Noticia.removeAll((err, data) => {
    if (err) {
      res.status(500).send({ message: err.message || "Error al eliminar todas las noticias." });
    } else {
      res.send({ message: "Todas las noticias fueron eliminadas correctamente." });
    }
  });
};
