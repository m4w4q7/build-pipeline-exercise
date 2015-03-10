var expect = require('chai').expect;
var add = require("../add.js");

 describe('add', function() {
    it('{a:"1", b:"-5"} => {a:1, b:-5, sum:"-4"}', function() {
        var result = add({a:"1", b:"-5"});
        expect(result).to.eql({a:1, b:-5, sum:"-4"});
    });
    
    it('{a:"1", b:"12b"} => {a:1, b:"not a number", sum:"not a number"}', function() {
        var result = add({a:"1", b:"12b"});
        expect(result).to.eql({a:1, b:"not a number", sum:"not a number"});
    });
    
    it('{b:"1", c:"3"} => {a:1, b:"not a number", sum:"not a number"}', function() {
        var result = add({b:"1", c:"3"});
        expect(result).to.eql({a:"not present", b:1, sum:"not a number"});
    });
});