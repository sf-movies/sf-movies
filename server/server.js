const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const logger = require('morgan');
const path = require('path');
const PORT = 3000;
var db = require('monk')('localhost/sfdata');
var sf = db.get('sf');

app.use(logger());

app.use(bodyParser.json());

app.use(express.static('static'));

app.post('/movie', function(req, res) {

  sf.distinct(req.body.movie,  function(err, array) {
    if (err) {
      'error'
    } else {
      return array
    }
  })
  .then(function(movies) {
    res.send(movies);
  });

});

var server = app.listen(PORT, function() {
  console.log('Server is running at http://localhost:' + server.address().port)
});
