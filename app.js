const express = require('express');
const app = express();

// MOTOR DE PLANTILLAS
app.set('view engine', 'ejs');

// ENRUTADOR
// EL CARACTER "/" REPRESENTA LA RAIZ DE TU WEB htpps://misitio.com/

app.use('/', require('./router'));

// Crear servidor 
app.listen(5000, () => {
    console.log('Servidor corriendo en http://localhost:5000');
});