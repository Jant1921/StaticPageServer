
var express = require('express');
var serveStatic = require('serve-static');
var helmet = require('helmet');
var path = require('path')

var app = express();
app.use(helmet());

app.use(serveStatic(path.join(__dirname, 'public')))

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(8082)