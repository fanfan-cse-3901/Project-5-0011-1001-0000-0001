// File Created on 07/01/2020 by Yifan Yao

let currentValue = "";
let number = document.getElementsByName("number");
let display = document.getElementById("display");

// Variables Created on 07/08/2020 by Amanda Cheng: Refreshes display after each operation
// and displays right buffer (either historyor memory)
let clear = false;
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
  if (display.value === "0" || clear) {
    display.value = this.value; // first digit when user clicked
    if (this.value === ".") {
      // when user clicked ".", make it to "0."
      display.value = "0.";
    }
    clear = false;
  } else if (/^\d+(\.)?\d*$/.test(display.value + this.value)) {
    // when user contructed a valid number, add it to it
    display.value += this.value;
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