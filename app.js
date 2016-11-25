/* jshint node: true */
/*jshint esversion: 6 */
"use strict";

var express=require('express');//returns a function
var bodyParser=require('body-parser');
var app=module.exports=express();
var port=process.env.PORT || 3000;
app.set("view engine", "ejs");


app.listen(port);
console.log("app is listening on port: "+port);

app.get("/",(req,res) => {
  res.sendFile(__dirname+"/index.html");
});//route home directory
app.get("/contact",(req,res) =>{
  res.sendFile(__dirname+"/contact.html");
});//route contact page
app.get("/profile/:name", function(req,res){
  var data= {age:30, job:"lawyer"};
  var data2= {age:90, job:"granny"};
  res.render("profile", {person: req.params.name, data:data});//render with a view template engine
});//set up dynamic routes
