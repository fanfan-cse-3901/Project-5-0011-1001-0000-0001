// File Created on 07/07/2020 by Prachiti Garge
// File Edited on 07/08/2020 by Prachiti Garge: Refactored code and completed logic

// File Edited on 07/09/2020 by Kevin Dong: Moved str_lower, str_upper, and calc_status

// Handles things like global array, nesting, and accumulation

// More variables for calculations
let num, substring_to_alter, val;
let reg = /[\+\-×÷]/g;

// TODO error handling
// TODO testing
// TODO refactor code
// TODO % sign

// TODO need proper connection to buttons for these
document.querySelector('sin')
  .addEventListener("click", sinFunc);
document.querySelector('cos')
  .addEventListener("click", cosFunc);
document.querySelector('tan')
  .addEventListener("click", tanFunc);
document.querySelector('arcsin')
  .addEventListener("click", arcsinFunc);
document.querySelector('arccos')
  .addEventListener("click", arccosFunc);
document.querySelector('arctan')
  .addEventListener("click", arctanFunc);
document.querySelector('x^2')
  .addEventListener("click", sqrFunc);
document.querySelector('x^(1/2)')
  .addEventListener("click", sqrtFunc);
document.querySelector('1/x')
  .addEventListener("click", invFunc);
document.querySelector('|x|')
  .addEventListener("click", absFunc);
document.querySelector('log')
  .addEventListener("click", logFunc);
document.querySelector('ln')
  .addEventListener("click", lnFunc);
document.querySelector('pi')
  .addEventListener("click", piFunc);
document.querySelector('e')
  .addEventListener("click", eFunc);
document.querySelector('n!')
  .addEventListener("click", factFunc);
document.querySelector('10^x')
  .addEventListener("click", ten_to_xFunc);
document.querySelector('e^x')
  .addEventListener("click", e_to_xFunc);
document.querySelector('+')
  .addEventListener("click", plusFunc);
document.querySelector('-')
  .addEventListener("click", minusFunc);
document.querySelector('×')
  .addEventListener("click", multiplyFunc);
document.querySelector('÷')
  .addEventListener("click", divideFunc);
document.querySelector('%')
  .addEventListener("click", percentFunc);

// Array to hold class names
let arr_class = [];

// Array to hold the value attribute values
let arr_value_name = [];

// Array to hold part 1 of the functions
let arrFunc_part_one = [];

// Array to hold part 2 of the functions
let arrFunc_part_two = [];


// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for sin
function sinFunc() {
  // This part of code is explained in the following function
  commonPartOne();
  // Apply func on it, check and replace
  if (getAngles == 'DEG') {
    num = num * (Math.PI / 180);
  }
  val = Math.sin(num);
  // This part of code is explained in the following function
  commonPartTwo();
  // Prepare upper display string
  displayStr.upper = displayStr.upper + "sin(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  commonPartThree();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for cos
function cosFunc() {
  // This part of code is explained in the following function
  commonPartOne();
  // Apply func on it, check and replace
  if (getAngles == 'DEG') {
    num = num * (Math.PI / 180);
  }
  val = Math.cos(num);
  // This part of code is explained in the following function
  commonPartTwo();
  // Prepare upper display string
  displayStr.upper = displayStr.upper + "cos(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  commonPartThree();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for tan
function tanFunc() {
  // This part of code is explained in the following function
  commonPartOne();
  // Apply func on it, check and replace
  if (getAngles == 'DEG') {
    num = num * (Math.PI / 180);
  }
  val = Math.tan(num);
  // This part of code is explained in the following function
  commonPartTwo();
  // Prepare upper display string
  displayStr.upper = displayStr.upper + "tan(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  commonPartThree();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for arcsin
function arcsinFunc() {
  // This part of code is explained in the following function
  commonPartOne();
  // Apply func on it, check and replace
  if (getAngles == 'DEG') {
    num = num * (Math.PI / 180);
  }
  val = Math.asin(num);
  // This part of code is explained in the following function
  commonPartTwo();
  // Prepare upper display string
  displayStr.upper = displayStr.upper + "arcsin(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  commonPartThree();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for arccos
function arccosFunc() {
  // This part of code is explained in the following function
  commonPartOne();
  // Apply func on it, check and replace
  if (getAngles == 'DEG') {
    num = num * (Math.PI / 180);
  }
  val = Math.acos(num);
  // This part of code is explained in the following function
  commonPartTwo();
  // Prepare upper display string
  displayStr.upper = displayStr.upper + "arccos(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  commonPartThree();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for arctan
function arctanFunc() {
  // This part of code is explained in the following function
  commonPartOne();
  // Apply func on it, check and replace
  if (getAngles == 'DEG') {
    num = num * (Math.PI / 180);
  }
  val = Math.atan(num);
  // This part of code is explained in the following function
  commonPartTwo();
  // Prepare upper display string
  displayStr.upper = displayStr.upper + "arctan(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  commonPartThree();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for sqr
function sqrFunc() {
  // This part of code is explained in the following function
  commonPartOne();
  // Apply func on it, check and replace
  val = num ** 2;
  // This part of code is explained in the following function
  commonPartTwo();
  // Prepare upper display string
  displayStr.upper = displayStr.upper + "sqr(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  commonPartThree();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for sqrt
function sqrtFunc() {
  // This part of code is explained in the following function
  commonPartOne();
  // Apply func on it, check and replace
  val = Math.sqrt(num);
  // This part of code is explained in the following function
  commonPartTwo();
  // Prepare upper display string
  displayStr.upper = displayStr.upper + "sqrt(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  commonPartThree();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/07/2020 by Prachiti Garge: Refactored code
// Event handler function for inv
function invFunc() {
  // This part of code is explained in the following function
  commonPartOne();
  // Apply func on it, check and replace
  val = 1 / num;
  // This part of code is explained in the following function
  commonPartTwo();
  // Prepare upper display string
  displayStr.upper = displayStr.upper + "inv(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  commonPartThree();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for abs
function absFunc() {
  // This part of code is explained in the following function
  commonPartOne();
  // Apply func on it, check and replace
  val = Math.abs(num);
  // This part of code is explained in the following function
  commonPartTwo();
  // Prepare upper display string
  displayStr.upper = displayStr.upper + "abs(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  commonPartThree();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for factorial
function factFunc() {
  // This part of code is explained in the following function
  commonPartOne();
  // Apply func on it, check and replace
  function fact(x) {
    return (x != 1) ? x * fact(x - 1) : 1;
  }
  val = fact(num);
  // This part of code is explained in the following function
  commonPartTwo();
  // Prepare upper display string
  displayStr.upper = displayStr.upper + "fact(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  commonPartThree();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for log
function logFunc() {
  // This part of code is explained in the following function
  commonPartOne();
  // Apply func on it, check and replace
  val = Math.log10(num);
  // This part of code is explained in the following function
  commonPartTwo();
  // Prepare upper display string
  displayStr.upper = displayStr.upper + "log(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  commonPartThree();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for ln
function lnFunc() {
  // This part of code is explained in the following function
  commonPartOne();
  // Apply func on it, check and replace
  val = Math.log(num);
  // This part of code is explained in the following function
  commonPartTwo();
  // Prepare upper display string
  displayStr.upper = displayStr.upper + "ln(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  commonPartThree();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for e_to_x
function e_to_xFunc() {
  // This part of code is explained in the following function
  commonPartOne();
  // Apply func on it, check and replace
  val = Math.exp(num);
  // This part of code is explained in the following function
  commonPartTwo();
  // Prepare upper display string
  displayStr.upper = displayStr.upper + "e^(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  commonPartThree();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for 10_to_x
function ten_to_xFunc() {
  // This part of code is explained in the following function
  commonPartOne();
  // Apply func on it, check and replace
  val = Math.pow(10, num);
  // This part of code is explained in the following function
  commonPartTwo();
  // Prepare upper display string
  displayStr.upper = displayStr.upper + "10^(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  commonPartThree();
}

/* This set of common_part functions refactor the common code to most operation buttons
 *  and are called when needed in the function.
 */
// Created on 07/08/2020 by Prachiti Garge
function commonPartOne() {
  // Get the last numerical element from displayStr.exp
  if (displayStr.exp.length == 0) {
    displayStr.exp.push(display.value);
  }
  // Check if the previous button pressed was +-×÷
  if (reg.test(displayStr.exp[displayStr.exp.length - 1])) {
    // If yes, then accumulation
    num = display.value;
  } else {
    // If no, use
    num = displayStr.exp.pop();
  }

}
// Created on 07/08/2020 by Prachiti Garge
function commonPartTwo() {
  // Here parser takes an array as input which has +-*/ or complete numbers with decimals as elements
  displayStr.exp.push("\"" + val + "\"");
  displayStr.lower = val;
  displayStr.upper = display_upper.value;
  // Update display by adding sqr() around last number by matching it to regex- either at start of the string or after +-*/
  // Not last index
  // If +-×÷ is present in upper string
  if (reg.test(displayStr.upper)) {
    let result, indices = [];
    // We need last numerical value
    while ((result = reg.exec(displayStr.upper))) {
      indices.push(result.index);
    }
    // If +-×÷ is last, then apply function on value of expression before the sign
    if (indices[indices.length - 1] == displayStr.upper.length - 1) {
      substring_to_alter = display.value;
    } else {
      // else apply function on last numerical value
      substring_to_alter = displayStr.upper.slice(indices[indices.length - 1] + 1, displayStr.upper.length);
    }
  } else { // If +-×÷ is not present in upper string
    substring_to_alter = displayStr.upper.slice(0, displayStr.upper.length);
  }
}
// Created on 07/08/2020 by Prachiti Garge
function commonPartThree() {
  // Need to update upper and lower displays
  display_upper.value = displayStr.upper;
  display.value = displayStr.lower;
}

// Created on 07/09/2020 by Prachiti Garge
// Event handler function for %
function percentFunc() {
  // Any number in display and nothing in upper display, %, 0 in both upper and lower display
  // If +-×÷ is not present in upper string, %, 0 in both upper and lower display
  if (!reg.test(display_upper.value)){
    displayStr.upper = "0";
    displayStr.lower = "0";

  }else {
    if (/[×÷]/.test(displayStr.exp[displayStr.exp.length - 1])) {

      /* If ×÷ is the last thing in upper display,
       * concatenate (display.value)/100 into the upper display,
       * and display.value = (display.value)/100
       */
      displayStr.upper = displayStr.upper + display.value/100;
      displayStr.lower = "\"" + display.value/100 + "\"";
      displayStr.exp.push(displayStr.lower);
    }else if (/[×÷]/.test(displayStr.exp[displayStr.exp.length - 2])){

      /* If ×÷ is present, but not last in upper display,
       * replace part after ×÷ to (value of part/100) in upper display,
       * and show the same calculation in lower display
       */
      displayStr.exp[displayStr.exp.length - 1] = "\"" + displayStr.exp[displayStr.exp.length - 1]/100 + "\"";
      displayStr.lower = displayStr.exp[displayStr.exp.length - 1];
      // Swap last part of displayStr.upper

    }else if (/[\+\-]/.test(displayStr.exp[displayStr.exp.length - 1])) {

      /* If +- is the last thing in upper display,
       * concatenate (display.value*x/100) into upper display,
       * and display.value = (display.value*x)/100
       */
    }else {

      /* If +- is present, but not last in upper display,
       * replace part after +- to (value of part*value of last number before sign/100) in upper display,
       * and show the same calculation in lower display
       */
    }

  }
  display_upper.value = displayStr.upper;
  display.value = displayStr.lower;
}

// Created on 07/07/2020 by Prachiti Garge
// Event handler function for pi
function piFunc() {
  // displayStr.lower should show Math.PI
  displayStr.lower = Math.PI;
  display.value = displayStr.lower;

}

// Created on 07/07/2020 by Prachiti Garge
// Event handler function for e
function eFunc() {
  // displayStr.lower should show Math.E
  displayStr.lower = Math.E;
  display.value = displayStr.lower;
}

// Created on 07/08/2020 by Prachiti Garge
// Event handler function for addition
function plusFunc() {
  displayStr.upper = display_upper.value;
  if(displayStr.upper == ""){
    displayStr.upper = display.value;
    displayStr.exp.push(displayStr.upper);
    display_upper = display.value;
  }
  // If previous sign is one of the four, swap it in displayStr.exp, displayStr.upper and display_upper
  // Check for it
  if (reg.test(displayStr.exp[displayStr.exp.length - 1])) {
    displayStr.exp.pop();
  }
  if (reg.test(displayStr.upper[displayStr.upper.length - 1])) {
    displayStr.upper = displayStr.upper.substring(0, displayStr.upper.length);
  }
  // displayStr.exp should be updated
  displayStr.exp.push("+");
  // displayStr.upper and display_upper should be updated
  displayStr.upper = displayStr.upper + "+";
  display_upper.value = displayStr.upper;
}

// Created on 07/08/2020 by Prachiti Garge
// Event handler function for subtraction
function minusFunc() {
  displayStr.upper = display_upper.value;
  if(displayStr.upper == ""){
    displayStr.upper = display.value;
    displayStr.exp.push(displayStr.upper);
    display_upper = display.value;
  }
  // If previous sign is one of the four, swap it in displayStr.exp, displayStr.upper and display_upper
  // Check for it
  if (reg.test(displayStr.exp[displayStr.exp.length - 1])) {
    displayStr.exp.pop();
  }
  if (reg.test(displayStr.upper[displayStr.upper.length - 1])) {
    displayStr.upper = displayStr.upper.substring(0, displayStr.upper.length);
  }
  // displayStr.exp should be updated
  displayStr.exp.push("-");
  // displayStr.upper and display_upper should be updated
  displayStr.upper = displayStr.upper + "-";
  display_upper.value = displayStr.upper;
}

// Created on 07/08/2020 by Prachiti Garge
// Event handler function for multiplication
function multiplyFunc() {
  displayStr.upper = display_upper.value;
  if(displayStr.upper == ""){
    displayStr.upper = display.value;
    displayStr.exp.push(displayStr.upper);
    display_upper = display.value;
  }
  // If previous sign is one of the four, swap it in displayStr.exp, displayStr.upper and display_upper
  // Check for it
  if (reg.test(displayStr.exp[displayStr.exp.length - 1])) {
    displayStr.exp.pop();
  }
  if (reg.test(displayStr.upper[displayStr.upper.length - 1])) {
    displayStr.upper = displayStr.upper.substring(0, displayStr.upper.length);
  }
  // displayStr.exp should be updated
  displayStr.exp.push("×");
  // displayStr.upper and display_upper should be updated
  displayStr.upper = displayStr.upper + "×";
  display_upper.value = displayStr.upper;

}

// Created on 07/08/2020 by Prachiti Garge
// Event handler function for division
function divideFunc() {
  displayStr.upper = display_upper.value;
  if(displayStr.upper == ""){
    displayStr.upper = display.value;
    displayStr.exp.push(displayStr.upper);
    display_upper = display.value;
  }
  // If previous sign is one of the four, swap it in displayStr.exp, displayStr.upper and display_upper
  // Check for it
  if (reg.test(displayStr.exp[displayStr.exp.length - 1])) {
    displayStr.exp.pop();
  }
  if (reg.test(displayStr.upper[displayStr.upper.length - 1])) {
    displayStr.upper = displayStr.upper.substring(0, displayStr.upper.length);
  }
  // displayStr.exp should be updated
  displayStr.exp.push("÷");
  // displayStr.upper and display_upper should be updated
  displayStr.upper = displayStr.upper + "÷";
  display_upper.value = displayStr.upper;
}

// For testing

function getAngles (){
  return 'DEG';
}
let func_arr_1 = [sinFunc(), tanFunc(), sqrtFunc(), piFunc(), percentFunc(), minusFunc()];
for(i=0;i<func_arr_1.length;i++){
  display_upper.value = ""
  displayStr.upper = ""
  displayStr.lower = ""
  display.value = ""
  displayStr.exp = []
  console.log(func_arr_1[i].name)
  console.log(display_upper.value);
  func_arr_1[i];
  console.log("display_upper.value = " + display_upper.value);
  console.log("displayStr.upper = " + displayStr.upper);
  console.log("displayStr.lower = " + displayStr.lower);
  console.log("display.value = " + display.value);
  console.log("displayStr.exp = " + displayStr.exp);
}

let func_arr_2 = [cosFunc(), arctanFunc(), invFunc(), logFunc(), factFunc(), e_to_xFunc(), eFunc()];
for(i=0;i<func_arr_2.length;i++){
  display_upper.value = ""
  displayStr.upper = ""
  displayStr.lower = ""
  display.value = ""
  displayStr.exp = []
  console.log(func_arr_2[i].name)
  console.log(display_upper.value);
  func_arr_2[i];
  console.log("display_upper.value = " + display_upper.value);
  console.log("displayStr.upper = " + displayStr.upper);
  console.log("displayStr.lower = " + displayStr.lower);
  console.log("display.value = " + display.value);
  console.log("displayStr.exp = " + displayStr.exp);
}

let func_arr_3 = [arcsinFunc(), sqrFunc(), absFunc(), lnFunc(), percentFunc(), plusFunc(), multiplyFunc()];
for(i=0;i<func_arr_3.length;i++){
  display_upper.value = ""
  displayStr.upper = ""
  displayStr.lower = ""
  display.value = ""
  displayStr.exp = []
  console.log(func_arr_3[i].name)
  console.log(display_upper.value);
  func_arr_3[i];
  console.log("display_upper.value = " + display_upper.value);
  console.log("displayStr.upper = " + displayStr.upper);
  console.log("displayStr.lower = " + displayStr.lower);
  console.log("display.value = " + display.value);
  console.log("displayStr.exp = " + displayStr.exp);
}

let func_arr_4 = [arccosFunc(),ten_to_xFunc(),invFunc(),absFunc(),logFunc(),percentFunc(),divideFunc()];
for(i=0;i<func_arr_4.length;i++){
  display_upper.value = ""
  displayStr.upper = ""
  displayStr.lower = ""
  display.value = ""
  displayStr.exp = []
  console.log(func_arr_4[i].name)
  console.log(display_upper.value);
  func_arr_4[i];
  console.log("display_upper.value = " + display_upper.value);
  console.log("displayStr.upper = " + displayStr.upper);
  console.log("displayStr.lower = " + displayStr.lower);
  console.log("display.value = " + display.value);
  console.log("displayStr.exp = " + displayStr.exp);
}

let func_arr_5 = [percentFunc(),invFunc(),multiplyFunc(),piFunc()];
for(i=0;i<func_arr_5.length;i++){
  display_upper.value = ""
  displayStr.upper = ""
  displayStr.lower = ""
  display.value = ""
  displayStr.exp = []
  console.log(func_arr_5[i].name)
  console.log(display_upper.value);
  func_arr_5[i];
  console.log("display_upper.value = " + display_upper.value);
  console.log("displayStr.upper = " + displayStr.upper);
  console.log("displayStr.lower = " + displayStr.lower);
  console.log("display.value = " + display.value);
  console.log("displayStr.exp = " + displayStr.exp);
}

let func_arr_6 = [percentFunc(),lnFunc(),tanFunc()];
for(i=0;i<func_arr_6.length;i++){
  display_upper.value = ""
  displayStr.upper = ""
  displayStr.lower = ""
  display.value = ""
  displayStr.exp = []
  console.log(func_arr_6[i].name)
  console.log(display_upper.value);
  func_arr_6[i];
  console.log("display_upper.value = " + display_upper.value);
  console.log("displayStr.upper = " + displayStr.upper);
  console.log("displayStr.lower = " + displayStr.lower);
  console.log("display.value = " + display.value);
  console.log("displayStr.exp = " + displayStr.exp);
}