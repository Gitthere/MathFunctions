// (function() {

  function add(a1, a2) {
    return a1 + a2;
    console.log(add);
  }

  function subtract(s1, s2) {
    return s1 - s2;
    console.log(subtract);
  }

  function multiply(m1, m2) {
    return m1 * m2;
    console.log(multiply);
  }

  function divide(d1, d2) {
    return d1/d2;
    console.log(divide);
  }

  function power(p1, p2) {
    return Math.pow(p1, p2);
    console.log(power);
  }

  //STEP 6
  function test_add_1() {
    return add(5, 4);
    // 9  
  }
  
  //STEP 7
  function test_add_2() {
    var ta3 = 3;
    return add(5,4) + ta3;
    // 12
  }

  //STEP 8
  function test_subtract_1() {
    var sub1 = 5;
    var sub2 = 4; 
    return subtract(5, 4);
    // 1
  }

  //STEP 9
  function test_subtract_2() {
    var ts1 = 5;
    var ts2 = 4;
    var ts3 = 3;
    var ts4 = subtract(5,4);
    return ts3 - ts4;
    // 2
  }

  //STEP 10-1
  var add1 = add(1, 2);
  console.log(add1);
  
  //STEP 10-2
  var add21 = add(2,3);
  var add22 = add(1, add21);
  console.log(add22);

  //STEP 10-3
  var add31 = add(1, 2);
  var add32 = add(3, 4);
  var add33 = add(add31, add32);
  add(add(1, 2), add(3, 4));
  console.log(add33);

  //STEP 10-4
  var sub = subtract(10, 9);
  console.log(sub);

  //STEP 10-5
  var sub5 = subtract(10, subtract(19, 10));
  console.log(sub5);

  //STEP 10-6
  var sub6 = subtract(subtract(20, 10), subtract(19, 10));
  console.log(sub6);

  //STEP 10-7
  var mul = multiply(2, 3);
  console.log(mul);

  //STEP 10-8
  var mul8 = multiply(2, multiply(1, 3));
  console.log(mul8);

  //STEP 10-9
  var mul9 = multiply(multiply(1, ), multiply(3, 4));
  console.log(mul9);

  //STEP 10-10

  //THE FOLLOWING IS USED TO DEBUG FUNCTION BY BREAKING INTO 
  //EACH INDIVIDUAL OPERATION. THE NEW 'PIECE OF PAPER'
  //var op1 = add(1,2);
  //console.log("op1 "op1);
  // var op2 = subtract(8, 4);
  // console.log("op2 "op2);
  // var op3 = add(test_add_1(), test_subtract_1());
  // console.log("op3 "op3);
  // var op4 = subtract(test_add_2(), test_subtract_2());
  // console.log("op4 "op4);
  // var ap1 = multiply(op1, op2);
  // console.log("ap1 "ap1);
  // var ap2 = multiply(op3, op4):
  // console.log("ap2 "ap2);
  // var mul10 = multiply(ap1, ap2);
  // console.log("multiply("+ap1+", "+ap2+" = " +mul10);
  // console.log(mul10);

  var mul10 = multiply(
                        multiply(
                                  add(1, 2), 
                                  subtract(8,4) 
                                  ), 
                        multiply(
                                  add(
                                      test_add_1(), 
                                      test_subtract_1() 
                                      ), 
                                  subtract(
                                      test_add_2(), 
                                      test_subtract_2() 
                                      )
                                  )
                        );
  console.log(mul10);

// }());