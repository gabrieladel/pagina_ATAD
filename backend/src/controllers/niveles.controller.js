const Nivel = require('../models/niveles');

exports.create = async (req, res) => {
  try {
    const nuevoNivel = await Nivel.create(req.body);
    res.status(201).json(nuevoNivel);
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

    const niveles = await Nivel.findAll(condicion);
    res.json(niveles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const nivel = await Nivel.findByPk(req.params.id);
    if (nivel) res.json(nivel);
    else res.status(404).json({ message: 'Nivel no encontrado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Nivel.update(req.body, {
      where: { id: req.params.id }
    });

    if (updated) {
      const nivelActualizado = await Nivel.findByPk(req.params.id);
      res.json(nivelActualizado);
    } else {
      res.status(404).json({ message: 'Nivel no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Nivel.destroy({
      where: { id: req.params.id }
    });
    if (deleted) res.json({ message: 'Nivel eliminado correctamente' });
    else res.status(404).json({ message: 'Nivel no encontrado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
