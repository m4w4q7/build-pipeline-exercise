var supertest = require("supertest");
var server = require("../server.js");

describe("GET /add", function() {
    
    before(function() {
        server.configure().start();
    });
    
    describe("?a=-1&b=5", function() {
        it("should respond the sum of a(=-1) and b(=5), ie. 4 ", function(done) {
            supertest(server.getExpressServer())
                .get("/add?a=-1&b=5")
                .expect(200, "4", done);
        })
    })
    
    describe("?c=5&a=-1&b=-2", function() {
        it("should respond the sum of a and b (ie. -3) and ignore the c parameter", function(done) {
            supertest(server.getExpressServer())
                .get("/add?c=5&a=-1&b=-2")
                .expect(200, "-3", done);
        })
    })
    
    describe("?a=-1&c=5", function() {
        it("should respond NaN, because the b parameter is not present", function(done) {
            supertest(server.getExpressServer())
                .get("/add?a=-1&c=5")
                .expect(200, "NaN", done);
        })
    })
    
    describe("?b=-1", function() {
        it("should respond NaN, because the a parameter is not specified", function(done) {
            supertest(server.getExpressServer())
                .get("/add?b=-1")
                .expect(200, "NaN", done);
        })
    })
});