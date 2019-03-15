const express = require('express');
const app = express();
const PORT = process.env.PORT || 3800;

app.get('/', (req, res) => {
    res.send('Prueba 02, deploy desde Jenkins');
});

app.listen(PORT, () => {
    console.log(`Servidor activo en ${PORT}`)
});

module.exports = app;
