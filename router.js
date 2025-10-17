const express = require('express');
const router = express.Router();
const conexion = require('./database/db');

// Listar
router.get('/', (req, res) => {
  conexion.query('SELECT * FROM pelicula ORDER BY id DESC', (err, results) => {
    if (err) return res.status(500).send('Error al listar');
    res.render('index', { peliculas: results });
  });
});

// Form crear
router.get('/create', (req, res) => {
  res.render('create');
});

// Crear
router.post('/create', (req, res) => {
  const { titulo, duracion, estreno } = req.body;
  if (!titulo || !duracion || !estreno) return res.status(400).send('Datos inválidos');

  const sql = 'INSERT INTO pelicula (titulo, duracion, estreno) VALUES (?,?,?)';
  conexion.query(sql, [titulo, Number(duracion), String(estreno)], (err) => {
    if (err) return res.status(500).send('Error al crear');
    res.redirect('/');
  });
});

// Form editar
router.get('/edit/:id', (req, res) => {
  const { id } = req.params;
  conexion.query('SELECT * FROM pelicula WHERE id = ?', [id], (err, rows) => {
    if (err) return res.status(500).send('Error al obtener');
    if (!rows.length) return res.status(404).send('No encontrado');
    res.render('edit', { pelicula: rows[0] });
  });
});

// Actualizar
router.post('/update', (req, res) => {
  const { id, titulo, duracion, estreno } = req.body;
  const sql = 'UPDATE pelicula SET titulo=?, duracion=?, estreno=?, modificado=NOW() WHERE id=?';
  conexion.query(sql, [titulo, Number(duracion), String(estreno), id], (err) => {
    if (err) return res.status(500).send('Error al actualizar');
    res.redirect('/');
  });
});

// Eliminar
router.get('/delete/:id', (req, res) => {
  const { id } = req.params;
  conexion.query('DELETE FROM pelicula WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send('Error al eliminar');
    res.redirect('/');
  });
});

module.exports = router;