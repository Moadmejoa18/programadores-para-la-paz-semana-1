const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bienvenido al servidor de la comunidad');
});

app.get('/inicio', (req, res) => {
  res.send('Página de inicio funcionando correctamente');
});

app.get('/info', (req, res) => {
  res.send('Servidor creado con Node.js y Express');
});

app.listen(3000, () => {
  console.log('Servidor activo en el puerto 3000');
});
