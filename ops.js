/*
File Created on 07/02/2020 by Kevin Dong
Performs Arithmetic Operations Parsing
 */

const signs = ["+", "–", "*", "/"] // plus sign, endash, asterisks, forward slash

/* Created on 07/02/2020 by Kevin Dong
Takes array of characters and returns the value of the expression */
function arithmetic_expression_parsing(input) {
    if (input.some(val => signs.includes(val))) {
        let op = {
            value1: null,
            value2: null,
            sign:   null
        }
        for (let i = 0; i < input.length; i++) {
            if (signs.includes(input[i])) {
                op.value1 = parseFloat(input.slice(0,i).join(''));
                op.sign = input[i];
                op.value2 = arithmetic_expression_parsing(input.slice(i+1, input.length));
                break;
            }
        }
        return arithmetic_operator(op);
    } else {
        return parseFloat(input.join(''));
    }
}

/* Created on 07/02/2020 by Kevin Dong
Performs math on input of object with values and operator */
function arithmetic_operator(op) {
    if (op.sign === "–") return op.value1 - op.value2; //endash minus
    if (op.sign === "+") return op.value1 + op.value2; // plus
    if (op.sign === "*") return op.value1 * op.value2; // multiply
    if (op.sign === "/") return op.value1 / op.value2; // divide
}

console.log(arithmetic_expression_parsing(["2", "/", "4"]));