const express = require("express");
const router = express.Router();
const usuarios = require("../controllers/usuarios.controller");
const Usuario = require("../models/usuarios");

// Create a new usuario
router.post("/", usuarios.create);

// Retrieve all usuario
router.get("/", usuarios.findAll);

// Retrieve a single usuario with id
router.get("/:id", usuarios.findOne);

// Update a usuario with id
router.put("/:id", usuarios.update);

// Delete a usuario with id
router.delete("/:id", usuarios.delete);

// Delete all usuarios
router.delete("/", usuarios.deleteAll);

module.exports = router;