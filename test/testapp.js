/* jshint node: true */
/*jshint esversion: 6 */
/* jshint es5:true */ //enable es5 to deal with missing describe/it definitions
"use strict";

var expect  = require("chai").expect;//add chai expect module
var request = require("request");//add module to test request


describe("Mocha/Chai", function(){
  it("Mocha testing is generally working!", function(){
    expect(true).to.be.true;
  });
});

describe("App funcitonality", function(){
  var url = "http://localhost:3000/";
  it("returns status 200", function(done) {
    request(url, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});
/*
describe("Material App test", function(){
  app.get("/",(req,res) => {
  var test1 = res.send("läuft!");
  console.log("llllllog"+test1);
  });
  it("the response is a string", function(){
    expect(test1).to.be.a("string");
  });
});
*/
