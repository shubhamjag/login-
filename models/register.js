var Cryptr = require('cryptr');
var express=require("express");
// var connection = require('./../config');
 cryptr = new Cryptr('myTotalySecretKey');
 
module.exports.register=function(req,res){
    // var today = new Date();
  var encryptedString = cryptr.encrypt(req.body.password);
    var user={
        "name":req.body.name,
        "username":req.body.username,
        "email":req.body.email,
        "password":encryptedString,
        // "created_at":today,
        // "updated_at":today
    }
    connection.query('INSERT INTO user_info SET ?',user, function (error, results, fields) {
      if (error) {
        console.log("there are some error with query.");
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
        console.log("user registered successfually.");
          res.json({
            status:true,
            data:results,
            
            message:'user registered sucessfully'
        })
      }
    });
}
