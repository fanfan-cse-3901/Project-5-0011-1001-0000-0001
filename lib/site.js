// File Created on 07/01/2020 by Yifan Yao
// Edited on 07/09/2020 by Kevin Dong: Moved display upper
let currentValue = "";
let i, j;

let number = document.getElementsByName("number");
let display = document.getElementById("display");
let display_upper = document.getElementById("display_upper");

// Edited on 07/09/2020 by Kevin Dong: currStatus object for globals
// Handles things like global array, nesting, and accumulation
let displayStr = {
  // This string is shown in the upper part of the display
  // "8+6+sqr(sqr(5))"
  upper: "",
  // This is the calculation shown in the lower part of the display
  // "625"
  lower: "",
  // This array has elements with only numbers and +-*/ passed to the get the value
  // ["8","+","6","+","625"]
  exp: []
}

// Variables Created on 07/08/2020 by Amanda Cheng: Refreshes display after each operation
// Edited on 07/09/2020 by Kevin Dong: added variable for clearing after exp compute
// and displays right buffer (either historyor memory)
let clear = false;
let afterCalc = false;
let memPress = {flag: false};

// Edited 07/09/2020 by Kevin Dong: For new display
// display number once user clicked it
function getNum() {
  if (afterCalc) {
    displayStr.lower = this.value;
    display.value = displayStr.lower;
    displayStr.upper = "";
    display_upper.value = displayStr.upper;
    afterCalc = false;
  } else if (display.value === "0" || clear) {
    displayStr.lower = this.value;
    display.value = displayStr.lower; // first digit when user clicked
    if (this.value === ".") {
      displayStr.lower += this.value;
      display.value = "0.";
    }
    clear = false;
  } else {
    displayStr.lower += this.value;
    display.value = displayStr.lower; // add digit once user clicked on it
    currentValue = display.value;
  }

}

// when user input numbers into textbox directly
display.addEventListener("input", function () {
  if (/^\d+(\.)?\d*$/.test(this.value)) {
    displayStr.lower += this.value;
    display.value = displayStr.lower;
    currentValue = this.value;
    console.log(currentValue);
  } else {
    this.value = currentValue;
    console.log(currentValue);
  }

});

// when user clicked any button from "number" class
for (i = 0, j = number.length; i < j; i++) {
  number[i].addEventListener("click", getNum, false);
}