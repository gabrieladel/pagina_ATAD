const sql = require("./db.js");

// constructor
const Rol = function(rol) {
  this.nombre = rol.nombre;
};


Rol.create = (newrol, result) => {
  sql.query("INSERT INTO roles SET ?", newrol, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created rol: ", { id: res.insertId, ...newrol });
    result(null, { id: res.insertId, ...newrol });
  });
};

Rol.findById = (id, result) => {
  sql.query(`SELECT * FROM roles WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found rol: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found rol with the id
    result({ kind: "not_found" }, null);
  });
};

Rol.getAll = (nombre, result) => {
  let query = "SELECT * FROM roles";

  if (nombre) {
    query += ` WHERE nombre LIKE '%${nombre}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("roles: ", res);
    result(null, res);
  });
};


Rol.updateById = (id, rol, result) => {
  sql.query(
    'UPDATE roles SET nombre = ? WHERE id = ?',
    [rol.nombre, id],
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

      console.log('rol actualizada: ', { id, ...rol });
      result(null, { id, ...rol });
    }
  );
};

Rol.remove = (id, result) => {
  sql.query('DELETE FROM roles WHERE id = ?', [id], (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: 'not_found' }, null);
      return;
    }

    console.log('rol eliminada con id: ', id);
    result(null, res);
  });
};

Rol.removeAll = (result) => {
  sql.query('DELETE FROM roles', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    console.log(`Eliminadas ${res.affectedRows} roles`);
    result(null, res);
  });
};


module.exports = Rol;