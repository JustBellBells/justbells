var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// public directory
app.use(express.static(__dirname + '/public'));

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

let port = 8080;
app.listen(port);
console.log('Server is listening on port', port);