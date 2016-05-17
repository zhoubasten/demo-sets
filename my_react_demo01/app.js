var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello, World');
});

app.listen(3000, function(){
  console.log('Example app listenning on 3000');
});

app.use(express.static('public'));

