var expect = require('chai').expect;
var add = require("../add.js");
// var assert = require('assert');
// var should = require("should");

 describe('add', function() {
// suite('add', function() {
     it('should add two numbers', function() {
    // test('should add two numbers', function() {
        var result = add(1,4);
        expect(result).to.eql(5);
        // result.should.equal(5);
        // assert.equal(result, 5);
    });
});