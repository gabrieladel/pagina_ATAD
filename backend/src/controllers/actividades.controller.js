const Actividad = require('../models/actividades');
const Usuario = require('../models/usuarios');


exports.findAll = async (req, res) => {
  try {
const actividades = await Actividad.findAll({
  include: [
    {
      model: Usuario,
      as: 'usuario',
      attributes: ['nombre']
    }
  ],
  order: [["fecha", "ASC"]]   // ordena de más antigua → más nueva
});



    
    res.json(actividades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const actividad = await Actividad.create(req.body);
    res.json(actividad);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const actividad = await Actividad.findByPk(req.params.id);
    if (actividad) res.json(actividad);
    else res.status(404).json({ message: "Actividad no encontrada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Actividad.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const actividadActualizada = await Actividad.findByPk(req.params.id);
      res.json(actividadActualizada);
    } else {
      res.status(404).json({ message: "Actividad no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Actividad.destroy({
      where: { id: req.params.id }
    });
    if (deleted) res.json({ message: "Actividad eliminada correctamente" });
    else res.status(404).json({ message: "Actividad no encontrada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
