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
let butt = {
  number: [7, 8, 9, 4, 5, 6, 1, 2, 3, ".", 0, "+/-"],
  operation: [ "÷", "×" , "+","-","="],
  memory: ["M+", "M-", "MC", "MR", "MS"],
  delete: ["C", "CE", "Backspace"],
  extra: ["|x|", "x^2", "x^(1/2)", "1/x", "pi", "e"],
  trig: ["sin", "cos", "tan", "arcsin", "arccos", "arctan"],
  exp: ["e^x", "x^y", "10^x", "n!", "log", "ln", "logyx"],
  other: ["mod", "%"]
}; //short for button
//Grabs keys
let keys = Object.keys(butt);
let canDisplay = 0;
let i = 0;
let j = 0;
document.writeln("<table>");
document.writeln("<tr>");
keys.forEach(function (key){
  if(j++ > 1) {
    butt[key].forEach(function cell(elt) {
      document.writeln("<td><button name=\"" + key + "\" value=\"" + elt + "\">" + elt + "</button></td>");
    });
    if(key === "memory") {
      document.writeln("<td><label class=\"switch\">");
      document.writeln("<input type = \"checkbox\"  id = \"angle\">"); //FIgure out trying to get boolean
      document.writeln("<span class =\"slider\">DEG RAD</span></td>");
    }
    //displays operations
    if(keys[3] === key || canDisplay > 0){
      //displays numbers
      if(canDisplay >=1) {
        i=0;
        while (i < 3){
          document.writeln("<td><button name=\"number\" value=\"" + butt["number"][(canDisplay - 1) * 3 + i] + "\">" + butt["number"][(canDisplay - 1) * 3 + i++] + "</button></td>");
        }
      }
      document.writeln("<td><button name=\"operation\" value=\"" + butt["operation"][canDisplay] + "\">" + butt["operation"][canDisplay]  + "</button></td></tr>");
      canDisplay++;
      if(canDisplay < 4){
        document.writeln("<tr>");
      }
    }
  }
});
document.writeln("</table><br/>");