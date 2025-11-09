const express = require("express");
const router = express.Router();
const noticias = require("../controllers/noticias.controller");

router.post("/", noticias.create);

router.get("/", noticias.findAll);

router.get("/:id", noticias.findOne);

router.put("/:id", noticias.update);

router.delete("/:id", noticias.delete);


module.exports = router;
