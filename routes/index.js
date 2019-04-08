var fs = require('fs');
var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');
var Product = require('../models/product');

// code by auchenberg
//var products = JSON.parse(fs.readFileSync('./data/products.json', 'utf8'));

// //code of no use
// router.get('/', function (req, res, next) {
//   var productId = products && products[0].id;

//   res.render('shop/index', 
//   { 
//     title: 'NodeJS Shopping Cart',
//     products: products
//   }
//   );
// });

router.get('/add/:id', function(req, res, next) {

  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  var product = products.filter(function(item) {
    return item.id == productId;
  });
  cart.add(product[0], productId);
  req.session.cart = cart;
  res.redirect('/');
  inline();
});

router.get('/cart', function(req, res, next) {
  if (!req.session.cart) {
    return res.render('cart', {
      products: null
    });
  }
  var cart = new Cart(req.session.cart);
  res.render('cart', {
    title: 'NodeJS Shopping Cart',
    products: cart.getItems(),
    totalPrice: cart.totalPrice
  });
});

router.get('/remove/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.remove(productId);
  req.session.cart = cart;
  res.redirect('/cart');
});































/* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('layout', { title: 'Express' });
  });

router.get('/', function(req, res, next) {
  res.render('users', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('cart', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('eachproduct', { title: 'Express' });
});


router.get('/', function(req, res, next) {
  res.render('/shop/shopping-cart', { title: 'Express' });
});



router.get('/cart/:id',function(req,res,next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  productId.findById(productId,function(err,product) {
    if(err) {
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/')
    
  });


});




module.exports = router;



// module.exports = function(app, passport) {
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
 
//   app.post('/signup', passport.authenticate('local-signup', {
//    successRedirect: '/profile',
//    failureRedirect: '/signup',
//    failureFlash: true
//   }));
 
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
 