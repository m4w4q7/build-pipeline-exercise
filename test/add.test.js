var expect = require('chai').expect;
var add = require("../add.js");

describe('add', function() {
    it('should add two numbers', function() {
        var result = add(1,4);
        expect(result).to.eql(5);
    });
});