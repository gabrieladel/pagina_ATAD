const express = require("express");
const router = express.Router();
const inscripciones = require("../controllers/inscripciones.controller");


router.post("/", inscripciones.create);
router.get("/", inscripciones.findAll);
router.get("/:id", inscripciones.findOne);
router.put("/:id", inscripciones.update);
router.delete("/:id", inscripciones.delete);

module.exports = router;