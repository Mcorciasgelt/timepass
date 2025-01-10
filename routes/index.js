const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');

router.get('/', horaMiddleware, (req, res) => {
    const mensaje = req.query.mensaje || '';
    res.send(`
        <h1>Bienvenido</h1>
        <p>La hora actual es: ${req.horaActual}</p>
        <p style="color: red;">${mensaje}</p>
        <a href="/endroute">Ir a la siguiente página</a>
    `);
});

module.exports = router;