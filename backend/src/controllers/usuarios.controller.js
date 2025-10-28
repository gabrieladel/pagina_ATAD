const Usuario = require("../models/usuarios.js");

// Crear un nuevo usuario
exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "El contenido no puede estar vacío." });
  }

  const newUsuario = {
    nombre: req.body.nombre,
    email: req.body.email,
    password: req.body.password,
    id_rol : req.body.id_rol,
  };

  Usuario.create(newUsuario, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Ocurrió un error al crear el usuario.",
      });
    } else {
      res.send(data);
    }
  });
};

// Obtener todos los usuarios
exports.findAll = (req, res) => {
  const nombre = req.query.titulo;
  Usuario.getAll(nombre, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Ocurrió un error al obtener los usuarios.",
      });
    } else {
      res.send(data);
    }
  });
};



// Obtener un usuario por ID
exports.findOne = (req, res) => {
  Usuario.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({ message: `No se encontró el usuario con id ${req.params.id}.` });
      } else {
        res.status(500).send({ message: "Error al buscar el usuario con id " + req.params.id });
      }
    } else {
      res.send(data);
    }
  });
};

// Actualizar usuario por ID
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "El contenido no puede estar vacío." });
  }

  Usuario.updateById(req.params.id, req.body, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({ message: `No se encontró el usuario con id ${req.params.id}.` });
      } else {
        res.status(500).send({ message: "Error al actualizar el usuario con id " + req.params.id });
      }
    } else {
      res.send(data);
    }
  });
};

// Eliminar un usuario por ID
exports.delete = (req, res) => {
  Usuario.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({ message: `No se encontró el usuario con id ${req.params.id}.` });
      } else {
        res.status(500).send({ message: "No se pudo eliminar el usuario con id " + req.params.id });
      }
    } else {
      res.send({ message: "Usuario eliminada correctamente." });
    }
  });
};

// Eliminar todas los usuarios
exports.deleteAll = (req, res) => {
  Usuario.removeAll((err, data) => {
    if (err) {
      res.status(500).send({ message: err.message || "Error al eliminar todas los usuarios." });
    } else {
      res.send({ message: "Todas los usuarios fueron eliminadas correctamente." });
    }
  });
};
