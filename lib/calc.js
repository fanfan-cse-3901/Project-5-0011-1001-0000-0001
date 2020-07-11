// File Created on 07/01/2020 by Amanda Cheng
// File Edited 07/07/2020 by Amanda Cheng: Tested the JS code and edited for correctness
// File Edited 07/09/2020 by Kevin Dong: Syntax and optimization fi

/* Create objects for calculator, display, and all the button keys */
let calculator = {
  mem: [0], // memory array to hold the values from memory results
};
// Write to console for error debugging in future
console.log("The array at beginning:  " + calculator.mem);
console.log("The array beginning size  " + calculator.mem.length);
// Array of actions and Array of function values (values from buttons in html)
memFnc = [clearMC, memReg, memStore, memAdd, memMinus];
memVal = ["MC", "MR", "MS", "M+", "M-"];
// Get list of all memory operation class names
memOp = document.getElementsByName("memory");

// Add eventListener to all memory buttons
for (let i = 0; i < memOp.length; i++) {
  let j = 0;
  let found = false;
  /* To account for possibility of future changes in html,
  don't assume an order for memory operations. Go through all elements
  and add to EventListener with correct function
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
document.getElementsByName("delete")[butt.delete.indexOf("C")].addEventListener("click", clearDisplay, false);
document.getElementsByName("delete")[butt.delete.indexOf("CE")].addEventListener("click", clearLower, false);
document.getElementsByName("delete")[butt.delete.indexOf("Backspace")].addEventListener("click", backspace, false);

// Edited 07/09/2020 by Kevin Dong: Full functionality
/* ClearDisplay clears the displays and (changes) the memory buffer (C). It has no parameters */
function clearDisplay() {
  display.value = "0";
  display_upper.value = "";
  displayStr.lower = "";
  displayStr.upper = "";
  displayStr.exp = [];
  clear = true;
  afterCalc = false;
  clearMC();
}

// Created 07/09/2020 by Kevin Dong
/* ClearLower clears the lower display (CE). It has no parameters */
function clearLower() {
  display.value = "0";
  displayStr.lower = "";
  if (afterCalc) clearDisplay();
  clear = true;
}

// ClearMC clears the memory buffer. It has no parameters
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

// File Created on 07/02/2020 by Troy Stein
// Edited on 07/09/2020 by Kevin Dong: Removed redundant functions
// How hierarchy works is it reads in each action individually
// Testing is consistent with Kevin's set up of expressions
/*
 There will be a temporary array which will hold numbers in the expression an array of strings
 i.e. 5 + 67 * 78 is ["5", "+","67","*","78"]
 */
// Backspace function
// arr:  The temporary array expression
// ind: last index of array
function backspace() {
  (displayStr.lower !== "" && displayStr.lower !== "0") ? displayStr.lower = displayStr.lower.slice(0, displayStr.lower.length - 1): displayStr.lower = "0";
  display.value = displayStr.lower;
}

/* Edited 07/09/2020 by Kevin Dong: fixes for mem store
 * memReg peeks into most recent value in memory Array and displays to lower display.
 It does NOT mutate the array and it has no parameters */
function memReg() {
  // Show to console
  console.log("You hit MR!");
  // Peak into the memory and display it in display box
  display.value = "" + calculator.mem[calculator.mem.length - 1];
  displayStr.lower = calculator.mem[calculator.mem.length - 1];
  //document.getElementById("display").value = ""+calculator.mem[calculator.mem.length-1];
  // Set clear and memPress flags and call to updateBuffer on right
  clear = true;
  memPress.flag = true;
  updateBuffer();
}

/* memAdd adds the display from the current value in memory array.
 It mutates the array as it updates the memory array value. It has no parameters */
function memAdd() {
  // let display = document.getElementById('display')
  // Show to console
  console.log("You hit M+!");
  let displayNum = parseFloat(document.getElementById('display')
    .value);
  let lastVal = calculator.mem.pop();
  // Add displayNum to value in memory
  calculator.mem.push(displayNum + lastVal);
  console.log("The array is: " + calculator.mem);
  // Set clear and memPress flags and call to updateBuffer on right
  clear = true;
  memPress.flag = true;
  updateBuffer();
}

/* memMinus subtracts the display from the current value in memory array.
 It mutates the array as it updates the memory array value. It has no parameters */
function memMinus() {
  // Show to console
  console.log("You hit M-!");
  let displayNum = parseFloat(document.getElementById('display')
    .value);
  let lastVal = calculator.mem.pop();
  // Subtract the display number from the number in memory
  calculator.mem.push(lastVal - displayNum);
  // Set clear and memPress flags and call to updateBuffer on right
  clear = true;
  memPress.flag = true;
  updateBuffer();
}

/* memStore adds to memory array the value from display and removes any previous value in array.
 It has no parameters */
function memStore() {
  // Show to console
  console.log("You hit MS!");
  let displayNum = parseFloat(document.getElementById('display')
    .value);
  calculator.mem.push(displayNum);
  // Check if memory array has 1+ elements. If so, remove the earliest element as it is not needed anymore
  if (calculator.mem.length > 1) calculator.mem.shift();
  // update clear so numbers can be cleared the next time user clicks
  clear = true;
  memPress.flag = true;
  updateBuffer();
}

/* Created on 07/09/2020 by Troy Stein
 * Toggles between degrees/radians
 * Edited on 07/10/2020 by Kevin Dong: Refactor
 */

function getAngle() {
  if (e.checked) {
    return "DEG";
  }
  return "RAD";
}

e = document.getElementById("angle");
e.addEventListener("click", getAngle, false);