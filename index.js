const express = require('express');
const dotenv = require('dotenv');
const { movies } = require('./database');

dotenv.config();

const app = express();

app.use(express.json()); // recibir datos en formato JSON
app.use(express.urlencoded({ extended: false })) // permitir datos en querystrings

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

app.post('/movies', function(req, res) {
    const data = req.body;
    console.log('informacion que llega', data);

    // TODO: Agregar validación
    // 1. Que el ID que se envía no esté en otra película
    // 2. Que el ID sea un número
    // 3. Que el atribuito name exista, sea un string y tenga al menos 3 caracteres
    // 4. Que el atributo duracion exista, sea un número y que no sea negativo
    // 5. La sinopsis puede estar o no estar (opcional)
    // 6. QUe el atributo cast si existe, sea un arreglo de string
    // y si no existe, pasar un arreglo vacio

    movies.push(data);
    return res.status(201).json(movies)
});

// GET - POST - PUT - PATCH - DELETE

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