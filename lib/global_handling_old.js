// File Created on 07/07/2020 by Prachiti Garge
// File Edited on 07/08/2020 by Prachiti Garge: Refactored code and completed logic
// File Edited on 07/09/2020 by Kevin Dong: Moved str_lower, str_upper, and calc_status and renamed it

// Handles things like global array, nesting, and accumulation

// More variables for calculations
let num, substring_to_alter, val;
let reg = /[\+\-×÷]/g;

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
// let displayStr.value = "";
// let display.value = "";

let tempOp = document.getElementsByName("operations");
tempOp[tempOp.indexOf('+')].addEventListener("click", plusFunc);
tempOp[tempOp.indexOf('-')].addEventListener("click", minusFunc);
tempOp[tempOp.indexOf('×')].addEventListener("click", multiplyFunc);
tempOp[tempOp.indexOf('÷')].addEventListener("click", divideFunc);

let tempTrig = document.getElementsByName("trig");
tempTrig[tempTrig.indexOf('sin')].addEventListener("click", sinFunc);
tempTrig[tempTrig.indexOf('cos')].addEventListener("click", cosFunc);
tempTrig[tempTrig.indexOf('tan')].addEventListener("click", tanFunc);
tempTrig[tempTrig.indexOf('arcsin')].addEventListener("click", arcsinFunc);
tempTrig[tempTrig.indexOf('arccos')].addEventListener("click", arccosFunc);
tempTrig[tempTrig.indexOf('arctan')].addEventListener("click", arctanFunc);

let tempExtra = document.getElementsByName("extra");
tempExtra[tempExtra.indexOf('x^2')].addEventListener("click", sqrFunc);
tempExtra[tempExtra.indexOf('x^(1/2)')].addEventListener("click", sqrtFunc);
tempExtra[tempExtra.indexOf('1/x')].addEventListener("click", invFunc);
tempExtra[tempExtra.indexOf('|x|')].addEventListener("click", absFunc);
tempExtra[tempExtra.indexOf('pi')].addEventListener("click", piFunc);
tempExtra[tempExtra.indexOf('e')].addEventListener("click", eFunc);

let tempExp = document.getElementsByName("exp");
tempExp[tempExp.indexOf('log')].addEventListener("click", logFunc);
tempExp[tempExp.indexOf('ln')].addEventListener("click", lnFunc);
tempExp[tempExp.indexOf('10^x')].addEventListener("click", ten_to_xFunc);
tempExp[tempExp.indexOf('e^x')].addEventListener("click", e_to_xFunc);

let tempOther = document.getElementsByName("other");
tempOther[tempOther.indexOf('%')].addEventListener("click", percentFunc);

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for sin
function sinFunc() {
  // This part of code is explained in the following function
  commonPartOne();
  // Apply func on it, check and replace
  if (getAngle()== 'DEG') {
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
  if (getAngle()== 'DEG') {
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
  if (getAngle()== 'DEG') {
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

  val = Math.asin(num);
  if (getAngle()== 'DEG') {
    val = val * (180 / Math.PI);
  }
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
  val = Math.acos(num);
  if (getAngle()== 'DEG') {
    val = val * (180 / Math.PI);
  }
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
  val = Math.atan(num);
  if (getAngle()== 'DEG') {
    val = val * (180 / Math.PI);
  }

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
  displayStr.upper = displayStr.upper + "1/(" + substring_to_alter + ")";
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
    displayStr.value = display.value;
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
  displayStr.exp.push(val.toString());
  displayStr.lower = val;
  displayStr.upper = displayStr.value;
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
      substring_to_alter = displayStr.upper.slice(indices[indices.length - 1] + 1, displayStr.upper.length-1);
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
  displayStr.value = displayStr.upper;
  display.value = displayStr.lower;
}

// Created on 07/09/2020 by Prachiti Garge
// Event handler function for %
function percentFunc() {
  // Any number in display and nothing in upper display, %, 0 in both upper and lower display
  // If +-×÷ is not present in upper string, %, 0 in both upper and lower display
  if (!reg.test(displayStr.value)){
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
       * and commonPartThree the same calculation in lower display
       */
      displayStr.exp[displayStr.exp.length - 1] = "\"" + displayStr.exp[displayStr.exp.length - 1]/100 + "\"";
      displayStr.lower = displayStr.exp[displayStr.exp.length - 1];
      // Swap last part of displayStr.upper
      let res1, ind1 = [];
      // We need last numerical value
      while ((res = reg.exec(displayStr.upper))) {
        ind1.push(res.index);
      }
      displayStr.upper = displayStr.upper.slice(0,ind1[ind1.length - 1]);
      displayStr.upper = displayStr.upper + displayStr.lower;
    }else if (/[\+\-]/.test(displayStr.exp[displayStr.exp.length - 1])) {

      /* If +- is the last thing in upper display,
       * concatenate (display.value*x/100) into upper display,
       * and display.value = (display.value*x)/100
       */
      let prev = /*arithmetic_expression_parsing*/(displayStr.exp.slice(0,displayStr.exp.length-1));
      displayStr.lower = prev*display.value/100;
      displayStr.upper += displayStr.lower;
      displayStr.exp.push(displayStr.lower);
    }else {

      /* If +- is present, but not last in upper display,
       * replace part after +- to (value of part*value of exp before sign/100) in upper display,
       * and commonPartThree the same calculation in lower display
       */
      let prev = /*arithmetic_expression_parsing*/(displayStr.exp.slice(0,displayStr.exp.length-2));
      displayStr.lower = prev*display.value/100;
      // Swap last part of displayStr.upper
      let res2, ind2 = [];
      // We need last numerical value
      while ((res2 = reg.exec(displayStr.upper))) {
        ind2.push(res2.index);
      }
      displayStr.upper = displayStr.upper.slice(0,ind2[ind2.length - 1]);
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
  display.value = displayStr.lower;
// If +-*/ absent in upper string, change upper string value to pi.
  if(!reg.test(displayStr.value)){
    displayStr.upper = "";
    displayStr.value = displayStr.upper;
    display.value = displayStr.lower;
    displayStr.exp = [];
  }
}

// Created on 07/07/2020 by Prachiti Garge
// Event handler function for e
function eFunc() {
  // displayStr.lower should show Math.E
  displayStr.lower = Math.E;
  display.value = displayStr.lower;
  if(!reg.test(displayStr.value)){
    displayStr.upper = "";
    displayStr.value = displayStr.upper;
    display.value = displayStr.lower;
    displayStr.exp = [];
  }
}

// Created on 07/08/2020 by Prachiti Garge
// Event handler function for addition
function plusFunc() {
  displayStr.upper = displayStr.value;
  if(displayStr.upper == ""){
    displayStr.upper = display.value;
    displayStr.exp.push(displayStr.upper);
    displayStr.value = display.value;
  }
  // If previous sign is one of the four, swap it in displayStr.exp, displayStr.upper and display_upper
  // Check for it
  if (reg.test(displayStr.exp[displayStr.exp.length - 1])) {
    displayStr.exp.pop();
    displayStr.upper = displayStr.upper.substring(0, displayStr.upper.length-1);
  }
  // displayStr.exp should be updated
  displayStr.exp.push("+");
  // displayStr.upper and display_upper should be updated
  displayStr.upper = displayStr.upper + "+";
  displayStr.value = displayStr.upper;
}

// Created on 07/08/2020 by Prachiti Garge
// Event handler function for subtraction
function minusFunc() {
  displayStr.upper = displayStr.value;
  if(displayStr.upper == ""){
    displayStr.upper = display.value;
    displayStr.exp.push(displayStr.upper);
    display_upper.value = display.value;
  }
  // If previous sign is one of the four, swap it in displayStr.exp, displayStr.upper and display_upper
  // Check for it
  if (reg.test(displayStr.exp[displayStr.exp.length - 1])) {
    displayStr.exp.pop();
    displayStr.upper = displayStr.upper.substring(0, displayStr.upper.length-1);
  }
  // displayStr.exp should be updated
  displayStr.exp.push("-");
  // displayStr.upper and display_upper should be updated
  displayStr.upper = displayStr.upper + "-";
  displayStr.value = displayStr.upper;
}

// Created on 07/08/2020 by Prachiti Garge
// Event handler function for multiplication
function multiplyFunc() {
  displayStr.upper = displayStr.value;
  if(displayStr.upper == ""){
    displayStr.upper = display.value;
    displayStr.exp.push(displayStr.upper);
    displayStr.value = display.value;
  }
  // If previous sign is one of the four, swap it in displayStr.exp, displayStr.upper and display_upper
  // Check for it
  if (reg.test(displayStr.exp[displayStr.exp.length - 1])) {
    displayStr.exp.pop();
    displayStr.upper = displayStr.upper.substring(0, displayStr.upper.length-1);
  }
  // displayStr.exp should be updated
  displayStr.exp.push("×");
  // displayStr.upper and display_upper should be updated
  displayStr.upper = displayStr.upper + "×";
  displayStr.value = displayStr.upper;

}

// Created on 07/08/2020 by Prachiti Garge
// Event handler function for division
function divideFunc() {
  displayStr.upper = displayStr.value;
  if(displayStr.upper == ""){
    displayStr.upper = display.value;
    displayStr.exp.push(displayStr.upper);
    displayStr.value = display.value;
  }
  // If previous sign is one of the four, swap it in displayStr.exp, displayStr.upper and display_upper
  // Check for it
  if (reg.test(displayStr.exp[displayStr.exp.length - 1])) {
    displayStr.exp.pop();
    displayStr.upper = displayStr.upper.substring(0, displayStr.upper.length-1);
  }
  // displayStr.exp should be updated
  displayStr.exp.push("÷");
  // displayStr.upper and display_upper should be updated
  displayStr.upper = displayStr.upper + "÷";
  displayStr.value = displayStr.upper;
}

// For testing
/*
function getAngle(){
  return 'DEG';
}
*/

/*
let func_arr_1 = [sinFunc(), tanFunc(), sqrtFunc(), piFunc(), percentFunc(), minusFunc()];
let func_1 = ["sin","tan","sqrt","pi","percent","minus"];
for(i=0;i<func_arr_1.length;i++){

  displayStr.value = ""
  displayStr.upper = ""
  displayStr.lower = "6"
  display.value = "6"
  displayStr.exp = [];

  console.log(func_1[i]);
  console.log(displayStr.value);
  func_arr_1[i];
  console.log("displayStr.value = " + displayStr.value);
  console.log("displayStr.upper = " + displayStr.upper);
  console.log("displayStr.lower = " + displayStr.lower);
  console.log("display.value = " + display.value);
  console.log("displayStr.exp = " + displayStr.exp);
}

let func_arr_2 = [cosFunc(), arctanFunc(), invFunc(), logFunc(), e_to_xFunc(), eFunc()];
let func_2 = ["cos", "arctan", "inv", "log", "e_to_x", "eFunc"];
for(i=0;i<func_arr_2.length;i++){

  displayStr.value = "1/(5)"
  displayStr.upper = "1/(5)"
  displayStr.lower = "0.2"
  display.value = "0.2"
  displayStr.exp = ["0.2"]


  console.log(func_2[i]);
  console.log(displayStr.value);
  func_arr_2[i];
  console.log("displayStr.value = " + displayStr.value);
  console.log("displayStr.upper = " + displayStr.upper);
  console.log("displayStr.lower = " + displayStr.lower);
  console.log("display.value = " + display.value);
  console.log("displayStr.exp = " + displayStr.exp);
}

let func_arr_3 = [arcsinFunc(), sqrFunc(), absFunc(), lnFunc(), percentFunc(), plusFunc(), multiplyFunc()];
let func_3 = ["arcsin", "sqr", "abs", "ln", "percent", "plus", "multiply"];
for(i=0;i<func_arr_3.length;i++){

  displayStr.value = "0.2-"
  displayStr.upper = "0.2-"
  displayStr.lower = "0.2"
  display.value = "0.2"
  displayStr.exp = ["0.2" , "-"]

  console.log(func_3[i]);
  console.log(displayStr.value);
  func_arr_3[i];
  console.log("displayStr.value = " + displayStr.value);
  console.log("displayStr.upper = " + displayStr.upper);
  console.log("displayStr.lower = " + displayStr.lower);
  console.log("display.value = " + display.value);
  console.log("displayStr.exp = " + displayStr.exp);
}
*/
//let func_arr_4 = [arccosFunc(),ten_to_xFunc(),invFunc(),absFunc(),logFunc(),percentFunc(),divideFunc()];
//let func_4 = ["arccos","ten_to_x","inv","abs","log","percent","divide"];
//for(i=0;i<func_arr_4.length;i++){
/*
  displayStr.value = "log(45)×"
  displayStr.upper = "log(45)×"
  displayStr.lower = "1.6532125137753436793763169117857"
  display.value = "1.6532125137753436793763169117857"
  displayStr.exp = [ "1.6532125137753436793763169117857", "×"]
*/
/*
displayStr.value = "27+e^(log(5))"
displayStr.upper = "27+e^(log(5))"
displayStr.lower = "2.011679618732933671079071995709"
display.value = "2.011679618732933671079071995709"
displayStr.exp = ["27","+","2.011679618732933671079071995709"]

displayStr.value = "84-tan(1/5)÷"
displayStr.upper = "84-tan(1/5)÷"
displayStr.lower = "0.00349067268159625031851568605602"
display.value = "0.00349067268159625031851568605602"
displayStr.exp = ["84","-","0.00349067268159625031851568605602"]

// console.log(func_4[i]);
  console.log(displayStr.value);
  //func_arr_4[i];
  tanFunc();
  console.log("displayStr.value = " + displayStr.value);
  console.log("displayStr.upper = " + displayStr.upper);
  console.log("displayStr.lower = " + displayStr.lower);
  console.log("display.value = " + display.value);
  console.log("displayStr.exp = " + displayStr.exp);
//}

let func_arr_5 = [percentFunc(),invFunc(),multiplyFunc(),piFunc()];
let func_5 = ["percent","inv","multiply","pi"];
for(i=0;i<func_arr_5.length;i++){
 console.log(func_5[i]);
  console.log(displayStr.value);
  func_arr_5[i];
  console.log("displayStr.value = " + displayStr.value);
  console.log("displayStr.upper = " + displayStr.upper);
  console.log("displayStr.lower = " + displayStr.lower);
  console.log("display.value = " + display.value);
  console.log("displayStr.exp = " + displayStr.exp);
}

let func_arr_6 = [percentFunc(),lnFunc(),tanFunc()];
let func_6 = ["percent","ln","tan"];
for(i=0;i<func_arr_6.length;i++){
  console.log(func_6[i]);
  console.log(displayStr.value);
  func_arr_6[i];
  console.log("displayStr.value = " + displayStr.value);
  console.log("displayStr.upper = " + displayStr.upper);
  console.log("displayStr.lower = " + displayStr.lower);
  console.log("display.value = " + display.value);
  console.log("displayStr.exp = " + displayStr.exp);
}
*/
