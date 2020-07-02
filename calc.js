// File Created on 07/01/2020 by Amanda Cheng

// const calculator = document.querySelector('.calculator');
/* Create objects for calculator, display, and all the button keys */
const calculator ={
    displayVal: '0',
    firstOp: null,
    waitForSecondOp: false,
    mem: [0],    // memory array to hold the values from memory results
    op: null,
};
const display = document.querySelector('.display')
const keys = document.querySelector('.calcKeys')    //might not need this
/* Get response from button clicking */
document.getElementById("MC").addEventListener("click",clearMC)
document.getElementById("MR").addEventListener("click",memReg)
document.getElementById("MS").addEventListener("click",memStore)
document.getElementById("M+").addEventListener("click",memAdd)
document.getElementById("M-").addEventListener("click",memMinus)
document.getElementById("Clear").addEventListener("click",clearDisplay)


// function updateDisplay(){ // Have not finished
//     display.value = calculator.displayVal
// }
function clearDisplay(){
    display.value = '0'
    calculator.firstOp = null
    calculator.waitForSecondOp=false
    calculator.mem = calculator.mem.splice(1,calculator.mem.length) //1 because 0 is first
    calculator.op= null
}

function clearMC(){
    // remove all elements from the array
    calculator.mem = calculator.mem.splice(1,calculator.mem.length)
}
function memReg(){
    // add up all the sum of memory array
    var sum = calculator.mem.reduce(function(a,b){
        return a + b
    }, 0);
    return sum
}
function memAdd(){
    var displayNum = parseFloat(document.getElementById('display').value)
    calculator.mem.push(displayNum)
}
function memMinus(){
    var displayNum = parseFloat(document.getElementById('display').value)
    var negDisplayNum = 0 - displayNum
    calculator.mem.push(negDisplayNum)
}
function memStore(){
    // not sure what this does yet
    // Kevin: store current number in display to memory
}