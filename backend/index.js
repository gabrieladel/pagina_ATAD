const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('./src/models/usuarios'); // Sequelize model
const sequelize = require('./config/db.config'); // conexión ORM
const noticiasRoutes = require('./src/routes/noticias.router');
const usuariosRoutes = require('./src/routes/usuarios.router');
const actividadesRoutes = require('./src/routes/actividades.router');
const contactoRoutes = require("./src/routes/contactos.router");

dotenv.config();
require('dotenv').config();
const app = express();
const jwtSecret = process.env.JWT_SECRET;

app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));


app.use('/api/usuarios', usuariosRoutes);
app.use('/api/noticias', noticiasRoutes);
app.use('/api/actividades', actividadesRoutes);
app.use("/api/contactos", contactoRoutes);

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

app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.post('/register', async (req, res) => {
  const { nombre, email, password, rol } = req.body;

  try {
    const usuarioExistente = await Usuario.findOne({
      where: { nombre }
    });

    if (usuarioExistente) {
      return res.status(400).json({
        message: 'El nombre de usuario ya está registrado.'
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const nuevoUsuario = await Usuario.create({
      nombre,
      email,
      password: hashedPassword,
      rol: rol || 'usuario'
    });

    const token = jwt.sign(
      { id: nuevoUsuario.id, rol: nuevoUsuario.rol },
      jwtSecret,
      { expiresIn: process.env.JWT_EXPIRES }
    );
    res.json({
      message: 'Usuario registrado correctamente.',
      usuario: nuevoUsuario,
      token,
    });

  } catch (error) {
    console.error('Error en register:', error);
    res.status(500).json({ message: 'Error al registrar usuario.' });
  }
});
app.post('/login', async (req, res) => {
  const { nombre, password } = req.body;
  if (!nombre || !password)
    return res.status(400).json({ message: 'Faltan datos.' });

  try {
    const usuario = await Usuario.findOne({ where: { nombre } });
    if (!usuario)
      return res.status(401).json({ message: 'Credenciales incorrectas.' });

    const isMatch = await bcrypt.compare(password, usuario.password);
    if (!isMatch)
      return res.status(401).json({ message: 'Credenciales incorrectas.' });

    const token = jwt.sign(
      {
        id: usuario.id,
        nombre: usuario.nombre,
        rol: usuario.rol,
      },
      jwtSecret,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login exitoso',
      token,
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        rol: usuario.rol,
      },
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
});

app.get("/api/test", async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({ msg: "API funcionando en Railway con Sequelize" });
  } catch (err) {
    res.status(500).json({ error: "Error con DB" });
  }
});
app.get("/", (req, res) => {
  res.send("API funcionando");
});



app.get('/dashboard', authenticateToken, (req, res) => {
  if (req.usuario.rol !== 'admin') {
    return res.status(403).json({ message: 'Solo para administradores.' });
  }
  res.json({ message: 'Bienvenido al dashboard admin' });
});

sequelize.sync()
  .then(() => console.log('Base de datos sincronizada'))
  .catch(err => console.error('Error al sincronizar la base de datos:', err));

  // PORT (Railway usa process.env.PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor en" + PORT));
