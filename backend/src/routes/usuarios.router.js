const express = require('express');
const router = express.Router();
const usuarios = require('../controllers/usuarios.controller');

router.post('/', usuarios.create);
router.get('/', usuarios.findAll);
router.get('/:id', usuarios.findOne);
router.put('/:id', usuarios.update);
router.delete('/:id', usuarios.delete);


module.exports = router;
