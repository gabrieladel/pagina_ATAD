const sql = require("./db.js");

// constructor
const Usuario = function(usuario) {
  this.nombre = usuario.nombre;
  this.email = usuario.email;
  this.password = usuario.password;
  this.id_rol = usuario.id_rol;
};


Usuario.create = (newUsuario, result) => {
  sql.query("INSERT INTO usuario SET ?", newUsuario, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created usuario: ", { id: res.insertId, ...newUsuario });
    result(null, { id: res.insertId, ...newUsuario });
  });
};

Usuario.findById = (id, result) => {
  sql.query(`SELECT * FROM usuario WHERE id = ${id}`, (err, res) => {
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

    // not found usuario with the id
    result({ kind: "not_found" }, null);
  });
};

Usuario.getAll = (nombre, result) => {
  let query = "SELECT * FROM usuario";

  if (nombre) {
    query += ` WHERE nombre LIKE '%${nombre}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("usuarios: ", res);
    result(null, res);
  });
};

Usuario.getAllfecha = result => {
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

Usuario.updateById = (id, usuario, result) => {
  sql.query(
    'UPDATE usuario SET nombre = ?, email = ?, password = ? WHERE id = ?',
    [usuario.nombre, usuario.email, usuario.password, usuario.id_rol, id],
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

      console.log('Usuario actualizado: ', { id, ...usuario });
      result(null, { id, ...usuario });
    }
  );
};

Usuario.remove = (id, result) => {
  sql.query('DELETE FROM usuarios WHERE id = ?', [id], (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: 'not_found' }, null);
      return;
    }

    console.log('Usuario eliminado con id: ', id);
    result(null, res);
  });
};

Usuario.removeAll = (result) => {
  sql.query('DELETE FROM usuario', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    console.log(`Eliminados ${res.affectedRows} usuarios`);
    result(null, res);
  });
};


module.exports = Usuario;