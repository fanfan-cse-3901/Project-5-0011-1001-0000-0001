/*
Created on 07/09/2020 by Troy Stein
Populates index.html with formatted calculator.
Edited on 07/10/2020 by Kevin Dong: Refactor
*/

//short for button
let butt = {
  number: [7, 8, 9, 4, 5, 6, 1, 2, 3, ".", 0, "+/-"],
  operation: ["÷", "×", "+", "–", "="],
  memory: ["M+", "M-", "MC", "MR", "MS"],
  delete: ["C", "CE", "Backspace"],
  extra: ["|x|", "x^2", "x^(1/2)", "1/x", "pi", "e"],
  trig: ["sin", "cos", "tan", "arcsin", "arccos", "arctan"],
  exp: ["e^x", "^", "10^x", "log", "ln", "logyx"],
  other: ["mod", "%"]
};

//Grabs keys
let keys = Object.keys(butt);
let canDisplay = 0;
let i = 0;
let j = 0;

document.writeln("<table>");
document.writeln("<tr>");
keys.forEach(function (key) {
  if (j++ > 1) {
    butt[key].forEach(function cell(elt) {
      document.writeln("<td><button name=\"" + key + "\" value=\"" + elt + "\">" + elt + "</button></td>");
    });
    if (key === "memory") {
      document.writeln("<td><label class=\"switch\">");
      document.writeln("<input type = \"checkbox\"  id = \"angle\">"); //FIgure out trying to get boolean
      document.writeln("<span class =\"slider\">DEG RAD</span></td>");
    }
    //displays operations
    if (keys[3] === key || canDisplay > 0) {
      //displays numbers
      if (canDisplay >= 1) {
        i = 0;
        while (i < 3) {
          document.writeln("<td><button name=\"number\" value=\"" + butt["number"][(canDisplay - 1) * 3 + i] + "\">" + butt["number"][(canDisplay - 1) * 3 + i++] + "</button></td>");
        }
      }
      document.writeln("<td><button name=\"operation\" value=\"" + butt["operation"][canDisplay] + "\">" + butt["operation"][canDisplay] + "</button></td></tr>");
      canDisplay++;
      if (canDisplay < 4) {
        document.writeln("<tr>");
      }
    }
  }
});
document.writeln("</table><br/>");