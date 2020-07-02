// File Created on 07/01/2020 by Yifan Yao

let currentValue = "";
let priorValue = "";
let result = "";
let i, j, k;

let number = document.getElementsByName("number");
let display = document.getElementById("display");
let operation = document.getElementsByName("operation");

let getNum = function() {
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

  // disable "." once clicked
  if (this.value === ".") {
    this.disabled = true;
  }
};

// when user clicked any button from "number" class
for (i = 0, j = number.length; i < j; i++) {
  number[i].onclick = getNum;
}
