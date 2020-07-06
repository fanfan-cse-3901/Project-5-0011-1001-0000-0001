// File Created on 07/02/2020 by Prachiti Garge

// Gets the parsed input and returns value after appropriate calculations
function arithmetic_operator(given){
    var ret_val = 0;
    switch(given.sign){
        case '+':
            ret_val = given.value1 + given.value2;
            break;
        case '-':
            ret_val = given.value1 - given.value2;
            break;
        case '*':
            ret_val = given.value1 * given.value2;
            break;
        case '/':
            // Check for divide by 0
            // TODO
            ret_val = given.value1 / given.value2;
            break;
        case '%':
            ret_val = (given.value1 * given.value2) / 100;
            break;
        case 'inv':
            // When value = 0
            ret_val = 1 / given.value1;
            break;
        case 'sqr':
            ret_val = given.value1 ** 2;
            break;
        case 'sqrt':
            // TODO if sqrt(-1) invalid input
            ret_val = given.value1 ** (1/2);
            break;
            // Additional functionality
        case 'sin':
            // TODO
            ret_val = Math.sin(given.value1);
            break;
        case 'cos':
            // TODO deg/rad
            ret_val = Math.cos(given.value1);
            break;
        case 'tan':
            // TODO deg/rad
            ret_val = Math.tan(given.value1);
            break;
        case 'log':
            // TODO deg/rad
            ret_val = Math.tan(given.value1);
            break;
        case 'ln':
            ret_val = Math.log(given.value1);
            break;
        case 'abs':
            ret_val = Math.abs(given.value1);
            break;
    }
    return ret_val;
}