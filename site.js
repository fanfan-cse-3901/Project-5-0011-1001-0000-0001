// File Created on 07/01/2020 by Yifan Yao

let currentValue = "";
let priorValue = "";
let result = "";
let i, j, k;

let number = document.getElementsByName("number");
let display = document.getElementById("display");
let operation = document.getElementsByName("operation");

function getNum() {
  // display number once user clicked it
  if (display.value === "0") {
    // first digit when user clicked
    display.value = this.value;
    if (this.value === ".") {
      display.value = "0.";
    }
  } else {
    // add digit once user clicked on it
    display.value += this.value;
    currentValue = display.value;
  }
};

// once value in display matches certain criteria, then disable button
// otherwise, enable it
// regExp: condition to disable button
// buttonId: the button need to be disabled, selected via ID
function disableButton(regExp, buttonId) {
  let disabledButton = document.getElementById(buttonId);

  if (regExp.test(display.value)) {
    disabledButton.disabled = true;
  } else {
    disabledButton.disabled = false;
  }
}

display.addEventListener("input", function () {
  if (/^\d+(\.)?\d*$/.test(this.value)) {
    currentValue = this.value;
    console.log(currentValue);
  } else {
    this.value = currentValue;
    console.log(currentValue);
  }

  disableButton(/\./, ".");
});

// when user clicked any button from "number" class
for (i = 0, j = number.length; i < j; i++) {
  number[i].addEventListener("click", getNum, false);
}