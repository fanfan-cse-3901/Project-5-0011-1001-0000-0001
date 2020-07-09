// File Created on 07/01/2020 by Amanda Cheng
// File Edited 07/07/2020 by Amanda Cheng: Tested the JS code and edited for correctness
// Edited 07/09/2020 by Kevin Dong: Syntax and optimization fixes

// const calculator = document.querySelector('.calculator');
/* Create objects for calculator, display, and all the button keys */
let calculator = {
  // displayVal: '0',
  // firstOp: null,
  // waitForSecondOp: false,
  mem: [0], // memory array to hold the values from memory results
  // op: null,
};
//let display = document.querySelector('.display')
// const keys = document.querySelector('.calcKeys')    //might not need this

console.log("The array at beginning:  " + calculator.mem);
console.log("The array beginning size  " + calculator.mem.length);

memFnc = [clearMC, memReg, memStore, memAdd, memMinus];
memVal = ["MC", "MR", "MS", "M+", "M-"];
// Get list of all memory operation class names
memOp = document.getElementsByName("memory");

// Add eventListener to all memory buttons
for (let i = 0; i < memOp.length; i++) {
  j = 0;
  let found = false;
    /* To account for possibility of future changes in html,
    don't assume an order for memory operations. Go through all elements
    and add to EventListener with correc  t function
     */
  while (j < memVal.length && !found) {
    if (memOp[i].value === memVal[j]) {
      found = true;
      memOp[i].addEventListener("click", memFnc[j]);
    }
    j++
  }
}

/* Get response from button clicking clear */
document.getElementById("clear").addEventListener("click", clearDisplay);

// function updateDisplay(){ // Have not finished
//     display.value = calculator.displayVal
// }
function clearDisplay() {
  display.value = "0";
  display_upper.value = "";
    //calculator.firstOp = null
    //calculator.waitForSecondOp=false
  clearMC();
    //calculator.op= null
}

function clearMC() {
  // remove all elements from the array
  calculator.mem.splice(0, calculator.mem.length, 0);
  console.log("The array MC  " + calculator.mem);
  console.log("The array MC size  " + calculator.mem.length);
  // Set clear and memPress flags and call to updateBuffer on right
  clear = true;
  memPress.flag = true;
  updateBuffer();
}

function memReg() {
  // Show to console
  console.log("You hit MR!");
  // Peak into the memory and display it in display box
  display.value = "" + calculator.mem[calculator.mem.length - 1];
  //document.getElementById("display").value = ""+calculator.mem[calculator.mem.length-1];
  // Set clear and memPress flags and call to updateBuffer on right
  clear = true;
  memPress.flag = true;
  updateBuffer();

}

function memAdd() {
  // let display = document.getElementById('display')
  // Show to console
  console.log("You hit M+!");
  let displayNum = parseFloat(document.getElementById('display').value);
  let lastVal = calculator.mem.pop();
  // Add displayNum to value in memory
  calculator.mem.push(displayNum + lastVal);
  console.log("The array is: " + calculator.mem);
  // Set clear and memPress flags and call to updateBuffer on right
  clear = true;
  memPress.flag = true;
  updateBuffer();
}

function memMinus() {
  // Show to console
  console.log("You hit M-!");
  let displayNum = parseFloat(document.getElementById('display').value);
  let lastVal = calculator.mem.pop();
  // Subtract the display number from the number in memory
  calculator.mem.push(lastVal - displayNum);
  // Set clear and memPress flags and call to updateBuffer on right
  clear = true;
  memPress.flag = true;
  updateBuffer();
}

function memStore() {
  // Show to console
  console.log("You hit MS!");
  let displayNum = parseFloat(document.getElementById('display').value);
  calculator.mem.push(displayNum);
  // Check if memory array has 1+ elements. If so, remove the earliest element as it is not needed anymore
  if (calculator.mem.length > 1) calculator.mem.shift();
  // update clear so numbers can be cleared the next time user clicks
  clear = true;
  memPress.flag = true;
  updateBuffer();
}
//
// memStore(calculator)
// memMinus(calculator)
// memReg(calculator)
// console.log("After MR: " + calculator.mem)
// memAdd(calculator)
// clearMC(calculator)
// console.log("After clearing: " + calculator.mem)