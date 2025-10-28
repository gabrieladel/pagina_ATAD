const Rol = require("../models/roles.js");

// Crear un nuevo rol
exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "El contenido no puede estar vacío." });
  }

  const newRol = {
    nombre: req.body.nombre,
    
  };

  Rol.create(newRol, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Ocurrió un error al crear rol.",
      });
    } else {
      res.send(data);
    }
  });
};

// Obtener todas las roles
exports.findAll = (req, res) => {
  const nombre = req.query.nombre;
  Rol.getAll(nombre, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Ocurrió un error al obtener las roles.",
      });
    } else {
      res.send(data);
    }
  });
};


// Obtener un rol por ID
exports.findOne = (req, res) => {
  Rol.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({ message: `No se encontró rol con id ${req.params.id}.` });
      } else {
        res.status(500).send({ message: "Error al buscar rol con id " + req.params.id });
      }
    } else {
      res.send(data);
    }
  });
};

// Actualizar rol por ID
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "El contenido no puede estar vacío." });
  }

  Rol.updateById(req.params.id, req.body, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({ message: `No se encontró rol con id ${req.params.id}.` });
      } else {
        res.status(500).send({ message: "Error al actualizar rol con id " + req.params.id });
      }
    } else {
      res.send(data);
    }
  });
};

// Eliminar un rol por ID
exports.delete = (req, res) => {
  Rol.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({ message: `No se encontró rol con id ${req.params.id}.` });
      } else {
        res.status(500).send({ message: "No se pudo eliminar rol con id " + req.params.id });
      }
    } else {
      res.send({ message: "rol eliminada correctamente." });
    }
  });
};

// Eliminar todOs lOs roleS
exports.deleteAll = (req, res) => {
  Rol.removeAll((err, data) => {
    if (err) {
      res.status(500).send({ message: err.message || "Error al eliminar todas lOs roles." });
    } else {
      res.send({ message: "Todas lOs roles fueron eliminadas correctamente." });
    }
  });
};
