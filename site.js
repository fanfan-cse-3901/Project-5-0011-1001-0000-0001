// File Created on 07/01/2020 by Yifan Yao

var currentValue = "";
var priorValue = "";
var result = "";
var i, j, k;

var number = document.getElementsByName("number");
var display = document.getElementById("display");
var operation = document.getElementsByName("operation");

var getNum = function() {
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
