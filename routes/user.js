


exports.login = function(req, res){
   var message = '';
   var sess = req.session;

   if(req.method == "POST"){
      var post  = req.body;
      var email= post.email;
      var pass= post.password;



//and password = '"+pass+"'

      var sql="SELECT id, email, first_name, last_name, user_name, password FROM `users_final` WHERE `email`='"+email+"' and password = '"+pass+"'";
      db.query(sql, function(err, results){
         if(results.length){
            req.session.userId = results[0].id;
            req.session.user = results[0];
            console.log(results[0]);
            res.redirect('/home/dashboard');
         }
         else{

           console.log('OHHHHHH NOOOOOOOOOO');
            message = 'Wrong Credentials.';
            res.render('index.ejs',{message: message});
         }

      });
   } else {
      res.render('index.ejs',{message: message});
   }
};

exports.signup = function(req, res){
  var message = '';

  if(req.method == "POST"){
   var post  = req.body;
   var email = post.email;
   var name= post.username;
   var pass= post.password;
   var fname= post.first_name;
   var lname= post.second_name;
   var mob= 88888888;

   var sql = "INSERT INTO `users_final`(`email`,`first_name`,`last_name`,`mob_no`,`user_name`, `password`) VALUES ('" + email + "','" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "')";

   var query = db.query(sql, function(err, result) {

      message = "Succesfully! Your account has been created.";
      //res.render('signup.ejs',{message: message});
      res.render('index.ejs', {message: message});
   });

   console.log(query);

} else {
   res.render('signup');
}
};




exports.dashboard = function(req, res, next){

  userid = req.session.id;
  var user =  req.session.user;

  console.log(user);

  if(user == null){

		res.redirect("/login");
		return;
	}







  if(userid != null){
    res.render('profile.ejs', {user_name: user.user_name, first_name: user.first_name, second_name: user.last_name});
  }





};

exports.main_page = function(req, res, next){

	var user =  req.session.user,
	userid = req.session.id;

	if(user == null){
		res.redirect("/login");
		return;
	}
  res.render('main_page.ejs');


};


exports.logout = function(req, res, next){
    req.session.destroy()

		res.redirect("/login");



};
