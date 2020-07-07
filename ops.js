/*
File Created on 07/02/2020 by Kevin Dong
Performs Arithmetic Operations Parsing
 */

const signs = ["+", "–", "*", "/"] // plus sign, endash, asterisks, forward slash

/* Created on 07/02/2020 by Kevin Dong
Takes array of characters and returns the value of the expression */
function arithmetic_expression_parsing(input) {
    if (input.some(val => signs.includes(val))) {
        let exp = [];
        let prev_sign = 0;
        for (let i = 0; i < input.length; i++) {
            if (signs.includes(input[i])) {
                exp.push(input.slice(prev_sign, i).join(''));
                exp.push(input[i]);
                prev_sign = i+1;
            }
        }
        exp.push(input.slice(prev_sign).join(''));
        console.log(exp);
        for (let i = 2; i < exp.length; i+=2) {
            if (exp[i-2].includes("%")) {
                exp[i-2] = parseFloat(exp[i-2]) / 100;
            } else if (exp[i].includes("%")) {
                exp[i] = parseFloat(exp[i]) / 100 * parseFloat(exp[i-2]);
            } else {
                if (i === 2) exp[i-2] = parseFloat(exp[i-2]);
                exp[i] = parseFloat(exp[i])
            }
            console.log(exp[i-2] + " (" + i);
            console.log(exp[i-1]+ " (" + i);
            console.log(exp[i]+ " (" + i);
            let op = {
                value1: exp[i-2],
                value2: exp[i],
                sign:   exp[i-1],
                angle:  "deg"
            }
            let eval = arithmetic_operator(op);
            console.log (" eval: " + eval);
            if (isFinite(eval)){
                return eval;
            } else {
                return "ERR";
            }
        }

    } else {
            return input.join('');
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

console.log(arithmetic_expression_parsing(["5", "+", "2", "%"]));