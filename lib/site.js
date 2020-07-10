// File Created on 07/01/2020 by Yifan Yao

// File Edited on 07/09/2020 by Prachiti Garge: Created displayStr object and added

let currentValue = "";
let number = document.getElementsByName("number");
let display = document.getElementById("display");
// Upper display: Created by Prachiti Garge
let display_upper = document.getElementById("display_upper");

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

// Variables Created on 07/08/2020 by Amanda Cheng: Refreshes display after each operation
// Edited on 07/09/2020 by Kevin Dong: added variable for clearing after exp compute
// and displays right buffer (either historyor memory)
// Edited 07/09/2020 by Kevin Dong: For new display
let clear = false;
let afterCalc = false;
let memPress = {
  flag: false
};

// once value in display matches certain criteria, then disable button
// otherwise, enable it
// regExp: condition to disable button
// buttonId: the button need to be disabled, selected via ID
// function disableButton(regExp, buttonId) {
//   let disabledButton = document.getElementById(buttonId);

//   if (regExp.test(display.value)) {
//     disabledButton.disabled = true;
//   } else {
//     disabledButton.disabled = false;
//   }
// }
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
      // when user clicked ".", make it to "0."
      display.value = "0.";
    }
    clear = false;
  } else if (/^\d+(\.)?\d*$/.test(display.value + this.value)) {
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
display.addEventListener("input", function () {
  if (/^\d+(\.)?\d*$/.test(this.value) || this.value === "") {
    displayStr.lower += this.value;
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
number.forEach(function (item) {
  item.addEventListener("click", getNum, false);
});