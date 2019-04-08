var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// //Login Page
router.get('/user/login', function(req, res, next) {
  res.render('user/login');
}); 

// //Register Page
router.get('/user/register', function(req, res, next) {
  res.render('user/register');
});





module.exports = function(router, passport) {
//   app.get('/', function(req, res){
//    res.render('index.ejs');
//   });
 
//   app.get('/login', function(req, res){
//    res.render('login.ejs', {message:req.flash('loginMessage')});
//   });
 
//   app.post('/login', passport.authenticate('local-login', {
//    successRedirect: '/profile',
//    failureRedirect: '/login',
//    failureFlash: true
//   }),
//    function(req, res){
//     if(req.body.remember){
//      req.session.cookie.maxAge = 1000 * 60 * 3;
//     }else{
//      req.session.cookie.expires = false;
//     }
//     res.redirect('/');
//    });
 
//   app.get('/signup', function(req, res){
//    res.render('signup.ejs', {message: req.flash('signupMessage')});
//   });
 
  router.post('/users/register', passport.authenticate('local-signup', {
   successRedirect: '/profile',
   failureRedirect: '/register',
   failureFlash: true
  }));
 
//   app.get('/profile', isLoggedIn, function(req, res){
//    res.render('profile.ejs', {
//     user:req.user
//    });
//   });
 
//   app.get('/logout', function(req,res){
//    req.logout();
//    res.redirect('/');
//   })
//  };
 
//  function isLoggedIn(req, res, next){
//   if(req.isAuthenticated())
//    return next();
 
//   res.redirect('/');
 



}
module.exports = router;

