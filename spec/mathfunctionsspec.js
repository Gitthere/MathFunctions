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

  it("should add numbers properly", function() {
    result = test_add_1();
    expect(result).toBe(9);
  });

  it("should add multiple numbers properly", function() {
    result = test_add_2();
    expect(result).toBe(12);
  });
  
  it("should subtract numbers properly", function() {
    result = test_subtract_1();
    expect(result).toBe(1);
  });

  it("should subtract multiple numbers properly", function() {
    result = test_subtract_2();
    expect(result).toBe(2);
  });

  it("should call function and add numbers", function() {
    result = add1;
    expect(result).toBe(3);
  });

  it("should call functions and add numbers", function() {
    result = add22;
    expect(result).toBe(6);
  });

  it("should call functions and add numbers", function() {
    result = add33;
    expect(result).toBe(10);
  });

  it("should subtract numbers properly", function() {
    result = sub;
    expect(result).toBe(1);
  });

  it("should subtract numbers properly", function() {
    result = sub5;
    expect(result).toBe(1);
  });

  it("should subtract numbers properly", function() {
    result = sub6;
    expect(result).toBe(1);
  });

  it("should multiply numbers properly", function() {
    result = mul;
    expect(result).toBe(6);
  });

  it("should multiply numbers properly", function() {
    result = mul8;
    expect(result).toBe(6);
  });

  it("should multiply numbers properly", function() {
    result = mul9;
    expect(result).toBe(24);
  });



});