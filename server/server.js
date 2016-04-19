var express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const PORT = 3000;

app.use(logger());

app.use(express.static('static'));

app.post('/movie', function(req, res) {
  console.log(req.body);
});

var server = app.listen(PORT, function() {
  console.log('Server is running at http://localhost' + server.address().port)
});
