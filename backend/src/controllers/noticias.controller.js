const Noticia = require('../models/noticias');
const Usuario = require('../models/usuarios');


exports.findAll = async (req, res) => {
  try {
    const noticias = await Noticia.findAll({
      include: [
        {
          model: Usuario,
          as: 'usuario',
          attributes: ['nombre'] 
        }
      ]
    });
    res.json(noticias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.create = async (req, res) => {
  try {
    const noticia = await Noticia.create(req.body);
    res.json(noticia);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.findOne = async (req, res) => {
  try {
    const noticia = await Noticia.findByPk(req.params.id);
    if (noticia) res.json(noticia);
    else res.status(404).json({ message: "Noticia no encontrada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.update = async (req, res) => {
  try {
    const [updated] = await Noticia.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const noticiaActualizada = await Noticia.findByPk(req.params.id);
      res.json(noticiaActualizada);
    } else {
      res.status(404).json({ message: "Noticia no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Noticia.destroy({
      where: { id: req.params.id }
    });
    if (deleted) res.json({ message: "Noticia eliminada correctamente" });
    else res.status(404).json({ message: "Noticia no encontrada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
