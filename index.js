var express = require('express');
var app = express();
var PORT = process.argv[2] || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/browser.html');
});

app.listen(PORT, function() {
  console.log('Listening on port: ', PORT);
});
