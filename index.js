'use strict'
const path = require('path');
const body_parse  = require('body-parser');
const express = require('express');
const {suma_numero} = require('./operacion/ope');

const app = express();
const port = process.env.PORT || 3000;


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Enabling JSON bodyParser
app.use(body_parse.urlencoded({ extended: false }));
app.use(body_parse.json());

// Archivos estáticos
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('menu.pug');
});

app.get('/Ejemplo_1', (req, res) => {
    res.render('problema1.pug');
});

app.get('/Ejemplo_2', (req, res) => {
    res.render('problema2.pug');
});

app.get('/Ejemplo_3', (req, res) => {
    res.render('problema3.pug');
});

app.post('/api/Suma_Numeros', (req, res) => {
    var data = req.body;
    let cadena = data.numero;

   var suma = suma_numero(cadena);

         res.json({
             'suma' : suma,
             'cadena':cadena,
             'exito': true,  
         });
 });

 app.post('/api/Suma_Diagonal', (req, res) => {
    var data = req.body;
    let cadena = data.numero;
 
 });


app.listen(port, () => {
    console.log(`La aplicación esta ejecutando en el puerto:  ${port}!`);
});