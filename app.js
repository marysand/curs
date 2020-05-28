const express = require('express')
const app = express()
//var bodyParser = require('body-parser');


app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  console.log("Something was catched!" + req.method);
  res.sendFile('public/index.html', {root: __dirname });
});


/*app.get("/", function(req, res) {
    res.render("page11360025.html");
});*/

app.listen(8000)




/*var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('port', (process.env.PORT || 8000));
app.use(express.static(__dirname + '/public'));
app.set('public', __dirname + '/public');


app.get('/', function(req, res){
    res.render('page11360025.html');
});

app.listen(app.get('port'), function() {
});*/
