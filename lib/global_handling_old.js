// File Created on 07/07/2020 by Prachiti Garge
// File Edited on 07/08/2020 by Prachiti Garge: Refactored code and completed logic
// File Edited on 07/09/2020 by Kevin Dong: Moved str_lower, str_upper, and calc_status and renamed it

// Handles things like global array, nesting, and accumulation

// More variables for calculations
let num, substring_to_alter, val;
let reg = /[\+\-×÷]/g;

// TODO error handling
// TODO testing
// TODO refactor code
// TODO % sign
function CurrStatus(up, down, arr){
  // This string is shown in the upper part of the display
// "8+6+sqr(sqr(5))"
  this.upper = up;
  // This is the calculation shown in the lower part of the display
// "625"
  this.lower = down;
  // This array has elements with only numbers and +-*/ passed to the get the value
// ["8","+","6","+","625"]
  this.exp = arr;
}
let displayStr = new CurrStatus("","",[]);
let display_upper_value = "";
let display_value = "";
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
    displayStr.exp.push(display_value);
  }
  // Check if the previous button pressed was +-×÷
  if (reg.test(displayStr.exp[displayStr.exp.length - 1])) {
    // If yes, then accumulation
    num = display_value;
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
  displayStr.upper = display_upper_value;
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
      substring_to_alter = display_value;
    } else {
      // else apply function on last numerical value
      substring_to_alter = displayStr.upper.slice(indices[indices.length - 1] + 1, displayStr.upper.length);
      displayStr.upper = displayStr.upper.slice(0,indices[indices.length - 1]);
    }
  } else { // If +-×÷ is not present in upper string
    substring_to_alter = displayStr.upper.slice(0, displayStr.upper.length);
    displayStr.upper = "";
  }
}
// Created on 07/08/2020 by Prachiti Garge
function commonPartThree() {
  // Need to update upper and lower displays
  display_upper_value = displayStr.upper;
  display_value = displayStr.lower;
}

// Created on 07/09/2020 by Prachiti Garge
// Event handler function for %
function percentFunc() {
  // Any number in display and nothing in upper display, %, 0 in both upper and lower display
  // If +-×÷ is not present in upper string, %, 0 in both upper and lower display
  if (!reg.test(display_upper_value)){
    displayStr.upper = "0";
    displayStr.lower = "0";

  }else {
    if (/[×÷]/.test(displayStr.exp[displayStr.exp.length - 1])) {

      /* If ×÷ is the last thing in upper display,
       * concatenate (display_value)/100 into the upper display,
       * and display_value = (display_value)/100
       */
      displayStr.upper = displayStr.upper + display_value/100;
      displayStr.lower = "\"" + display_value/100 + "\"";
      displayStr.exp.push(displayStr.lower);
    }else if (/[×÷]/.test(displayStr.exp[displayStr.exp.length - 2])){

      /* If ×÷ is present, but not last in upper display,
       * replace part after ×÷ to (value of part/100) in upper display,
       * and commonPartThree the same calculation in lower display
       */
      displayStr.exp[displayStr.exp.length - 1] = "\"" + displayStr.exp[displayStr.exp.length - 1]/100 + "\"";
      displayStr.lower = displayStr.exp[displayStr.exp.length - 1];
      // Swap last part of displayStr.upper
      result = undefined;
      indices = [];
      // We need last numerical value
      while ((result = reg.exec(displayStr.upper))) {
        indices.push(result.index);
      }
      displayStr.upper = displayStr.upper.slice(0,indices[indices.length - 1]);
      displayStr.upper = displayStr.upper + displayStr.lower;
    }else if (/[\+\-]/.test(displayStr.exp[displayStr.exp.length - 1])) {

      /* If +- is the last thing in upper display,
       * concatenate (display_value*x/100) into upper display,
       * and display_value = (display_value*x)/100
       */
      let prev = arithmetic_expression_parsing(displayStr.exp.slice(0,displayStr.exp.length-1));
      displayStr.lower = prev*display_value/100;
      displayStr.upper += displayStr.lower;
      displayStr.exp.push(displayStr.lower);
    }else {

      /* If +- is present, but not last in upper display,
       * replace part after +- to (value of part*value of exp before sign/100) in upper display,
       * and commonPartThree the same calculation in lower display
       */
      let prev = arithmetic_expression_parsing(displayStr.exp.slice(0,displayStr.exp.length-2));
      displayStr.lower = prev*display_value/100;
      // Swap last part of displayStr.upper
      result = undefined;
      indices = [];
      // We need last numerical value
      while ((result = reg.exec(displayStr.upper))) {
        indices.push(result.index);
      }
      displayStr.upper = displayStr.upper.slice(0,indices[indices.length - 1]);
      displayStr.upper += displayStr.lower;
      displayStr.exp.pop();
      displayStr.exp.push(displayStr.lower);
    }

  }
  commonPartThree();
}


// Created on 07/07/2020 by Prachiti Garge
// Event handler function for pi
function piFunc() {
  // displayStr.lower should show Math.PI
  displayStr.lower = Math.PI;
  display_value = displayStr.lower;

}

// Created on 07/07/2020 by Prachiti Garge
// Event handler function for e
function eFunc() {
  // displayStr.lower should show Math.E
  displayStr.lower = Math.E;
  display_value = displayStr.lower;
}

// Created on 07/08/2020 by Prachiti Garge
// Event handler function for addition
function plusFunc() {
  displayStr.upper = display_upper_value;
  if(displayStr.upper == ""){
    displayStr.upper = display_value;
    displayStr.exp.push(displayStr.upper);
    display_upper = display_value;
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
  display_upper_value = displayStr.upper;
}

// Created on 07/08/2020 by Prachiti Garge
// Event handler function for subtraction
function minusFunc() {
  displayStr.upper = display_upper_value;
  if(displayStr.upper == ""){
    displayStr.upper = display_value;
    displayStr.exp.push(displayStr.upper);
    display_upper = display_value;
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
  display_upper_value = displayStr.upper;
}

// Created on 07/08/2020 by Prachiti Garge
// Event handler function for multiplication
function multiplyFunc() {
  displayStr.upper = display_upper_value;
  if(displayStr.upper == ""){
    displayStr.upper = display_value;
    displayStr.exp.push(displayStr.upper);
    display_upper = display_value;
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
  display_upper_value = displayStr.upper;

}

// Created on 07/08/2020 by Prachiti Garge
// Event handler function for division
function divideFunc() {
  displayStr.upper = display_upper_value;
  if(displayStr.upper == ""){
    displayStr.upper = display_value;
    displayStr.exp.push(displayStr.upper);
    display_upper = display_value;
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
  display_upper_value = displayStr.upper;
}

// For testing

function getAngles (){
  return 'DEG';
}
let func_arr_1 = [sinFunc(), tanFunc(), sqrtFunc(), piFunc(), percentFunc(), minusFunc()];
let func_1 = ["sin","tan","sqrt","pi","percent","minus"];
for(i=0;i<func_arr_1.length;i++){
  display_upper_value = ""
  displayStr.upper = ""
  displayStr.lower = "6"
  display_value = "6"
  displayStr.exp = [];
  console.log(func_1[i]);
  console.log(display_upper_value);
  func_arr_1[i];
  console.log("display_upper_value = " + display_upper_value);
  console.log("displayStr.upper = " + displayStr.upper);
  console.log("displayStr.lower = " + displayStr.lower);
  console.log("display_value = " + display_value);
  console.log("displayStr.exp = " + displayStr.exp);
}

let func_arr_2 = [cosFunc(), arctanFunc(), invFunc(), logFunc(), e_to_xFunc(), eFunc()];
let func_2 = ["cos", "arctan", "inv", "log", "e_to_x", "eFunc"];
for(i=0;i<func_arr_2.length;i++){
  display_upper_value = "1/5"
  displayStr.upper = "1/5"
  displayStr.lower = "0.2"
  display_value = "0.2"
  displayStr.exp = ["0.2"]
  console.log(func_2[i]);
  console.log(display_upper_value);
  func_arr_2[i];
  console.log("display_upper_value = " + display_upper_value);
  console.log("displayStr.upper = " + displayStr.upper);
  console.log("displayStr.lower = " + displayStr.lower);
  console.log("display_value = " + display_value);
  console.log("displayStr.exp = " + displayStr.exp);
}

let func_arr_3 = [arcsinFunc(), sqrFunc(), absFunc(), lnFunc(), percentFunc(), plusFunc(), multiplyFunc()];
let func_3 = ["arcsin", "sqr", "abs", "ln", "percent", "plus", "multiply"];
for(i=0;i<func_arr_3.length;i++){
  display_upper_value = "0.2-"
  displayStr.upper = "0.2-"
  displayStr.lower = "0.2"
  display_value = "0.2"
  displayStr.exp = ["0.2" , "-"]
  console.log(func_3[i]);
  console.log(display_upper_value);
  func_arr_3[i];
  console.log("display_upper_value = " + display_upper_value);
  console.log("displayStr.upper = " + displayStr.upper);
  console.log("displayStr.lower = " + displayStr.lower);
  console.log("display_value = " + display_value);
  console.log("displayStr.exp = " + displayStr.exp);
}

let func_arr_4 = [arccosFunc(),ten_to_xFunc(),invFunc(),absFunc(),logFunc(),percentFunc(),divideFunc()];
let func_4 = ["arccos","ten_to_x","inv","abs","log","percent","divide"];
for(i=0;i<func_arr_4.length;i++){
  display_upper_value = "log(45)×"
  displayStr.upper = "log(45)×"
  displayStr.lower = "1.6532125137753436793763169117857"
  display_value = "1.6532125137753436793763169117857"
  displayStr.exp = [ "1.6532125137753436793763169117857", "×"]
  console.log(func_4[i]);
  console.log(display_upper_value);
  func_arr_4[i];
  console.log("display_upper_value = " + display_upper_value);
  console.log("displayStr.upper = " + displayStr.upper);
  console.log("displayStr.lower = " + displayStr.lower);
  console.log("display_value = " + display_value);
  console.log("displayStr.exp = " + displayStr.exp);
}

let func_arr_5 = [percentFunc(),invFunc(),multiplyFunc(),piFunc()];
let func_5 = ["percent","inv","multiply","pi"];
for(i=0;i<func_arr_5.length;i++){
  display_upper_value = "27+e^(log(5))"
  displayStr.upper = "27+e^(log(5))"
  displayStr.lower = "2.011679618732933671079071995709"
  display_value = "2.011679618732933671079071995709"
  displayStr.exp = ["27","+","2.011679618732933671079071995709"]
  console.log(func_5[i]);
  console.log(display_upper_value);
  func_arr_5[i];
  console.log("display_upper_value = " + display_upper_value);
  console.log("displayStr.upper = " + displayStr.upper);
  console.log("displayStr.lower = " + displayStr.lower);
  console.log("display_value = " + display_value);
  console.log("displayStr.exp = " + displayStr.exp);
}

let func_arr_6 = [percentFunc(),lnFunc(),tanFunc()];
let func_6 = ["percent","ln","tan"];
for(i=0;i<func_arr_6.length;i++){
  display_upper_value = "84-tan(1/5)÷"
  displayStr.upper = "84-tan(1/5)÷"
  displayStr.lower = "0.00349067268159625031851568605602"
  display_value = "0.00349067268159625031851568605602"
  displayStr.exp = ["84","-","0.00349067268159625031851568605602"]
  console.log(func_6[i]);
  console.log(display_upper_value);
  func_arr_6[i];
  console.log("display_upper_value = " + display_upper_value);
  console.log("displayStr.upper = " + displayStr.upper);
  console.log("displayStr.lower = " + displayStr.lower);
  console.log("display_value = " + display_value);
  console.log("displayStr.exp = " + displayStr.exp);
}
// Pasted Kevin's code below for testing purposes
let signs = ["mod", "logyx", "^", "×", "÷", "+", "–"];
function arithmetic_expression_parsing(input) {
  let op = {
    value1: null,
    sign: null,
    value2: null
  };
  let exp = exp_gen(input);
  console.log(exp);
  for (let sign of signs) {
    if (!exp.includes(sign)) continue;
    for (let i = 0; i < exp.length; i++) {
      if (exp[i] === sign) {
        op.value1 = exp[i - 1];
        op.sign = exp[i];
        op.value2 = exp[i + 1];
        exp.splice(i - 1, 3, arithmetic_operator(op));
        i--;
      }
    }
  }
  return exp[0];
}
/* Created on 07/06/2020 by Kevin Dong
 * Creates parsable array for expression */
function exp_gen(input) {
  let exp = [];
  if (!input.some(val => signs.includes(val))) {
    exp.push(parseFloat(input.join("")));
    return exp;
  } else {
    for (let i = 0; i < input.length; i++) {
      if (signs.includes(input[i])) {
        exp.push(parseFloat(input.splice(0, i)
          .join("")));
        exp.push(input.shift());
        exp = exp.concat(exp_gen(input));
      }
    }
    return exp;
  }
}
