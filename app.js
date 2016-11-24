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
  res.send("läuft!");
});
app.get("/contact",(req,res) =>{
  res.send("contact"+this);
});
