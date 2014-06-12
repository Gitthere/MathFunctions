describe("MathFunctions", function () {
  var result;

  it("should add numbers properly", function() {
    result = add(2, 3);
    expect(result).toBe(5);
  });

  it("should subtract numbers properly", function() {
    result = subtract(3, 2);
    expect(result).toBe(1)
  })
  
})