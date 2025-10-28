const sql = require("./db.js");

// constructor
const Noticia = function(noticia) {
  this.titulo = noticia.titulo;
  this.contenido = noticia.contenido;
  this.fecha = noticia.fecha;
  this.id_usuario = noticia.id_fecha;
};


Noticia.create = (newNoticia, result) => {
  sql.query("INSERT INTO noticias SET ?", newNoticia, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created noticia: ", { id: res.insertId, ...newNoticia });
    result(null, { id: res.insertId, ...newNoticia });
  });
};

Noticia.findById = (id, result) => {
  sql.query(`SELECT * FROM noticias WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found noticia: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found noticia with the id
    result({ kind: "not_found" }, null);
  });
};

Noticia.getAll = (titulo, result) => {
  let query = "SELECT * FROM noticias";

  if (titulo) {
    query += ` WHERE titulo LIKE '%${titulo}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("noticias: ", res);
    result(null, res);
  });
};

Noticia.getAllfecha = result => {
  sql.query("SELECT * FROM noticias WHERE fecha=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("noticias: ", res);
    result(null, res);
  });
};

Noticia.updateById = (id, noticia, result) => {
  sql.query(
    'UPDATE noticias SET titulo = ?, contenido = ?, fecha = ? WHERE id = ?',
    [noticia.titulo, noticia.contenido, noticia.fecha, id],
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }

      if (res.affectedRows == 0) {
        // No encontrada
        result({ kind: 'not_found' }, null);
        return;
      }

      console.log('Noticia actualizada: ', { id, ...noticia });
      result(null, { id, ...noticia });
    }
  );
};

Noticia.remove = (id, result) => {
  sql.query('DELETE FROM noticias WHERE id = ?', [id], (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: 'not_found' }, null);
      return;
    }

    console.log('Noticia eliminada con id: ', id);
    result(null, res);
  });
};

Noticia.removeAll = (result) => {
  sql.query('DELETE FROM noticias', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    console.log(`Eliminadas ${res.affectedRows} noticias`);
    result(null, res);
  });
};


module.exports = Noticia;