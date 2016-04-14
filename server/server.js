var express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function(req, res) {
  res.send("Hello world")
});

app.get('/search', function(req, res) {
  res.send("Here is some movie data!")
});

var server = app.listen(PORT, function() {
  console.log('Server is running at http://localhost' + server.address().port)
});
