var supertest = require("supertest");
var server = require("../server.js");

describe("GET /add", function() {
    
    before(function() {
        server.configure().start();
    });
    
    describe("?a=-1&b=5", function() {
        it("should respond the sum of -1 and 5 ie. 4", function(done) {
            supertest(server.getExpressServer())
                .get("/add?a=-1&b=5")
                .expect(200, "4", done);
        })
    })
});