const express = require("express");
const router = express.Router();
const actividades = require("../controllers/actividades.controller");


router.post("/", actividades.create);
router.get("/", actividades.findAll);
router.get("/:id", actividades.findOne);
router.put("/:id", actividades.update);
router.delete("/:id", actividades.delete);

module.exports = router;