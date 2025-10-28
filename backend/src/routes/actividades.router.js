const express = require("express");
const router = express.Router();
const actividades = require("../controllers/actividades.controller");

// Create a new actividad
router.post("/", actividades.create);

// Retrieve all actividades
router.get("/", actividades.findAll);

// Retrieve all fecha actividades
router.get("/fecha", actividades.findAllfecha);

// Retrieve a single actividad with id
router.get("/:id", actividades.findOne);

// Update a actividad with id
router.put("/:id", actividades.update);

// Delete a actividad with id
router.delete("/:id", actividades.delete);

/* // Delete all actividades
router.delete("/", actividades.deleteAll); */

module.exports = router;