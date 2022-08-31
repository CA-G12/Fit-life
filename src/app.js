const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const path = require('path');
const router = require('./router');
const { port } = require('./config/environment')
const { auth } =require('./middelWere')
const app = express();
let mainPath;
app.set('port', port);
app.disabled('x-powered-by');

app.use(compression());
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cookieParser());
app.use(auth)

app.get('/', (req, res) => {
   
    if(req.user) res.sendFile(path.join(__dirname, '..', 'public','pages','home.html'))
    else res.sendFile(path.join(__dirname, '..', 'public'))

})

app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(router);

app.use((req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'pages', 'errors', '404.html' ))
})
app.use((err, req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'pages', 'errors', '500.html' ))
})

module.exports = app
