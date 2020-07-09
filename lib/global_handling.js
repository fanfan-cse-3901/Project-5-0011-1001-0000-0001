// File Created on 07/07/2020 by Prachiti Garge
// File Edited on 07/08/2020 by Prachiti Garge: Refactored code and completed logic
// Handles things like global array, nesting, and accumulation

// Upper display
// At the end of the method
// TODO make sure that this is correct and it is ok to call display.value from Yifan's code
let display_upper = document.getElementById("display_upper");

// This string is shown in the upper part of the display
// "8+6+sqr(sqr(5))"
let str_upper = "";

// This is the calculation shown in the lower part of the display
// "625"
let str_lower = "";

// This array has elements with only numbers and +-*/ passed to the get the value
// ["8","+","6","+","625"]
let calc_status = [];

/* TODO Maybe we don't need this array
// This array contains the buttons pressed in the current expression
let curr_exp_buttons = [];
// TODO need to correctly register every every click
let buttons = document.getElementsByTagName("button").addEventListener("click", function(){
  curr_exp_buttons.push(value);
  window.alert(curr_exp_buttons[curr_exp_buttons.length - 1]);
});
*/

// More variables for calculations
let num, substring_to_alter, val;
let reg = /[\+\-×÷]/g;

// TODO error handling
// TODO testing

// TODO need proper connection to buttons for these
document.querySelector('sin')
  .addEventListener("click", sin_func);
document.querySelector('cos')
  .addEventListener("click", cos_func);
document.querySelector('tan')
  .addEventListener("click", tan_func);
document.querySelector('arcsin')
  .addEventListener("click", arcsin_func);
document.querySelector('arccos')
  .addEventListener("click", arccos_func);
document.querySelector('arctan')
  .addEventListener("click", arctan_func);
document.querySelector('x^2')
  .addEventListener("click", sqr_func);
document.querySelector('x^(1/2)')
  .addEventListener("click", sqrt_func);
document.querySelector('1/x')
  .addEventListener("click", inv_func);
document.querySelector('|x|')
  .addEventListener("click", abs_func);
document.querySelector('log')
  .addEventListener("click", log_func);
document.querySelector('ln')
  .addEventListener("click", ln_func);
document.querySelector('pi')
  .addEventListener("click", pi_func);
document.querySelector('e')
  .addEventListener("click", e_func);
document.querySelector('n!')
  .addEventListener("click", fact_func);
document.querySelector('10^x')
  .addEventListener("click", ten_to_x_func);
document.querySelector('e^x')
  .addEventListener("click", e_to_x_func);
document.querySelector('+')
  .addEventListener("click", plus_func);
document.querySelector('-')
  .addEventListener("click", minus_func);
document.querySelector('×')
  .addEventListener("click", multiply_func);
document.querySelector('÷')
  .addEventListener("click", divide_func);

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for sin
function sin_func() {
  // This part of code is explained in the following function
  common_part_one();
  // Apply func on it, check and replace
  if (getAngle == 'DEG') {
    num = num * (Math.PI / 180);
  }
  val = Math.sin(num);
  // This part of code is explained in the following function
  common_part_two();
  // Prepare upper display string
  str_upper = str_upper + "sin(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  common_part_three();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for cos
function cos_func() {
  // This part of code is explained in the following function
  common_part_one();
  // Apply func on it, check and replace
  if (getAngle == 'DEG') {
    num = num * (Math.PI / 180);
  }
  val = Math.cos(num);
  // This part of code is explained in the following function
  common_part_two();
  // Prepare upper display string
  str_upper = str_upper + "cos(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  common_part_three();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for tan
function tan_func() {
  // This part of code is explained in the following function
  common_part_one();
  // Apply func on it, check and replace
  if (getAngle == 'DEG') {
    num = num * (Math.PI / 180);
  }
  val = Math.tan(num);
  // This part of code is explained in the following function
  common_part_two();
  // Prepare upper display string
  str_upper = str_upper + "tan(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  common_part_three();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for arcsin
function arcsin_func() {
  // This part of code is explained in the following function
  common_part_one();
  // Apply func on it, check and replace
  if (getAngle == 'DEG') {
    num = num * (Math.PI / 180);
  }
  val = Math.asin(num);
  // This part of code is explained in the following function
  common_part_two();
  // Prepare upper display string
  str_upper = str_upper + "arcsin(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  common_part_three();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for arccos
function arccos_func() {
  // This part of code is explained in the following function
  common_part_one();
  // Apply func on it, check and replace
  if (getAngle == 'DEG') {
    num = num * (Math.PI / 180);
  }
  val = Math.acos(num);
  // This part of code is explained in the following function
  common_part_two();
  // Prepare upper display string
  str_upper = str_upper + "arccos(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  common_part_three();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for arctan
function arctan_func() {
  // This part of code is explained in the following function
  common_part_one();
  // Apply func on it, check and replace
  if (getAngle == 'DEG') {
    num = num * (Math.PI / 180);
  }
  val = Math.atan(num);
  // This part of code is explained in the following function
  common_part_two();
  // Prepare upper display string
  str_upper = str_upper + "arctan(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  common_part_three();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for sqr
function sqr_func() {
  // This part of code is explained in the following function
  common_part_one();
  // Apply func on it, check and replace
  val = num ** 2;
  // This part of code is explained in the following function
  common_part_two();
  // Prepare upper display string
  str_upper = str_upper + "sqr(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  common_part_three();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for sqrt
function sqrt_func() {
  // This part of code is explained in the following function
  common_part_one();
  // Apply func on it, check and replace
  val = Math.sqrt(num);
  // This part of code is explained in the following function
  common_part_two();
  // Prepare upper display string
  str_upper = str_upper + "sqrt(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  common_part_three();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/07/2020 by Prachiti Garge: Refactored code
// Event handler function for inv
function inv_func() {
  // This part of code is explained in the following function
  common_part_one();
  // Apply func on it, check and replace
  val = 1 / num;
  // This part of code is explained in the following function
  common_part_two();
  // Prepare upper display string
  str_upper = str_upper + "inv(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  common_part_three();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for abs
function abs_func() {
  // This part of code is explained in the following function
  common_part_one();
  // Apply func on it, check and replace
  val = Math.abs(num);
  // This part of code is explained in the following function
  common_part_two();
  // Prepare upper display string
  str_upper = str_upper + "abs(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  common_part_three();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for factorial
function fact_func() {
  // This part of code is explained in the following function
  common_part_one();
  // Apply func on it, check and replace
  function fact(x) {
    return (x != 1) ? x * fact(x - 1) : 1;
  }
  val = fact(num);
  // This part of code is explained in the following function
  common_part_two();
  // Prepare upper display string
  str_upper = str_upper + "fact(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  common_part_three();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for log
function log_func() {
  // This part of code is explained in the following function
  common_part_one();
  // Apply func on it, check and replace
  val = Math.log10(num);
  // This part of code is explained in the following function
  common_part_two();
  // Prepare upper display string
  str_upper = str_upper + "log(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  common_part_three();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for ln
function ln_func() {
  // This part of code is explained in the following function
  common_part_one();
  // Apply func on it, check and replace
  val = Math.log(num);
  // This part of code is explained in the following function
  common_part_two();
  // Prepare upper display string
  str_upper = str_upper + "ln(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  common_part_three();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for e_to_x
function e_to_x_func() {
  // This part of code is explained in the following function
  common_part_one();
  // Apply func on it, check and replace
  val = Math.exp(num);
  // This part of code is explained in the following function
  common_part_two();
  // Prepare upper display string
  str_upper = str_upper + "e^(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  common_part_three();
}

// Created on 07/07/2020 by Prachiti Garge
// Edited on 07/08/2020 by Prachiti Garge: Refactored code
// Event handler function for 10_to_x
function ten_to_x_func() {
  // This part of code is explained in the following function
  common_part_one();
  // Apply func on it, check and replace
  val = Math.pow(10, num);
  // This part of code is explained in the following function
  common_part_two();
  // Prepare upper display string
  str_upper = str_upper + "10^(" + substring_to_alter + ")";
  // This part of code is explained in the following function
  common_part_three();
}

/* This set of common_part functions refactor the common code to most operation buttons
 *  and are called when needed in the function.
 */
// Created on 07/08/2020 by Prachiti Garge
function common_part_one() {
  // Get the last numerical element from calc_status
  if (calc_status.length == 0) {
    calc_status.push(display.value);
  }
  // Check if the previous button pressed was +-×÷
  if (reg.test(calc_status[calc_status.length - 1])) {
    // If yes, then accumulation
    num = display.value;
  } else {
    // If no, use
    num = calc_status.pop();
  }

}
// Created on 07/08/2020 by Prachiti Garge
function common_part_two() {
  // Here parser takes an array as input which has +-*/ or complete numbers with decimals as elements
  calc_status.push("\"" + val + "\"");
  str_lower = val;
  str_upper = display_upper.value;
  // Update display by adding sqr() around last number by matching it to regex- either at start of the string or after +-*/
  // Not last index
  // If +-×÷ is present in upper string
  if (reg.test(str_upper)) {
    let result, indices = [];
    // We need last numerical value
    while ((result = reg.exec(str_upper))) {
      indices.push(result.index);
    }
    // If +-×÷ is last, then apply function on value of expression before the sign
    if (indices[indices.length - 1] == str_upper.length - 1) {
      substring_to_alter = display.value;
    } else {
      // else apply function on last numerical value
      substring_to_alter = str_upper.slice(indices[indices.length - 1] + 1, str_upper.length);
    }
  } else { // If +-×÷ is not present in upper string
    substring_to_alter = str_upper.slice(0, str_upper.length);
  }
}
// Created on 07/08/2020 by Prachiti Garge
function common_part_three() {
  // Need to update upper and lower displays
  display_upper.value = str_upper;
  display.value = str_lower;
}

// Created on 07/07/2020 by Prachiti Garge
// Event handler function for pi
function pi_func() {
  // str_lower should show Math.PI
  str_lower = Math.PI;
  display.value = str_lower;

}

// Created on 07/07/2020 by Prachiti Garge
// Event handler function for e
function e_func() {
  // str_lower should show Math.E
  str_lower = Math.E;
  display.value = str_lower;
}

// Created on 07/08/2020 by Prachiti Garge
// Event handler function for addition
function plus_func() {
  // If previous sign is one of the four, swap it in calc_status, str_upper and display_upper
  // Check for it
  if (reg.test(calc_status[calc_status.length - 1])) {
    calc_status.pop();
  }
  if (reg.test(str_upper[str_upper.length - 1])) {
    str_upper = str_upper.substring(0, str_upper.length);
  }
  // calc_status should be updated
  calc_status.push("+");
  // str_upper and display_upper should be updated
  str_upper = str_upper + "+";
  display_upper.value = str_upper;
}

// Created on 07/08/2020 by Prachiti Garge
// Event handler function for subtraction
function minus_func() {
  // If previous sign is one of the four, swap it in calc_status, str_upper and display_upper
  // Check for it
  if (reg.test(calc_status[calc_status.length - 1])) {
    calc_status.pop();
  }
  if (reg.test(str_upper[str_upper.length - 1])) {
    str_upper = str_upper.substring(0, str_upper.length);
  }
  // calc_status should be updated
  calc_status.push("-");
  // str_upper and display_upper should be updated
  str_upper = str_upper + "-";
  display_upper.value = str_upper;
}

// Created on 07/08/2020 by Prachiti Garge
// Event handler function for multiplication
function multiply_func() {
  // If previous sign is one of the four, swap it in calc_status, str_upper and display_upper
  // Check for it
  if (reg.test(calc_status[calc_status.length - 1])) {
    calc_status.pop();
  }
  if (reg.test(str_upper[str_upper.length - 1])) {
    str_upper = str_upper.substring(0, str_upper.length);
  }
  // calc_status should be updated
  calc_status.push("×");
  // str_upper and display_upper should be updated
  str_upper = str_upper + "×";
  display_upper.value = str_upper;

}

// Created on 07/08/2020 by Prachiti Garge
// Event handler function for division
function divide_func() {
  // If previous sign is one of the four, swap it in calc_status, str_upper and display_upper
  // Check for it
  if (reg.test(calc_status[calc_status.length - 1])) {
    calc_status.pop();
  }
  if (reg.test(str_upper[str_upper.length - 1])) {
    str_upper = str_upper.substring(0, str_upper.length);
  }
  // calc_status should be updated
  calc_status.push("÷");
  // str_upper and display_upper should be updated
  str_upper = str_upper + "÷";
  display_upper.value = str_upper;
}