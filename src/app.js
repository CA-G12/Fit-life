const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const path = require('path');
const router = require('./router');
const { port } = require('./config/environment')

const app = express();

app.set('port', port);
app.disabled('x-powered-by');

app.use(compression());
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(router);

// not found
// server error

module.exports = app
