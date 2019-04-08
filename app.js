var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var expressHbs = require('express-handlebars');
var mysql = require("mysql");
var fileUpload = require("express-fileupload")
var fs = require("fs");
var expressValidator = require('express-validator');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var morgan = require('morgan');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var login=require('./models/login');
// var register=require('./models/register');






//Init app  
var app = express();



var connection = mysql.createConnection({
  host:"localhost",
  user :"root",
  password:"",
  database:"shopping"
});
 connection.connect(function(error){
   if(!!error){
     console.log("error");
     }else{
       console.log("connected");
     }
 });
global.connection=connection;





// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs',expressHbs({defaultLayout:'layout',extname:'.hbs'}));
app.set('view engine', '.hbs');

//Home Route
 app.get('/',function(req,res){
    connection.query('SELECT * FROM `products` ', function (error, result, fields) {
      res.render('shop/index',{
        title:'Shopping cart',
        product : result
      });
    });
  });

 
  //testing for register user info

  app.post('/users/user/register', function(req, res, next) {
    console.log(req);
    console.log(req.body.username);     
    console.log(req.body.email);      
    console.log(req.body.password);
    con.connect(function(err) {
  if (err) throw  err;
  console.log("connected............");
  var sql = "INSERT INTO `user_info`(`id`,`name`, `username`,'email','password') VALUES ('"+req.body.id+"','"+req.body.name+"','"+req.body.username+"','"+req.body.email+"','"+req.body.password+"')";
  con.query(sql, function(err, result)  {
   if(err) throw err;
   console.log("table created");
      });
    });

    res.render('index', { title: 'Express' });
 });
    










//   app.post('/users/register', function(req, res, next) {
//     console.log(req.body.name);
//     console.log(req.body.email);      
//     console.log(req.body.description);
//     con.connect(function(err) {
//   if (err) throw  err;
//   console.log("connected");
//   var sql = "INSERT INTO `user_info`(`id`,`name`, `username`,'email_id','password') VALUES ('"+req.body.id+"','"+req.body.name+"','"+req.body.username+"','"+req.body.email_id+"','"+req.body.password+"')";
//   con.query(sql, function(err, result)  {
//    if(err) throw err;
//    console.log("table created");
//   });
// });

//    res.render('index', { title: 'Express' });
// });
    

// app.get('/',function(req,res){
//   res.render('users',{title:'Express'});
// })
 

//coding karma
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use(morgan('dev'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());
app.use(flash());
// app.use(fs());
app.use(session({
  secret: 'justasecret',
  resave:true,
  saveUninitialized: true
 }));
 
 app.use(passport.initialize());
 app.use(passport.session());


//server.js
// require('./config/passport')(passport);
// app.use(bodyParser.urlencoded({
//  extended: true
// }));
// require('./app/routes.js')(app, passport);



app.use('/index', indexRouter);
app.use('/users', usersRouter);




//testing

app.get('/',function(req,res){
  connection.query('SELECT * FROM `products` ', function (error, result, fields) {
    res.render('index',{
      title:'Shopping cart',
      product : result
    });
  });
});

// Actual Code (previous code)

// app.get('/eachproduct',function(req,res){
//   connection.query('SELECT * FROM `products` ', function (error, result, fields) {
//     res.render('eachproduct',{
//       title:'Shopping cart',
//       product : result
//     });
//   });
// });

//testing for different category products
app.get('/men-loafers',function(req,res){
  connection.query('SELECT * FROM `products` WHERE `category` = "Loafer For Men" ', function (error, result, fields) {
    res.render('men-loafers',{
      title:'Shopping cart',
      product : result
    });
  });
});

app.get('/men-sneakers',function(req,res){
  connection.query('SELECT * FROM `products` WHERE `category` = "Sneaker For Men" ', function (error, result, fields) {
    res.render('men-sneakers',{
      title:'Shopping cart',
      product : result
    });
  });
});+

app.get('/men-flipflops',function(req,res){
  connection.query('SELECT * FROM `products` WHERE `category` = "Flip Flop For Men" ', function (error, result, fields) {
    res.render('men-flipflops',{
      title:'Shopping cart',
      product : result
    });
  });
});

app.get('/men-sportshoes',function(req,res){
  connection.query('SELECT * FROM `products` WHERE `category` = "Sport Shoe For Men" ', function (error, result, fields) {
    res.render('men-sportshoes',{
      title:'Shopping cart',
      product : result
    });
  });
});

app.get('/men-formalshoes',function(req,res){
  connection.query('SELECT * FROM `products` WHERE `category` = "Formal Shoe For Men" ', function (error, result, fields) {
    res.render('men-formalshoes',{
      title:'Shopping cart',
      product : result
    });
  });
});

app.get('/women-flats',function(req,res){
  connection.query('SELECT * FROM `products` WHERE `category` = "Flat For Women" ', function (error, result, fields) {
    res.render('women-flats',{
      title:'Shopping cart',
      product : result
    });
  });
});

app.get('/women-heels',function(req,res){
  connection.query('SELECT * FROM `products` WHERE `category` = "Heel For Women" ', function (error, result, fields) {
    res.render('women-heels',{
      title:'Shopping cart',
      product : result
    });
  });
});

app.get('/women-boots',function(req,res){
  connection.query('SELECT * FROM `products` WHERE `category` = "Boot For Women" ', function (error, result, fields) {
    res.render('women-boots',{
      title:'Shopping cart',
      product : result
    });
  });
});

app.get('/women-sneakers',function(req,res){
  connection.query('SELECT * FROM `products` WHERE `category` = "Sneaker For Women" ', function (error, result, fields) {
    res.render('women-sneakers',{
      title:'Shopping cart',
      product : result
    });
  });
});

app.get('/women-sportshoes',function(req,res){
  connection.query('SELECT * FROM `products` WHERE `category` = "Sport Shoe For Women" ', function (error, result, fields) {
    res.render('women-sportshoes',{
      title:'Shopping cart',
      product : result
    });
  });
});

app.get('/kids-flats',function(req,res){
  connection.query('SELECT * FROM `products` WHERE `category` = "Flat For Kid" ', function (error, result, fields) {
    res.render('kids-flats',{
      title:'Shopping cart',
      product : result
    });
  });
});

app.get('/kids-sandals',function(req,res){
  connection.query('SELECT * FROM `products` WHERE `category` = "Sandal For Kid" ', function (error, result, fields) {
    res.render('kids-sandals',{
      title:'Shopping cart',
      product : result
    });
  });
});

app.get('/kids-sportshoes',function(req,res){
  connection.query('SELECT * FROM `products` WHERE `category` = "Sport Shoe For Kid" ', function (error, result, fields) {
    res.render('kids-sportshoes',{
      title:'Shopping cart',
      product : result
    });
  });
});





//register user data
// app.post('/users/register',function(req,res){
//   connection.query('INSERT INTO `user_info`(`id`, `name`, `username`, `email_id`, `password`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5]), function (error, result, fields) {
//     res.render('index',{
//       title:'Shopping cart',
//       product : result
//     });
//   });
// });




app.get('/', function(req, res) {
  product.find({}, function(err, products) {
      if (err) throw err;
      console.log(products)
      res.render('home', { product: products });

  });
});

app.get('/brand/:brand_name', function(req, res) {
  var brand_name = req.params.brand_name;
  product.find({
      brand: brand_name
  }, function(err, products) {
      if (err) throw err;
      res.render('category', { product: products });

  });

});

app.get('/category/:type', function(req, res) {
  var type = req.params.type;
  product.find({
      type: type
  }, function(err, products) {
      if (err) throw err;
      res.render('category', { product: products });

  });

});

app.get('/category/:type/brand/:brand_name', function(req, res) {
  var type = req.params.type;
  var brand_name = req.params.brand_name;
  product.find({
      type: type,
      brand: brand_name
  }, function(err, products) {
      if (err) throw err;
      res.render('category', { product: products });

  });

});


//testing
// app.get('/product/:id', function(req, res) {
//   var id = req.params.id;
//   var brand_name = req.params.brand_name;
//   product.find({
//       _id: id,
//   }, function(err, products) {
//       if (err) throw err;
//       res.render('eachproduct', { product: products[0] });

//   });







app.get('/product/:id', function(req, res) {
  var id = req.params.id;
  var brand_name = req.params.brand_name;
  product.find({
      _id: id,
  }, function(err, products) {
      if (err) throw err;
      res.render('eachproduct', { product: products[0] });

  });

});

app.get('/cart', function(req, res) {
  res.render('cart');
});

app.post('/buy_now', function(req, res) {
  console.log(req.body)
  var neworder = order(
      req.body
  );
  neworder.save(function(err, data) {
      if (err) throw err;
      res.json({ a: 1 });
  });
});

app.get('/order_placed', function(req, res) {
  res.render('success');
});


















// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

