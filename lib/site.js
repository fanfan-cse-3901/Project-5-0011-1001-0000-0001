// File Created on 07/01/2020 by Yifan Yao

let currentValue = "";
let i, j;

let number = document.getElementsByName("number");
let display = document.getElementById("display");
let operation = document.getElementsByName("operation");

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

// display number once user clicked it
function getNum() {
  if (display.value === "0") {
    display.value = this.value; // first digit when user clicked
    if (this.value === ".") {
      display.value = "0.";
    }
  } else {
    display.value += this.value; // add digit once user clicked on it
    currentValue = display.value;
  }

  disableButton(/\./, ".");
};

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