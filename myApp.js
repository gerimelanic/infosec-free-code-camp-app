const express = require('express');
const app = express();
const helmet = require ('helmet');
const PORT = process.env.PORT || 3000;

















































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.listen(PORT, () => {
  console.log(`🦾Geri Melanic Info Security App Started on Port ${PORT}`);
});
