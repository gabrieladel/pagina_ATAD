const express = require ('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('hola mundo')
}

)

app.listen(6500,() =>{
    console.log('Servidor activo')
}

);