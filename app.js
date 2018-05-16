var express = require('express');
var app = express();

app.use(function (req, res, next) {
    // haz tu logueo aquí
    console.log("ingresaste al use")
    // llama a `next`, o sino tu app va a ser un agujero negro - recibiendo pedidos pero nunca respondiendo adecuadamente.
    next();
})






app.use('/is-anybody-in-there', function (req, res, next) {
    // haz tu logueo aquí
    console.log("Haz llegado a un area especial")
    // llama a `next`, o sino tu app va a ser un agujero negro - recibiendo pedidos pero nunca respondiendo adecuadamente.
    next();
})






app.get('/', function (req, res) {
  res.send('GET request to homepage');
});

app.get('/is-anybody-in-there', function (req, res) {
    res.send('GET request to is anybody');
  });

  app.post('/modernism', function (req, res) {
    res.send('POST request to homepage');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});