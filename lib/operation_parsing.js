/*
File Created on 07/02/2020 by Kevin Dong
Performs Arithmetic Operations Parsing
 */

const signs = ["mod", "logyx", "^", "×", "÷", "+", "–"]; // plus sign, endash, asterisks, forward slash

/* Created on 07/02/2020 by Kevin Dong
   Edited on 07/06/2020 by Kevin Dong: New logic for PEMDAS
Takes array of characters and returns the value of the expression */
function arithmetic_expression_parsing(input) {
  let op = {
    value1: null,
    sign: null,
    value2: null
  };
  let calc = input;
  let exp = exp_gen(calc);
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
  return exp[0].toString();
}

/* Created on 07/02/2020 by Kevin Dong
 * Performs math on input of object with values and operator */
function arithmetic_operator(op) {
  if (op.sign === "×") return op.value1 * op.value2; // multiply
  if (op.sign === "÷") return op.value1 / op.value2; // divide
  if (op.sign === "+") return op.value1 + op.value2; // plus
  if (op.sign === "–") return op.value1 - op.value2; //endash minus
  if (op.sign === "^") return Math.pow(op.value1, op.value2); // power of
  if (op.sign === "logyx") return Math.log(op.value1) / Math.log(op.value2); // log with base
  if (op.sign === "mod") return op.value1 % op.value2;
}

/* Created on 07/06/2020 by Kevin Dong
 * Creates parsable array of numbers for expression */
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

// Created on 07/07/2020 by Kevin Dong
let op = document.getElementsByName("operation");
let ex = document.getElementsByName("exp");

// performs arithmetic operations on binary operators
function binary_op() {
  if (this.value === "=") {
    // update exp
    if (displayStr.lower === "") displayStr.lower = "0";
    displayStr.exp.push(displayStr.lower);

    // update upper display
    if (afterCalc) {
      displayStr.exp = [];
      displayStr.exp.push(displayStr.lower);
      displayStr.upper = displayStr.lower;
    } else {
      displayStr.upper += displayStr.lower;
    }
    displayStr.upper += this.value;
    display_upper.value = displayStr.upper;

    // update lower display
    displayStr.lower = arithmetic_expression_parsing(displayStr.exp);
    console.log(displayStr.exp);
    display.value = displayStr.lower;

    //post calc
    updateBuffer()
    afterCalc = true;
    displayStr.exp = [];
  } else {
    // update exp
    if (displayStr.lower === "") displayStr.lower = "0";
    displayStr.exp.push(displayStr.lower);
    displayStr.exp.push(signs[signs.indexOf(this.value)]);

    // update upper display
    if (afterCalc) {
      displayStr.upper = displayStr.lower;
    } else {
      displayStr.upper += displayStr.lower;
    }
    displayStr.upper += signs[signs.indexOf(this.value)];
    display_upper.value = displayStr.upper;

    // update lower display
    displayStr.lower = "0";
    display.value = displayStr.lower;
    if (afterCalc) afterCalc = false;
    clear = true;
  }
}

/* Created on 07/07/2020 by Kevin Dong
 * operation buttons*/

// + - ÷ × =
op.forEach(function (item) {
  item.addEventListener("click", binary_op, false);
});

// ^
ex[butt.exp.indexOf("^")].addEventListener("click", binary_op, false);

// logyx
ex[butt.exp.indexOf("logyx")].addEventListener("click", binary_op, false);

// mod
document.getElementsByName("other")[butt.other.indexOf("mod")].addEventListener("click", binary_op, false);