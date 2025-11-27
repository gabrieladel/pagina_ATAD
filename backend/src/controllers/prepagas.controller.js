const Prepaga = require('../models/prepagas');

exports.create = async (req, res) => {
  try {
    const nuevoPrepaga = await Prepaga.create(req.body);
    res.status(201).json(nuevoPrepaga);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const { nombre } = req.query;
    const condicion = nombre
      ? { where: { nombre: { [Op.like]: `%${nombre}%` } } }
      : {};

    const prepagas = await Prepaga.findAll(condicion);
    res.json(prepagas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const prepaga = await Prepaga.findByPk(req.params.id);
    if (prepaga) res.json(prepaga);
    else res.status(404).json({ message: 'Prepaga no encontrada' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Prepaga.update(req.body, {
      where: { id: req.params.id }
    });

    if (updated) {
      const prepagaActualizado = await Prepaga.findByPk(req.params.id);
      res.json(prepagaActualizado);
    } else {
      res.status(404).json({ message: 'Prepaga no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Prepaga.destroy({
      where: { id: req.params.id }
    });
    if (deleted) res.json({ message: 'Prepaga eliminada correctamente' });
    else res.status(404).json({ message: 'Prepaga no encontrada' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

