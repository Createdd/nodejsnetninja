/* jshint node: true */
/*jshint esversion: 6 */
"use strict";

var express=require('express');//returns a function
var bodyParser=require('body-parser');
var app=module.exports=express();
var port=process.env.PORT || 3000;


app.listen(port);
console.log("app is listening on port: "+port);

app.get("/",(req,res) => {
  res.send("it works");
});//route home directory
app.get("/contact",(req,res) =>{
  res.send("contact");
});//route contact page
app.get("/profile/:name", function(req,res){
  res.send("You requested the profile of "+req.params.name);//display the id using params
});//set up dynamic routes
