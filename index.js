
const express = require('express')
const app = express()
//var bodyParser = require('body-parser');


app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  console.log("Something was catched!" + req.method);
  res.sendFile('public/page11360025.html', {root: __dirname });
});


/*app.get("/", function(req, res) {
    res.render("page11360025.html");
});*/

app.listen(8000)
