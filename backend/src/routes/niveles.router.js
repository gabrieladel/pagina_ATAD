const express = require('express');
const router = express.Router();
const niveles = require('../controllers/niveles.controller');

router.post('/', niveles.create);
router.get('/', niveles.findAll);
router.get('/:id', niveles.findOne);
router.put('/:id', niveles.update);
router.delete('/:id', niveles.delete);


module.exports = router;
