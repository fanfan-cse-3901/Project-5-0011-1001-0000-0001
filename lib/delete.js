// File Created on 07/02/2020 by Troy Stein
// Edited on 07/09/2020 by Kevin Dong: Removed redundant functions
//How hierarchy works is it reads in each action individually
// Testing is consistent with Kevin's set up of expressions
/*
 There will be a temporary array which will hold numbers in the expression an array of strings
 i.e. 5 + 67 * 78 is ["5", "+","67","*","78"]
 */
//Backspace function
//arr:  The temporary array expression
//ind: last index of array
document.getElementsByName("delete")[2].addEventListener("click", backspace);
function backspace() {
  display.value = display.value.substr(0,displayStr.length-1);
  displayStr.lower = displayStr.lower.substr(0,displayStr.lower.length-1);
}