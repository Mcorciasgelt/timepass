const express = require('express');
const app = express();
const PORT = 3000;

const horaMiddleware = require('./middlewares/horaMiddleware');
const validarHora = require('./middlewares/validarHora');
const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');

app.use('/', indexRouter);
app.use('/endroute', endrouteRouter);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});