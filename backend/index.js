require('dotenv').config();
const express = require ('express');
const app = express();

app.use(require("./src/routes/main.router"));
app.use(require("./src/routes/noticias.router"))

const PORT = 3000; 


app.listen(PORT, () => console.log(`http://localhost:${PORT}`));