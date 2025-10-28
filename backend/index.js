const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use('/api/noticias', require("./src/routes/noticias.router"));
app.use('/api/contactos', require("./src/routes/contactos.router"));
app.use('/api/usuarios', require("./src/routes/usuarios.router"));
app.use('/api/actividades', require("./src/routes/actividades.router"));
app.use('/api/roles', require("./src/routes/roles.router"));
app.use('/', require("./src/routes/main.router"));

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
