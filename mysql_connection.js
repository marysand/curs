const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "hacksitedb",
  password: "12345678",
});



/*const sql = `create table if not exists users_final(
  id int(5) NOT NULL AUTO_INCREMENT,
  email text NOT NULL,
  first_name text NOT NULL,
  last_name text NOT NULL,
  mob_no int(8) NOT NULL,
  user_name varchar(20) NOT NULL,
  password varchar(15) NOT NULL,
  PRIMARY KEY (id)
)`;*/


var email = 'post.email';
var name= 'post.username';
var pass= 'post.password';
var fname= 'post.first_name';
var lname= 'post.second_name';
var mob= 88888888;

//var sql2 = "INSERT INTO `users_final`(`email`,`first_name`,`last_name`,`mob_no`,`user_name`, `password`) VALUES ('" + email + "','" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "')";




connection.query(sql2, function(err, results) {
    if(err) console.log(err);
    else console.log(results);
});

connection.end();






/*


connection.query("CREATE DATABASE usersdb2",
  function(err, results) {
    if(err) console.log(err);
    else console.log("База данных создана");
});

connection.end();
*/
