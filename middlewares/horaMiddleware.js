const horaMiddleware = (req, res, next) => {
    const now = new Date();
    const horaActual = now.getHours();
    const minutoActual = now.getMinutes();
    const segundoActual = now.getSeconds().toFixed(0);
    const horaActualFormateada = `${horaActual}:${minutoActual}:${segundoActual}`;
    req.horaActual = `${horaActualFormateada}`
    next();
};

module.exports = horaMiddleware;