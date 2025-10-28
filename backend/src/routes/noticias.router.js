const express = require("express");
const router = express.Router();
const noticias = require("../controllers/noticias.controller");

// Create a new noticia
router.post("/", noticias.create);

// Retrieve all noticias
router.get("/", noticias.findAll);

// Retrieve all fecha noticias
router.get("/fecha", noticias.findAllfecha);

// Retrieve a single noticia with id
router.get("/:id", noticias.findOne);

// Update a noticia with id
router.put("/:id", noticias.update);

// Delete a noticia with id
router.delete("/:id", noticias.delete);

/* // Delete all noticias
router.delete("/", noticias.deleteAll); */

module.exports = router;