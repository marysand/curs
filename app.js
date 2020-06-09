
const morgan = require('morgan')
const mongoose = require('mongoose')
var passport = require('passport');
var expressSession = require('express-session');
let ejs = require('ejs');

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();
var mysql      = require('mysql');
var bodyParser=require("body-parser");
var connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : '12345678',
              database : 'hacksitedb'
            });

connection.connect();
global.db = connection;

app.use(passport.initialize());
app.use(passport.session());

var session = require('express-session');
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))





app.use(morgan('dev'))


app.set('views', path.join(__dirname, 'views'))



app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// то что работало --------------------------------------

app.use('/public', express.static('public'));

app.get('/', routes.index);//call for main index page
app.get('/login', routes.index);//call for login page
app.get('/signup', user.signup);//call for signup page
app.post('/login', user.login);
app.post('/signup', user.signup);//call for signup post
app.get('/home/dashboard', user.dashboard);//call for dashboard page after login
app.get('/main_page', user.main_page);
app.get('/logout', user.logout);

app.get("/", function(req, res){
  var sess = req.session;  //initialize session variable
  req.session.userId = results[0].id; //set user id
  req.session.user = results[0];

  var userId = req.session.userId;
  //res.render('firstpage.ejs', {root: __dirname });
	res.render('index.ejs', {});
});



app.listen(8080);

// то что работало --------------------------------------
//var bodyParser = require('body-parser');





/*app.get('/page11727243body/:id', function(req, res){
	res.render('page11727243body', {username: req.params.id});
});*/








//--------------------------try ejs--------------------------------------------






/*
app.set("view-engine", "ejs");

app.use('/views', );

app.use("/page11727243body.ejs", function(request, response){

    response.render("page11727243body.ejs", {
        name: Maria
    });
});
app.use("/", function(request, response){

    response.send("Главная страница");
});
app.listen(8000);



//---------------------------Код для залогинивания-------------------------------

/*app.use(connect.cookieParser());
app.use(connect.session({ secret: 'your secret here'} ));

if ((request.body.login==='Thor')&&(request.body.password==='111')) {
    request.session.authorized = true;
    request.session.username = request.body.login;

    console.log('Thor is here!');
}
if (typeof req.session.username == 'undefined') {
 // не залогинен,  перенаправить на форму ввода пароля
}


var siteUrls = [
  {pattern:'^/login/?$', restricted: false}
, {pattern:'^/logout/?$', restricted: true}
, {pattern:'^/$', restricted: false}
, {pattern:'^/single/\\w+/?$', restricted: true}
];

function authorizeUrls(urls) {
  function authorize(req, res, next) {
    var requestedUrl = url.parse(req.url).pathname;
    for (var ui in urls) {
      var pattern = urls[ui].pattern;
      var restricted = urls[ui].restricted;
      if (requestedUrl.match(pattern)) {
        if (restricted) {
          if (req.session.authorized) {
            // если все хорошо, просто переходим к следующим правилам
            next();
            return;
          }
          else{
            // пользователь не авторизирован, отправляем его на страницу логина
            res.writeHead(303, {'Location': '/login'});
            res.end();
            return;
          }
        }
        else {
          next();
          return;
        }
      }
    }

    // сюда мы попадаем, только если в цикле не нашлось совпадений
    console.log('common 404 for ', req.url);
    res.end('404: there is no ' + req.url + ' here');
  }
  return authorize ;
}

app.use('/', authorizeUrls(siteUrls));*/
