
//const express = require("express");
let express = require('express');
//const app = express();
let app = express();


app.set("view engine", "ejs");

app.use('/public', express.static('public'));

//app.use(express.static(__dirname + '/public'));

//app.get('/:id', function(res, req){
//  res.sendFile('/public' + req.param.id);
//});
/*app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});*/

/*app.get('/about', function(req, res){
	res.sendFile(__dirname + '/view/about.html');
});*/


app.get('/page11727243body/:id', function(req, res){
  res.render('page11727243body', {username: req.params.id});
});

app.listen(8000);
