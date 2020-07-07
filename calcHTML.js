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
let nums =[7,8,9,4,5,6,1,2,3,".",0,"+/-"]; //number class
let ops = ["=","-","+","*","/"]; //operation class
let del = ["C","CE","Backspace"]; //delete class
let mem = ["+","-","C","R","S"]; //memory class
let x = ["|x|","x^2","x^(1/2)","1/x","pi","e"]; //extra class
let trig =  ["sin","cos","tan","arcsin","arccos","arctan"]; //trig class
let exp =  ["e^x","x^y","n!","log","ln","logyx"]; //exp class
let o = ["10^x","exp","mod","(",")","%"];
//document.getElementsByName("number");
document.writeln("<table>");
document.writeln("<tr>");
mem.forEach(function (elt){
    document.writeln("<td><button name=\"operation\" value=\"M"+elt+"\">M"+elt+"</button></td>");
});
del.forEach(function (elt){
    document.writeln("<td><button name=\"delete\" value=\""+elt+"\">"+elt+"</button></td>");
});
document.writeln("<td><button name=\"operation\" value=\""+ops[4]+"\">"+ops[4]+"</button></td></tr>");
nums.forEach(function (elt){
    if(elt%3 === 1 || elt === "."){
        document.writeln("<tr>");
        //logic for displaying buttons
        if(elt === 7){
            //X-class
            x.forEach(function (e){
                document.writeln("<td><button name=\"x\" value=\""+e+"\">"+e+"</button></td>");
                document.createElement("p");

            });
        }
        else if (elt === 4){
            trig.forEach(function (e){
                document.writeln("<td><button name=\"trig\" value=\""+e+"\">"+e+"</button></td>");
            });
        }
        else if (elt === 1){
            exp.forEach(function (e){
                document.writeln("<td><button name=\"exp\" value=\""+e+"\">"+e+"</button></td>");
            });
        }
        else{
            o.forEach(function (e){
                document.writeln("<td><button name=\"other\" value=\""+e+"\">"+e+"</button></td>");
            });
        }
    }
    document.writeln("<td><button name=\"number\" value=\""+elt+"\">"+elt+"</button></td>");
    if((elt%3 === 0 || elt === "+/-" ) && elt !==0){
        if(elt === "+/-"){
            elt = 0;
        }
        document.writeln("<td><button name=\"operation\" value=\""+ops[elt/3]+"\">"+ops[elt/3]+"</button></td>");
       document.writeln("</tr>") ;
    }
})
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

/*for(let num in nums){
    if(num%)
}*/
//document.writeln("<div id=\"calcKeys\">");
/*document.writeln("<table>");
document.writeln("<tr>")
document.writeln("<td><button name=\"number\" value=\"9\">9</button></td></tr>");
document.writeln("<tr><td><button name=\"number\" value=\"8\">8</button></td>");
document.writeln("</tr>");
document.writeln("</table>");*/
//document.writeln("<div>");
//document.getElementById("M+");
///document.write("<ol><li>Hello</li><li>How are you?</li></ol>")












/*document.writeln("<!DOCTYPE html>")
<!-- File Created on 07/01/2020 by Yifan Yao -->
<!-- File Edited on 07/02/2020 by Amanda Cheng: adding Ids and included functions, modified to fit js -->
document.writeln("<html lang=\"en\" class=\"nojs\" id=\"home\">");
document.writeln("<head>");
    document.writeln("<title>Calculator</title>");
    document.writeln(<meta charset=\"utf-8\" />);
    document.writeln("<meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0,shrink-to-fit=no\" />");
    document.writeln("<link rel=\"stylesheet\" media=\"screen\" href=\"screen.css\" />);
    document.writeln("<link rel=\"stylesheet\" href=\"#//basehold.it/22 \" />");
    document.writeln("</head>");
document.writeln("<body>");
document.writeln("<h1>Calculator</h1>");
document.writeln("<div id=\"calculator\">");
    <!-- row 1 -->
    document.writeln("<div>");
    document.writeln("<input type=\"text\" class=\"display\" id=\"display\" value=\"0\" readonly />");
    document.writeln("<label for="display"></label>");
    document.writeln("</div>");
document.writeln("<button id=\"clear\" onclick=\"clearDisplay(calculator.mem)\">C</button>");
document.writeln("<div id=\"calcKeys\">");
        <!-- row 2 -->
    //loop here
    document.writeln(<button name=\"operation\" id=\"M+\" value=\"M+\">M+</button>");
document.writeln("</div>")
document.writeln("</div>");
    //loop here
document.writeln("<script src=\"site.js\"></script>");

document.writeln("</body>");
document.writeln("</html>");
*/