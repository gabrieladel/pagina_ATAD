const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: "Token requerido" });
  }

  jwt.verify(token, jwtSecret, (err, usuario) => {
    if (err) {
      return res.status(403).json({ error: "Token inválido o expirado" });
    }

    req.usuario = usuario;
    next();
  });
};

module.exports = authenticateToken;

