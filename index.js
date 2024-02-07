const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/', function(req, res) {
    return res.status(200).json({
        message: 'Bienvenido a mi API, excepto AMLO y Java'
    })
});

app.get('/:name', function(req, res) {
    return res.status(200).json({ message: 'Hola Mundo! ' + req.params.name })
});

const port = process.env.PORT;

app.listen(port, function() {
    console.log(`La API esta corriendo en el puerto ${port}`)
});