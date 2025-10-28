const sql = require("./db.js");

// constructor
const Contacto = function(contacto) {
  this.nombre = contacto.nombre;
  this.celular = contacto.celular;
  this.email = contacto.email;
  this.mensaje = contacto.mensaje;
};


Contacto.create = (newContacto, result) => {
  sql.query("INSERT INTO contactos SET ?", newContacto, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created contacto: ", { id: res.insertId, ...newContacto });
    result(null, { id: res.insertId, ...newContacto });
  });
};

Contacto.findById = (id, result) => {
  sql.query(`SELECT * FROM contactos WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found contacto: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found contacto with the id
    result({ kind: "not_found" }, null);
  });
};

Contacto.getAll = (nombre, result) => {
  let query = "SELECT * FROM contactos";

  if (nombre) {
    query += ` WHERE nombre LIKE '%${nombre}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("contactos: ", res);
    result(null, res);
  });
};

Contacto.getAllemail = result => {
  sql.query("SELECT * FROM contactos WHERE email=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("contactos: ", res);
    result(null, res);
  });
};


Contacto.updateById = (id, contacto, result) => {
  sql.query(
    'UPDATE contactos SET nombre = ?, celular = ?, email = ? , mensaje = ? WHERE id = ?',
    [contacto.nombre, contacto.celular, contacto.email, contacto.mensaje, id],
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

      console.log('contacto actualizada: ', { id, ...contacto });
      result(null, { id, ...contacto });
    }
  );
};



Contacto.remove = (id, result) => {
  sql.query('DELETE FROM contactos WHERE id = ?', [id], (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: 'not_found' }, null);
      return;
    }

    console.log('contacto eliminada con id: ', id);
    result(null, res);
  });
};

Contacto.removeAll = (result) => {
  sql.query('DELETE FROM contactos', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    console.log(`Eliminadas ${res.affectedRows} contactos`);
    result(null, res);
  });
};


module.exports = Contacto;