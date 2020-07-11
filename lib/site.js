// File Created on 07/01/2020 by Yifan Yao
// Edited on 07/02/2020 by Yifan Yao: Change attribute form class to name
// Edited on 07/02/2020 by Yifan Yao: Switch `var` to `let`
// Edited on 07/07/2020 by Yifan Yao: Remove unnecessary variables
// Edited on 07/09/2020 by Kevin Dong: Moved display upper
// Edited on 07/09/2020 by Prachiti Garge: Created displayStr object
// Edited on 07/10/2020 by Yifan Yao: Allow ERROR message in display
// Edited on 07/10/2020 by Kevin Dong: Refactor

let currentValue = "";
let number = document.getElementsByName("number");
let display = document.getElementById("display");
// Upper display: Created by Prachiti Garge
let display_upper = document.getElementById("display_upper");
let ERROR = "ERROR: Press a number";

// displayStr created on 07/09/2020 by Prachiti Garge
// Has upper string, lower string and array of strings.
function CurrStatus(up, down, arr){
  // This string is shown in the upper part of the display
// "8+6+sqr(sqr(5))"
  this.upper = up;
  // This is the calculation shown in the lower part of the display
// "625"
  this.lower = down;
  // This array has elements with only numbers and +-*/ passed to the get the value
// ["8","+","6","+","625"]
  this.exp = arr;
}
let displayStr = new CurrStatus("","",[]);

// Edited on 07/10/2020 by Yifan Yao: Add validation object
let validation = {
  number: /^\d+(\.)?\d*$/,
  scientific: /[1-9](\.)\d+?e(\+\-)\d+/
}

// Variables Created on 07/08/2020 by Amanda Cheng: Refreshes display after each operation
// Edited on 07/09/2020 by Kevin Dong: added variable for clearing after exp compute
// and displays right buffer (either historyor memory)
// Edited 07/09/2020 by Kevin Dong: For new display
let clear = false;
let afterCalc = false;
let memPress = {
  flag: false
};

// display number once user clicked it
// Edited on 07/02/2020 by Yifan Yao: Let textbox display number from user input
// Edited on 07/07/2020 by Yifan Yao: Add functions for disableButton
// Edited on 07/07/2020 by Yifan Yao: Call disableButton() after "." clicked
function getNum() {
  if (afterCalc) {
    displayStr.lower = this.value;
    display.value = displayStr.lower;
    displayStr.upper = "";
    display_upper.value = displayStr.upper;
    afterCalc = false;
  } else if (this.value === "+/-") {
    (displayStr.lower !== "" && displayStr.lower !== "0") ? displayStr.lower = "-" + displayStr.lower : displayStr.lower = "0";
    display.value = displayStr.lower;
  } else if (display.value === "0" || display.value === "" || clear || display.value === ERROR) {
    displayStr.lower = this.value;
    display.value = displayStr.lower; // first digit when user clicked
    if (this.value === ".") {
      displayStr.lower += this.value;
      // when user clicked ".", make it to "0."
      display.value = "0.";
    }
    clear = false;
  } else if (validation.number.test(display.value + this.value)) {
    // when user contructed a valid number, add it to it
    displayStr.lower += this.value;
    display.value = displayStr.lower;
    currentValue = display.value;
  } else {
    // otherwise, replace it with pervious value
    display.value = currentValue;
  }
  // disableButton(/\./, ".");
}

// when user input numbers into textbox directly
// Edited on 07/09/2020 by Yifan Yao: Logic error fixed: input validation
// Edited on 07/10/2020 by Yifan Yao: Scientific notation is permitted
display.addEventListener("input", function () {
  if (this.value === ERROR) {
    currentValue = "";
  } else if (validation.number.test(this.value) ||
    validation.scientific.test(display.value + this.value) ||
    this.value === "") {
    displayStr.lower = this.value;
    display.value = displayStr.lower;
    currentValue = this.value;
    console.log(currentValue);
  } else {
    this.value = currentValue;
    console.log(currentValue);
  }
  // disableButton(/\./, ".");
});

// when user clicked any button from "number" class
// Edited on 07/07/2020 by Yifan Yao: Switch from onclick to EventListener
// Edited on 07/09/2020 by Yifan Yao: Switch to forEach loop
number.forEach(function (item) {
  item.addEventListener("click", getNum, false);
});

// Created on 07/10/2020 by Kevin Dong
// Sends interrupt to unary operators
function lockdown() {
  displayStr.lower = ERROR;
  display.value = displayStr.lower;
}