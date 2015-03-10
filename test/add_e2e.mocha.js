var supertest = require("supertest");
var server = require("../server.js");

describe("GET /add", function() {
    
    before(function() {
        server.configure().start();
    });
    
    describe("?a=-1&b=5", function() {
        var expectedResponse = '{"a":-1,"b":5,"sum":"4"}';
        it('should respond ' + expectedResponse, function(done) {
            supertest(server.getExpressServer())
                .get("/add?a=-1&b=5")
                .expect(200, expectedResponse, done);
        })
    })
    
    describe("?c=5&b=-1&a=-2", function() {
        var expectedResponse = '{"a":-2,"b":-1,"sum":"-3"}';
        it('should respond ' + expectedResponse, function(done) {
            supertest(server.getExpressServer())
                .get("/add?c=5&b=-1&a=-2")
                .expect(200, expectedResponse, done);
        })
    })
    
    describe("?a=-1&b=5b", function() {
        var expectedResponse = '{"a":-1,"b":"not a number","sum":"not a number"}';
        it('should respond ' + expectedResponse, function(done) {
            supertest(server.getExpressServer())
                .get("/add?a=-1&b=5b")
                .expect(200, expectedResponse, done);
        })
    })
    
    describe("?a=-1&c=5", function() {
        var expectedResponse = '{"a":-1,"b":"not present","sum":"not a number"}';
        it('should respond ' + expectedResponse, function(done) {
            supertest(server.getExpressServer())
                .get("/add?a=-1&c=5")
                .expect(200, expectedResponse, done);
        })
    })
    
    describe("?b=-1", function() {
        var expectedResponse = '{"a":"not present","b":-1,"sum":"not a number"}';
        it('should respond ' + expectedResponse, function(done) {
            supertest(server.getExpressServer())
                .get("/add?b=-1")
                .expect(200, expectedResponse, done);
        })
    })
});