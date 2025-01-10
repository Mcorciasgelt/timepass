const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');
const validarHora = require('../middlewares/validarHora');

router.get('/', horaMiddleware, validarHora, (req, res) => {
    res.send('<h1>Bienvenido a la página final</h1><p>Ruta: /endroute</p>');
});

module.exports = router;