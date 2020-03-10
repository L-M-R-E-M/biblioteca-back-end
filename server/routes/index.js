const express = require('express');
const app = express();

app.use(require('./registrarEmpresa'));

module.exports = app;