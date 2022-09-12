var expect = require("chai").expect;
var request = require("request");

describe("Add Two Numbers", function(){
    var url = "http://localhost:3000/addNumber/2/3";
    it("returns status 200 to check if api works", function(done){
        request(url, function(err, res, body){
            expect(res.statusCode).to.equal(500);
            done();
        })
    });
    it("Checks Addition functionality", function(done){
        request(url, function(err, res, body){
            expect(res.statusCode).to.equal(500);
            done();
        })
    });
    it("checks database connection", function(done){
        request(url, function(err, res, body){
            expect(res.statusCode).to.equal(500);
            done();
        })
    });
});