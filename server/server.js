const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const logger = require('morgan');
const path = require('path');
const PORT = 3000;

app.use(logger());

app.use(bodyParser.json());

app.use(express.static('static'));

app.post('/movie', function(req, res) {
  console.log("This is a movie title:", req.body.movie);
  res.send("Hello world");
  res.end();
});

var server = app.listen(PORT, function() {
  console.log('Server is running at http://localhost:' + server.address().port)
});
