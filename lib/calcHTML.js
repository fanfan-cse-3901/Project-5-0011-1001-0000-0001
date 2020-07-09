/*//declares all necesary variables
let files =[];
let childElement,appendChildElement,parentElement;
// gets all .js files
files.push({src:"calc.js"});
files.push({src:"site.js"});
console.log(files)

//e1.addEventListener("click",function, false) chained registration it is also in lecture 23 slides
// adds children like a linked list
for (let file of files){
    childElement = document.createElement('script');
    appendChildElement = parentElement.appendChild(childElement);
}*/
// calcHTML.js -> index.html -> browser
let nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, ".", 0, "+/-"]; //number class
let ops = ["=", "–", "+", "×", "÷"]; //operation class
let del = ["C", "CE", "Backspace"]; //delete class
let mem = ["+", "-", "C", "R", "S"]; //memory class
let x = ["|x|", "x^2", "x^(1/2)", "1/x", "pi", "e"]; //extra class
let trig = ["sin", "cos", "tan", "arcsin", "arccos", "arctan"]; //trig class
let exp = ["e^x", "x^y", "n!", "log", "ln", "logyx"]; //exp class
let o = ["10^x", "exp", "mod", "(", ")", "%"];
//document.getElementsByName("number");
document.writeln("<table>");
document.writeln("<tr>");
mem.forEach(function (elt) {
  document.writeln("<td><button name=\"memory\" value=\"M" + elt + "\">M" + elt + "</button></td>");
});
document.writeln("<td><label class=\"switch\">");
document.writeln("<input type = \"checkbox\"  id = \"angle\">"); //FIgure out trying to get boolean
document.writeln("<span class =\"slider\"> Deg  Rad  </span>");
document.writeln("</label></td>");
del.forEach(function (elt) {
  document.writeln("<td><button name=\"delete\" value=\"" + elt + "\" id =\"clear\">" + elt + "</button></td>");
});
document.writeln("<td><button name=\"operations\" value=\"" + ops[4] + "\">" + ops[4] + "</button></td></tr>");
nums.forEach(function (elt) {
  if (elt % 3 === 1 || elt === ".") {
    document.writeln("<tr>");
    //logic for displaying buttons
    if (elt === 7) {
      //X-class
      x.forEach(function (e) {
        document.writeln("<td><button name=\"x\" value=\"" + e + "\">" + e + "</button></td>");
        document.createElement("p");

      });
    } else if (elt === 4) {
      trig.forEach(function (e) {
        document.writeln("<td><button name=\"trig\" value=\"" + e + "\">" + e + "</button></td>");
      });
    } else if (elt === 1) {
      exp.forEach(function (e) {
        document.writeln("<td><button name=\"exp\" value=\"" + e + "\">" + e + "</button></td>");
      });
    } else {
      o.forEach(function (e) {
        document.writeln("<td><button name=\"other\" value=\"" + e + "\">" + e + "</button></td>");
      });
    }
  }
  document.writeln("<td><button name=\"number\" value=\"" + elt + "\">" + elt + "</button></td>");
  if ((elt % 3 === 0 || elt === "+/-") && elt !== 0) {
    if (elt === "+/-") {
      elt = 0;
    }
    document.writeln("<td><button name=\"operations\" value=\"" + ops[elt / 3] + "\">" + ops[elt / 3] + "</button></td>");
    document.writeln("</tr>");
  }
});
document.writeln("</table></div>");
//Tests for calculator set up
//Test 1 //Success
// 7 8 9
// 4 5 6
// 1 2 3
// . 0
//Test 2 //Success
// /
// 7 8 9 *
// 4 5 6 -
// 1 2 3 +
// . 0 +/- =
//Test 3 //Success
// MC MR M+ M-,MS,Switch (DEG/RAD) C CE Backspace /
// 7 8 9 *
// 4 5 6 -
// 1 2 3 +
// . 0 +/- =
//Test 4 photo in document
//Test 4 //sucess