const express = require("express");
const router = express.Router();
const roles = require("../controllers/roles.controller");

// Create a new noticia
router.post("/", roles.create);

// Retrieve all roles
router.get("/", roles.findAll);

// Retrieve a single noticia with id
router.get("/:id", roles.findOne);

// Update a noticia with id
router.put("/:id", roles.update);

// Delete a noticia with id
router.delete("/:id", roles.delete);

// Delete all roles
router.delete("/", roles.deleteAll);

module.exports = router;