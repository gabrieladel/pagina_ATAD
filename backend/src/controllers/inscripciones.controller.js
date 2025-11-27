const Inscripcion = require('../models/inscripciones');
const Nivel = require('../models/niveles');
const Prepaga = require('../models/prepagas');  

exports.findAll = async (req, res) => {
  try {
    const inscripciones = await Inscripcion.findAll({
      include: [
        {
          model: Nivel,
          as: 'nivel',
          attributes: ['nombre']
        },
        {
          model: Prepaga,
          as: 'prepaga',
          attributes: ['nombre']
        }
      ]
    });

    res.json(inscripciones);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const inscripcion = await Inscripcion.create(req.body);
    res.json(inscripcion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const inscripcion = await Inscripcion.findByPk(req.params.id, {
      include: [
        { model: Nivel, as: 'nivel', attributes: ['nombre'] },
        { model: Prepaga, as: 'prepaga', attributes: ['nombre'] }
      ]
    });

    if (inscripcion) res.json(inscripcion);
    else res.status(404).json({ message: "Inscripcion no encontrada" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Inscripcion.update(req.body, {
      where: { id: req.params.id }
    });

    if (updated) {
      const inscripcionActualizada = await Inscripcion.findByPk(req.params.id);
      res.json(inscripcionActualizada);
    } else {
      res.status(404).json({ message: "Inscripcion no encontrada" });
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Inscripcion.destroy({
      where: { id: req.params.id }
    });

    if (deleted)
      res.json({ message: "Inscripcion eliminada correctamente" });
    else
      res.status(404).json({ message: "Inscripcion no encontrada" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
