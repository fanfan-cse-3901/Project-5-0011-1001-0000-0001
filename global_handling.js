// File Created on 07/0/2020 by Prachiti Garge
// Handles things like global array, nesting, and accumulation

// Upper display
// At the end of the method
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

// This array contains the buttons pressed in the current expression
let curr_exp_buttons = [];
let buttons = document.getElementsByTagName("button").addEventListener("click", function(){
    curr_exp_buttons.push(value);
    window.alert(curr_exp_buttons[curr_exp_buttons.length - 1]);
});

// Variables
let num;
let substring_to_alter;
let regex_last_with = /[\+\-\*\/][0-9]*.?[0-9]*$/;
let regex_last_without = /[0-9]*.?[0-9]*$/;

document.querySelector('sin').addEventListener("click", sin_func);

// Created on 07/07/2020 by Prachiti Garge
// Event handler function for sin
function sin_func(){
    // Get the last numerical element from calc_status

    // Apply sin on it, check and replace

    // Send calc_status to parser to get value

    // Update display by adding sin() around last number by matching it to regex- either at start of the string or after +-*/
}

// Created on 07/07/2020 by Prachiti Garge
// Event handler function for cos
function cos_func(){
    // Get the last numerical element from calc_status

    // Apply cos on it, check and replace

    // Send calc_status to parser to get value

    // Update display by adding cos() around last number by matching it to regex- either at start of the string or after +-*/
}

// Created on 07/07/2020 by Prachiti Garge
// Event handler function for tan
function tan_func(){
    // Get the last numerical element from calc_status

    // Apply tan on it, check and replace

    // Send calc_status to parser to get value

    // Update display by adding tan() around last number by matching it to regex- either at start of the string or after +-*/
}

// Created on 07/07/2020 by Prachiti Garge
// Event handler function for arcsin
function arcsin_func(){
    // Get the last numerical element from calc_status

    // Apply arcsin on it, check and replace

    // Send calc_status to parser to get value

    // Update display by adding arcsin() around last number by matching it to regex- either at start of the string or after +-*/
}

// Created on 07/07/2020 by Prachiti Garge
// Event handler function for arccos
function arccos_func(){
    // Get the last numerical element from calc_status

    // Apply arcsin on it, check and replace

    // Send calc_status to parser to get value

    // Update display by adding arcsin() around last number by matching it to regex- either at start of the string or after +-*/
}

// Created on 07/07/2020 by Prachiti Garge
// Event handler function for arctan
function arctan_func(){
    // Get the last numerical element from calc_status

    // Apply arctan on it, check and replace

    // Send calc_status to parser to get value

    // Update display by adding arctan() around last number by matching it to regex- either at start of the string or after +-*/
}

// Created on 07/07/2020 by Prachiti Garge
// Event handler function for sqr
function sqr_func(){
    // Get the last numerical element from calc_status
    // e.g. calc_status = ["234","+","25"]
    if(calc_status.length == 0){
        calc_status.push(display.value);
    }
    num = calc_status.pop();
    // Apply sqr on it, check and replace
    calc_status.push("\""+num ** 2+"\"");
    // Send calc_status to parser to get value
    // Here parser takes an array as input which has +-*/ or complete numbers with decimals as elements
    // Supposed to display num**2
    // After equal, display total
    str_lower = parser(calc_status);
    // Update display by adding sqr() around last number by matching it to regex- either at start of the string or after +-*/
    if(str_upper.match(regex_last_with) > -1){
        substring_to_alter = str_upper.slice(str_upper.match(regex_last_with)-1,str_upper.length);
    }else if(str_upper.match(regex_last_without) > -1){
        substring_to_alter = str_upper.slice(str_upper.match(regex_last_without),str_upper.length);
    }
    str_upper = str_upper + "sqr("+substring_to_alter+")";
    // Need to put into upper and lower displays
    display_upper.value = str_upper;
    display.value = str_lower;
}

// Created on 07/07/2020 by Prachiti Garge
// Event handler function for sqrt
function sqrt_func(){
    // Get the last numerical element from calc_status
    if(calc_status.length == 0){
        calc_status.push(display.value);
    }
    num = calc_status.pop();
    // Apply sqrt on it, check and replace
    calc_status.push("\""+Math.sqrt(num)+"\"");
    // Send calc_status to parser to get value
    // Here parser takes an array as input which has +-*/ or complete numbers with decimals as elements
    str_lower = parser(calc_status);
    // Update display by adding sqr() around last number by matching it to regex- either at start of the string or after +-*/
    if(str_upper.match('[\+\-\*\/]') > -1){
        /[\+\-\*\/]/.test(str_upper);
        substring_to_alter = str_upper.slice(str_upper.lastIndex+1,str_upper.length);
    }else{
        substring_to_alter = str_upper.slice(0,str_upper.length);
    }
    str_upper = str_upper + "sqr("+substring_to_alter+")";
    // Need to put into upper and lower displays
    display_upper.value = str_upper;
    display.value = str_lower;}

// Created on 07/07/2020 by Prachiti Garge
// Event handler function for inv
function inv_func(){
    // Get the last numerical element from calc_status

    // Apply inv on it, check and replace

    // Send calc_status to parser to get value

    // Update display by changing to 1/x around last number by matching it to regex- either at start of the string or after +-*/
}

// Created on 07/07/2020 by Prachiti Garge
// Event handler function for abs
function abs_func(){
    // Get the last numerical element from calc_status

    // Apply abs on it, check and replace

    // Send calc_status to parser to get value

    // Update display by adding abs() around last number by matching it to regex- either at start of the string or after +-*/
}

// Created on 07/07/2020 by Prachiti Garge
// Event handler function for pi
function pi_func(){
    // str_lower should show Math.PI

    // Enter Math.PI in display_upper

}


// Created on 07/07/2020 by Prachiti Garge
// Event handler function for e
function e_func(){
    // str_lower should show Math.E

    // Enter Math.E in display_upper

}

// Created on 07/07/2020 by Prachiti Garge
// Event handler function for factorial
function fact_func(){
    // Get the last numerical element from calc_status

    // Apply factorial on it, check and replace

    // Send calc_status to parser to get value

    // Update display by adding fact() around last number by matching it to regex- either at start of the string or after +-*/
}

// Created on 07/07/2020 by Prachiti Garge
// Event handler function for log
function log_func(){
    // Get the last numerical element from calc_status

    // Apply log on it, check and replace

    // Send calc_status to parser to get value

    // Update display by adding log() around last number by matching it to regex- either at start of the string or after +-*/
}

// Created on 07/07/2020 by Prachiti Garge
// Event handler function for ln
function ln_func(){
    // Get the last numerical element from calc_status

    // Apply ln on it, check and replace

    // Send calc_status to parser to get value

    // Update display by adding ln() around last number by matching it to regex- either at start of the string or after +-*/
}

// Created on 07/07/2020 by Prachiti Garge
// Event handler function for e_to_x
function e_to_x_func(){
    // Get the last numerical element from calc_status

    // Apply e_to_x on it, check and replace

    // Send calc_status to parser to get value

    // Update display by adding e^() around last number by matching it to regex- either at start of the string or after +-*/
}

// Created on 07/07/2020 by Prachiti Garge
// Event handler function for 10_to_x
function ten_to_x_func(){
    // Get the last numerical element from calc_status

    // Apply ten_to_x on it, check and replace

    // Send calc_status to parser to get value

    // Update display by adding 10^() around last number by matching it to regex- either at start of the string or after +-*/
}


// More work since 2 numbers
// Created on 07/07/2020 by Prachiti Garge
// Event handler function for mod
function mod_func(){
    // Get the last numerical element from calc_status

    // Apply ten_to_x on it, check and replace

    // Send calc_status to parser to get value

    // Update display by adding 10^() around last number by matching it to regex- either at start of the string or after +-*/
}
