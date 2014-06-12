describe("MathFunctions", function () {
  var result;

  it("should add numbers properly", function() {
    result = add(2, 3);
    expect(result).toBe(5);
  });

  it("should subtract numbers properly", function() {
    result = subtract(3, 2);
    expect(result).toBe(1)
  });

  it("should multiply number properly", function() {
    result = multiply(2, 3);
    expect(result).toBe(6);
  });

  it("should divide numbers properly", function() {
    result = divide(6, 3);
    expect(result).toBe(2);
  });

  it("should figure our power of numbers", function() {
    result = power(2, 3);
    expect(result).toBe(8);
  });
  
});