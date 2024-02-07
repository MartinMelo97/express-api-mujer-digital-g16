const express = require('express');
const dotenv = require('dotenv');
const { movies } = require('./database');

dotenv.config();

const app = express();

// -- Rutas de películas ------------------------------------------------
app.get('/movies', function(req, res) {
    return res.status(200).json(movies);
});

app.get('/movies/:id', function(req, res) {
    const { id } = req.params;
    const movie = movies.find(function (movie) {
        return movie.id === Number(id);
    });

    if (!movie) {
        return res.status(404).json({
            message: `La película con el ID ${id} no existe`,
        })
    }

    return res.status(200).json(movie);
});

// -- Rutas de prueba --------------------------------------------------
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