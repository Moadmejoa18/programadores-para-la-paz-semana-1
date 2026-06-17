const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor activo y funcionando');
});

app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Bienvenido ' + nombre + ', gracias por conectarte');
});

app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;
  res.json({
    estado: "Reporte recibido",
    mensaje: mensaje
  });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
