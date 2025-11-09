const express = require("express");
const router = express.Router();
const contactos = require("../controllers/contactos.controller");

// rutas
router.post("/", contactos.create);
router.get("/", contactos.findAll);
router.delete("/:id", contactos.delete);

module.exports = router;
