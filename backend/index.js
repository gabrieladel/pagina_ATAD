const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use('/api/noticias', require("./src/routes/noticias.router"));
app.use('/', require("./src/routes/main.router"));

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
