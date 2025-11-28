require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sequelize = require('./config/db.config');
const Usuario = require('./src/models/usuarios');

const noticiasRoutes = require('./src/routes/noticias.router');
const usuariosRoutes = require('./src/routes/usuarios.router');
const actividadesRoutes = require('./src/routes/actividades.router');
const contactoRoutes = require("./src/routes/contactos.router");

const app = express();
const jwtSecret = process.env.JWT_SECRET;

app.use(express.json());
app.use(cors({ origin: "*", methods: ['GET','POST','PUT','DELETE'] }));

app.get("/", (req, res) => res.send("API funcionando"));

// LOGIN
app.post('/login', async (req, res) => {
  const { nombre, password } = req.body;
  if (!nombre || !password) return res.status(400).json({ message: 'Faltan datos.' });

  try {
    const usuario = await Usuario.findOne({ where: { nombre } });
    if (!usuario) return res.status(401).json({ message: 'Credenciales incorrectas.' });

    const isMatch = await bcrypt.compare(password, usuario.password);
    if (!isMatch) return res.status(401).json({ message: 'Credenciales incorrectas.' });

    const token = jwt.sign(
      { id: usuario.id, nombre: usuario.nombre, rol: usuario.rol },
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

// REGISTRO
app.post('/register', async (req, res) => {
  const { nombre, email, password, rol } = req.body;

  try {
    const usuarioExistente = await Usuario.findOne({ where: { nombre } });
    if (usuarioExistente)
      return res.status(400).json({ message: 'El nombre de usuario ya está registrado.' });

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
      { expiresIn: '1h' }
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

// RUTAS API
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/noticias', noticiasRoutes);
app.use('/api/actividades', actividadesRoutes);
app.use('/api/contactos', contactoRoutes);



// DB
sequelize.sync({ alter: true })
  .then(() => console.log('Base de datos sincronizada'))
  .catch(err => console.error('Error al sincronizar DB:', err));

const path = require('path');

// Servir frontend
app.use(express.static(path.join(__dirname, 'public')));

// Redirigir cualquier ruta no API al index.html de React
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Servidor escuchando en Railway en el puerto ${PORT}`)
);
