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

let op = document.getElementsByName("operations");

/* Created on 07/07/2020 by Kevin Dong
 * eq_func  */
op[op.length - 1].addEventListener("click", function () {
  // update exp
  displayStr.exp.push(displayStr.lower);

  // update upper display
  displayStr.upper += displayStr.lower;
  displayStr.upper += this.value;
  display_upper.value = displayStr.upper;

  // update lower display
  displayStr.lower = arithmetic_expression_parsing(displayStr.exp);
  display.value = displayStr.lower;
  //post calc
  afterCalc = true;
  displayStr.exp = [];
}, false);

/* Created on 07/07/2020 by Kevin Dong
 * operation_func  */
for (let i = 0; i < op.length - 1; i++) {
  op[i].addEventListener("click", function () {

    // update exp
    displayStr.exp.push(displayStr.lower);
    displayStr.exp.push(this.value);

    // update upper display
    displayStr.upper += displayStr.lower;
    displayStr.upper += this.value;
    display_upper.value = displayStr.upper;

    // update lower display
    displayStr.lower = "0";
    display.value = displayStr.lower;
    clear = true;
  }, false);
}
