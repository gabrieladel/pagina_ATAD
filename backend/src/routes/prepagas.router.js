const express = require('express');
const router = express.Router();
const prepagas = require('../controllers/prepagas.controller');

router.post('/', prepagas.create);
router.get('/', prepagas.findAll);
router.get('/:id', prepagas.findOne);
router.put('/:id', prepagas.update);
router.delete('/:id', prepagas.delete);


module.exports = router;
