var express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const PORT = 3000;

app.use(logger());

app.get("/", function(req, res) {
  res.sendFile(path.resolve('./','index.html'));
  console.log("Serving up index.html");
})

var server = app.listen(PORT, function() {
  console.log('Server is running at http://localhost' + server.address().port)
});
