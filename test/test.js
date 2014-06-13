var MathFunctions = require("./../js/app1");

var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

var add = MathFunctions.add;
var subtract = MathFunctions.subtract;
var multiply = MathFunctions.multiply;
var divide = MathFunctions.divide;

describe("MathFunctions", function() {

  it("should add numbers", function() {
    expect(add(1,2)).equal(3);
  });

  it("should subtract numbers", function() {
    expect(subtract(4, 3)).equal(1);
  });

  it("should multiply numbers", function() {
    expect(multiply(2, 3)).equal(6);
  });

  it("should divide numbers", function() {
    expect(divide(4,2)).equal(2);
  });
  
  
});