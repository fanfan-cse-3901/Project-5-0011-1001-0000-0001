// File Created on 07/07/2020 by Prachiti Garge
// File Edited on 07/08/2020 by Prachiti Garge: Refactored some code and completed logic
// File Edited on 07/09/2020 by Kevin Dong: Moved str_lower, str_upper, and calc_status and renamed it
// File Edited on 07/10/2020 by Prachiti Garge: Refactored all the code, implemented %,

// Handles nesting and accumulation.
// Buttons for most of the operations, including scientific ones are implemented here.

// More variables for calculations
let num, substring_to_alter, val;
let reg = /[\+\-×÷]/g;

// TODO Deal with 2e+5
// TODO testing
// TODO check pi and e
// TODO add documentation

// If pi and e come after operation then only lower display is changed upper stays same
// displayStr.exp with percent after number
// displayStr.exp with eFunc after operation

let arrOps = ["–", "+", "×", "÷"];
let buttonsOperations = document.getElementsByName("operations");
let opPartOne = [ function() {  displayStr.exp.push("+"); displayStr.upper = displayStr.upper + "+"; },
  function() { displayStr.exp.push("-"); displayStr.upper = displayStr.upper + "-"; },
  function() { displayStr.exp.push("×"); displayStr.upper = displayStr.upper + "×"; },
  function() { displayStr.exp.push("÷"); displayStr.upper = displayStr.upper + "÷"; }];
for(i=0;i<buttonsOperations.length;i++){
  if (arrOps.includes(buttonsOperations[i].value)) {
    buttonsOperations[i].addEventListener("click", function () {
      displayStr.upper = display_upper.value;
      if (displayStr.upper == "") {
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
      opPartOne[arrOps.indexOf(buttonsOperations[i].value)]();
      display_upper.value = displayStr.upper;

    })
  }
}

// Trig buttons
let arrTrig = ["sin", "cos", "tan", "arcsin", "arccos", "arctan"];
let buttonsTrig = document.getElementsByName("trig");
let trigPartOne = [function() { val = Math.sin(num); },
  function() { val = Math.cos(num); },
  function() { val = Math.tan(num); },
  function() { val = Math.asin(num); },
  function() { val = Math.acos(num); },
  function() { val = Math.atan(num); }];
let trigPartTwo = [function(){ return "sin(" + substring_to_alter + ")";},
  function(){ return "cos(" + substring_to_alter + ")"; },
  function(){ return "tan(" + substring_to_alter + ")"; },
  function(){ return "arcsin(" + substring_to_alter + ")"; },
  function(){ return "arccos(" + substring_to_alter + ")"; },
  function(){ return "arctan(" + substring_to_alter + ")"; }];
for(j=0;j<buttonsTrig.length;j++){
  if (arrTrig.includes(buttonsTrig[j].value)) {
    buttonsTrig[j].addEventListener("click", function () {
      commonPartOne();
      if (getAngle == 'DEG') {
        num = num * (Math.PI / 180);
      }
      trigPartOne[arrTrig.indexOf(buttonsTrig[j].value)]();
      if(/[^e\+\-×÷\.\d]/.test(val)){
        lockdown();
      }else {
        commonPartTwo();
        displayStr.upper = displayStr.upper + trigPartTwo[arrTrig.indexOf(buttonsTrig[j].value)]();
        commonPartThree();
      }
    })
  }
}

// x button constants
let buttonsX = document.getElementsByName("x");
let arrConst = [ "pi", "e"];
let arrConstFunc = [Math.PI, Math.E];
// x button operations
let arrX = ["|x|", "x^2", "x^(1/2)", "1/x"];
let arrXPartOne = [function (){ val = Math.abs(num);},
  function () { val = num ** 2;},
  function () { val = Math.sqrt(num);},
  function () { val = 1 / num;}];
let arrXPartTwo = [function (){ return "abs(" + substring_to_alter + ")";},
  function () { return "sqr(" + substring_to_alter + ")";},
  function () { return "sqrt(" + substring_to_alter + ")";},
  function () { return "inv(" + substring_to_alter + ")";}];
for (k = 0;k < buttonsX.length; k++) {
  if (arrConst.includes(buttonsX[k].value)) {
    buttonsX[k].addEventListener("click", function(){
      displayStr.lower = arrConstFunc[arrConst.indexOf(buttonsX[k].value)];
      display.value = displayStr.lower;
    })
  }else if (arrX.includes(buttonsX[k].value)) {
    buttonsX[k].addEventListener("click", function(){
      commonPartOne();
      arrXPartOne[arrX.indexOf(buttonsX[k].value)]();
      if(/[^e\+\-×÷\.\d]/.test(val)){
        lockdown();
      }else {
        commonPartTwo();
        displayStr.upper = displayStr.upper + arrXPartTwo[arrX.indexOf(buttonsX[k].value)]();
        commonPartThree();
      }
    })
  }

}


// exp buttons (exp class)
let buttonsExp = document.getElementsByName("exp");
let arrExp = ["e^x", "n!", "log", "ln", "10^x"];
let arrExpPartOne = [function (){ val = Math.exp(num); },
  function () { function fact(x) {
    return (x != 1) ? x * fact(x - 1) : 1;
  }
    val = fact(num); },
  function () { val = Math.log10(num);},
  function () { val = Math.log(num);},
  function (){ val = Math.pow(10, num); }];
let arrExpPartTwo = [function (){ return "e^(" + substring_to_alter + ")"; },
  function () { return "fact(" + substring_to_alter + ")";},
  function () { return "log(" + substring_to_alter + ")"; },
  function () { return "ln(" + substring_to_alter + ")"; },
  function (){ return "10^(" + substring_to_alter + ")"; }];
for (l = 0;l < buttonsX.length; l++) {
  if (arrExp.includes(buttonsExp[l].value)) {
    buttonsExp[l].addEventListener("click", function () {
      commonPartOne();
      arrExpPartOne[arrExp.indexOf(buttonsExp[l].value)]();
      if(/[^e\+\-×÷\.\d]/.test(val)){
        lockdown();
      }else {
        commonPartTwo();
        displayStr.upper = displayStr.upper + arrExpPartTwo[arrExp.indexOf(buttonsExp[l].value)]();
        commonPartThree();
      }
    })
  }
}

// other class buttons
let arrOther = ["%"];
let arrOtherFunc = [percentFunc()];
let buttonsOther = document.getElementsByName("other");
for(a = 0;a < buttonsOther.length;a++){
  if (arrOther.includes(buttonsOther[a].value)) {
    buttonsOther[a].addEventListener("click", function (){
      arrOtherFunc[arrOther.indexOf(buttonsOther[a].value)];
    })
  }
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
       * concatenate (display.value*x/100) into upper display,
       * and display.value = (display.value*x)/100
       */
      let prev = arithmetic_expression_parsing(displayStr.exp.slice(0,displayStr.exp.length-1));
      displayStr.lower = prev*display.value/100;
      displayStr.upper += displayStr.lower;
      displayStr.exp.push(displayStr.lower);
    }else {

      /* If +- is present, but not last in upper display,
       * replace part after +- to (value of part*value of exp before sign/100) in upper display,
       * and commonPartThree the same calculation in lower display
       */
      let prev = arithmetic_expression_parsing(displayStr.exp.slice(0,displayStr.exp.length-2));
      displayStr.lower = prev*display.value/100;
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

