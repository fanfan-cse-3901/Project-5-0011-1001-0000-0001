/*
File Created on 07/02/2020 by Kevin Dong
Performs Arithmetic Operations Parsing
 */

const signs = ["+", "–", "*", "/", "log", "sin", "cos", "tan", "arccos", "arcsin", "arctan"] // plus sign, endash, asterisks, forward slash

/* Created on 07/02/2020 by Kevin Dong
   Edited on 07/06/2020 by Kevin Dong: New logic for PEMDAS
Takes array of characters and returns the value of the expression */
function arithmetic_expression_parsing(input) {
    let op = [];
    let exp = exp_gen(input);
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "*") {
            let s = input.splice(0,i).join("");
            console.log("first: ", s);
            op.push(s);
            s = input.shift();
            console.log("sign: ", s);
            op.push(s);
            console.log("remain: ", input);
            s = exp_gen(input);
            console.log("end: ", s);
            op.push(s);
        } else if (input[i] === "+") {
            let s = input.splice(0,i).join("");
            console.log("first: ", s);
            op.push(s);
            s = input.shift();
            console.log("sign: ", s);
            op.push(s);
            console.log("remain: ", input);
            s = exp_gen(input);
            console.log("end: ", s);
            op.push(s);
        }

    }
}

/* Created on 07/06/2020 by Kevin Dong
Creates parsable array for expression */
function exp_gen(input) {
    let exp = [];
    if (!input.some(val => signs.includes(val))) {
        exp.push(input.join(""));
        return exp;
    } else {
        for (let i = 0; i < input.length; i++) {
            if (signs.includes(input[i])) {
                exp.push(input.splice(0,i).join(""));
                exp.push(input.shift());
                exp = exp.concat(exp_gen(input));
            }
        }
        return exp;
    }

}
console.log(exp_gen(["2", "3", "4"]));
console.log(exp_gen(["2", "+", "3", "*", "4"]));
console.log(exp_gen(["2", "2", "+", "3", "3", "*", "4", "4"]));