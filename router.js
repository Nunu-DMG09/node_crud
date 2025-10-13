const express = require('express');
const router = express.Router();
const conexion = require('./database/db');

/* 
    PETICIONES :request/resq/entrada
    PETICIONES :request/resq/salida
*/ 

router.get('/', (req, res) => {
    res.send('HOLA NODE JS');
})

module.exports = router;