const express = require('express');
const app = express();
var path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./controllers/authController'));






app.get('/', (req, resp) => {
    resp.sendFile(path.resolve('public/register.html')
);
})

var publicPath = path.resolve( 'public');

app.use(express.static(publicPath));
module.exports = app;