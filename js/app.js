(function() {


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
  //NONE OF FUNCTIONS LOGGING RESULT IN CONSOLE
  //ONLY 'TEST' APPEARS WHEN RUN NODE APP.JS
  //WHY?????

  //STEP 6
  function test_add_1() {
    var test_add_1 = add(5,4);
    console.log(test_add_1);
  }

  //STEP 7
  function test_add_2() {
    var ta1 = 5;
    var ta2 = 4;
    var ta3 = 3;
    var addFunc = add(5,4);
    return ta3 + addFunc;
    console.log(ta3 + addFunc);
  }

  //STEP 8
  function test_subtract_1() {
    var sub1 = 5;
    var sub2 = 4;
    // why function subtract diff color and doesnt
    //subtract doesn't change to blue when function is
    //is not present.
    var test_subtract_1 = subtract(5, 4);
    return test_subtract_1;
    console.log(test_subtract_1);
  }

  //STEP 9
  function test_subtract_2 () {
    var ts1 = 5;
    var ts2 = 4;
    var ts3 = 3;
    // why function subtract diff color and doesnt
    //subtract doesn't change to blue when function is
    //is not present.
    var ts4 = subtract(5,4);
    return ts3 - ts4;
    console.log(ts3 - ts4);
  }

  //STEP 10-1
  //why do we have to create variable for it to work
  //shouldnt it just calc when call function with add(1,2)?
  //could be complex when more variables involved
  var add1 = add(1, 2);
  console.log(add1);
  
  //STEP 10-2
  var add21 = add(2,3);
  var add22 = add(1, add21);
  console.log(add22);

  //STEP 10-3
  var add31 = 
  add(add(1, 2), add(3, 4));
  console.log(add);

  //STEP 10-4
  subtract(10, 9);
  console.log(subtract);

  //STEP 10-5
  subtract(10, subtract(19, 10));
  console.log(subtract);

  //STEP 10-6
  subtract(subtract(20, 10), subtract(19, 10));
  console.log(subtract);

  //STEP 10-7
  multiply(2, 3);
  console.log(multiply);

  //STEP 10-8
  multiply(2, multiply(1, 3));
  console.log(multiply);

  //STEP 10-9
  multiply(multiply(1, 2), multiply(3, 4));
  console.log(multiply);

  //STEP 10-10
  multiply(multiply(add(1, 3), subtract(8,4)), multiply(add(test_add_1, test_subtract_1), subtract(test_add_2, test_subtract_2)));


  console.log('test');
}());