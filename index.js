const express = require('express');
const app = express();

app.get('/:name', function(req, res) {
    return res.status(200).json({ message: 'Hola Mundo! ' + req.params.name })
});

app.listen(5000, function() {
    console.log('La API esta corriendo en el puerto 5000')
});