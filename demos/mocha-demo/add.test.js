var add = require('./add.js');
var expect = require('chai').expect;

describe('add function test', function () {
    it('1 add 1 == 2', function () {
        expect(add(1, 1)).to.be.equal(2)
    });
});

describe('add function test', function () {
    it('3 add -3', function () {
        expect(add(3,-3)).to.be.equal(0);
    });
});
