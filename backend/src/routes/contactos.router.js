const express = require("express");
const router = express.Router();
const contactos = require("../controllers/contactos.controller");

// Create a new contacto
router.post("/", contactos.create);

// Retrieve all contactos
router.get("/", contactos.findAll);

// Retrieve all fecha contactos
router.get("/fecha", contactos.findAllfecha);

// Retrieve a single contacto with id
router.get("/:id", contactos.findOne);

// Update a contacto with id
router.put("/:id", contactos.update);

// Delete a contacto with id
router.delete("/:id", contactos.delete);

// Delete all contactos
router.delete("/", contactos.deleteAll);

module.exports = router;