const express = require('express');
const router = express.Router();
const conexion = require('./database/db');

/* 
    PETICIONES :request/resq/entrada
    PETICIONES :request/resq/salida
*/ 

router.get('', (req, res) => {
    //res.send('SENATI: INSTITUTO TECNOLOGICO SUPERIOR');
    res.render("index");
});

router.get('/create', (req, res) => {
    //res.send('DESARROLLADOR: DAVID MESTA GONZALES =) ༼ つ ◕_◕ ༽つ');
    res.render("create");
});

router.get('/edit', (req, res) => {
    res.render('edit');
});


module.exports = router;