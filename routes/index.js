var express = require('express');
var router = express.Router();
var fs=require('fs');
/* GET home page. */
router.post('/', function(req, res, next) {
     res.header('Access-Control-Allow-Origin','*')    ;
   fs.readFile("public/json.txt","utf-8",function(err,data){
       var str=JSON.parse(data);
       str.push({name:req.body.name,neir:req.body.neir});
       console.log(str);
       fs.writeFile('public/json.txt',JSON.stringify(str),function(err){
           fs.readFile("public/json.txt","utf-8",function(err,data1){
               var data=JSON.parse(data1);
               res.send({name:data,neir:data.neir})
           })
       })
   })
});
module.exports = router;