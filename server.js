/*const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();


/*const port = 8000;
app.listen(port, () => {
  console.log('We are live on ' + port);
});*/

var port = 3080
var express = require('express');
var http = require('http');
var index = require('./routes/index.js');
var app = express();

// Куча всяких настроек express`а

app.get('/', index.index);

http.createServer(app).listen(port, function(){
  console.log('Express server listening on port ' + port);
});

app.listen(port);
