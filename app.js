var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 8000;

app.get('/', function (req, res) {
  res.send('Hello World!');
  res.render('index');
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
