const sql = require("./db.js");

// constructor
const Actividad = function(actividad) {
  this.titulo = actividad.titulo;
  this.descripcion = actividad.descripcion;
  this.fecha = actividad.fecha;
  this.id_usuario = actividad.id_fecha;
};


Actividad.create = (newActividad, result) => {
  sql.query("INSERT INTO actividad SET ?", newActividad, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created actividad: ", { id: res.insertId, ...newActividad });
    result(null, { id: res.insertId, ...newActividad });
  });
};

Actividad.findById = (id, result) => {
  sql.query(`SELECT * FROM actividad WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found actividad: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found actividad with the id
    result({ kind: "not_found" }, null);
  });
};

Actividad.getAll = (titulo, result) => {
  let query = "SELECT * FROM actividad";

  if (titulo) {
    query += ` WHERE titulo LIKE '%${titulo}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("actividades: ", res);
    result(null, res);
  });
};

Actividad.getAllfecha = result => {
  sql.query("SELECT * FROM actividades WHERE fecha=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("actividades: ", res);
    result(null, res);
  });
};

Actividad.updateById = (id, noticia, result) => {
  sql.query(
    'UPDATE actividades SET titulo = ?, contenido = ?, fecha = ? WHERE id = ?',
    [actividad.titulo, actividad.descripcion, actividad.fecha, actividad.id_usuario, id],
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

      console.log('Actividad actualizada: ', { id, ...actividad });
      result(null, { id, ...actividad });
    }
  );
};

Actividad.remove = (id, result) => {
  sql.query('DELETE FROM actividad WHERE id = ?', [id], (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: 'not_found' }, null);
      return;
    }

    console.log('Actividad eliminada con id: ', id);
    result(null, res);
  });
};

Actividad.removeAll = (result) => {
  sql.query('DELETE FROM actividad', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    console.log(`Eliminadas ${res.affectedRows} actividades`);
    result(null, res);
  });
};


module.exports = Actividad;