const express = require ("express");
const router = express.Router();

const controller = require('../controllers/noticias.controller')
router.get('/noticias', controller.noticias);

module.exports = router;