// File Created on 07/01/2020 by Amanda Cheng
// File Edoted 07/07/2020 by Amanda Cheng: Tested the JS code and edited for correctness

// const calculator = document.querySelector('.calculator');
/* Create objects for calculator, display, and all the button keys */
var calculator = {
  // displayVal: '0',
  // firstOp: null,
  // waitForSecondOp: false,
  mem: [0],    // memory array to hold the values from memory results
  // op: null,
};
//let display = document.querySelector('.display')
// const keys = document.querySelector('.calcKeys')    //might not need this

console.log("The array beg  " + calculator.mem )
console.log("The array beg size  " + calculator.mem.length )

memFnc = [clearMC, memReg, memStore, memAdd, memMinus]
memVal = ["MC", "MR", "MS", "M+", "M-"]
// Get list of all memory operation class names
memOp = document.getElementsByName("memory")

// Add eventListener to all memory buttons
for (i=0; i<memOp.length; i++){
  j = 0
  let found = false
  /* To account for possibility of future changes in html,
  don't assume an order for memory operations. Go through all elements
  and add to EventListener with correct function
   */
  while (j<memVal.length && !found){
    if (memOp[i].value==memVal[j]){
      found = true
      memOp[i].addEventListener("click",   memFnc[j]);

    }
    j++
  }
}

/* Get response from button clicking clear */
document.getElementById("clear").addEventListener("click",clearDisplay)


// function updateDisplay(){ // Have not finished
//     display.value = calculator.displayVal
// }
function clearDisplay(){
  let display = document.querySelector('.display')
  display.value = '0'
  //calculator.firstOp = null
  //calculator.waitForSecondOp=false
  clearMC()
  //calculator.op= null
}

function clearMC(){
  // remove all elements from the array
  calculator.mem.splice(0,calculator.mem.length,0)
  console.log("The array MC  " + calculator.mem )
  console.log("The array MC size  " + calculator.mem.length )
}
function memReg(){
  // add up all the sum of memory array
  // var sum = calculator.mem.reduce(function(a,b){
  //     return a + b
  // }, 0);
  // return the last value
  console.log("You hit MR!")
  console.log("The array MR  " + calculator.mem )
  console.log("The array MR size  " + calculator.mem.length )
  let display = document.getElementById('display')
  //return calc.mem[calc.mem.length-1]
  display.value=""+calculator.mem[calculator.mem.length-1]
  //document.getElementById("display").value = ""+calculator.mem[calculator.mem.length-1];

}
function memAdd(){
  // Check that the calculator memory array is not bigger than
  // let display = document.getElementById('display')
  console.log("You hit M+!")
  console.log("The array beg M+ " + calculator.mem )
  console.log("The array beg size  " + calculator.mem.length )
  let displayNum = parseFloat(document.getElementById('display').value)
  // let displayNum = parseFloat(display.value)
  let lastVal = calculator.mem.pop();
  calculator.mem.push(displayNum+lastVal)
  console.log("The array is: " + calculator.mem)

}
function memMinus(){
  //let display = document.getElementById('display')
  let displayNum = parseFloat(document.getElementById('display').value)
  //let displayNum = parseFloat(display.value)
  //displayNum = 5
  let lastVal = calculator.mem.pop();
  calculator.mem.push(lastVal-displayNum)
  console.log("The array M- (5)  " + calculator.mem )
}

function memStore(){
  let displayNum = parseFloat(document.getElementById('display').value)
  displayNum = 5
  calculator.mem.push(displayNum)
  console.log("The array MS (5)  " + calculator.mem )
  // Check if memory array has 1+ elements. If so, remove the earliest element as it is not needed anymore
  if (calculator.mem.length >1){
    calculator.mem.shift()
  }
}
//
// memStore(calculator)
// memMinus(calculator)
// memReg(calculator)
// console.log("After MR: " + calculator.mem)
// memAdd(calculator)
// clearMC(calculator)
// console.log("After clearing: " + calculator.mem)
