// File Created on 07/08/2020 by Amanda Cheng

// The max history buffer is 10 (5 expression-value pairs).
// All the even indexes are values and odd indexes are expressions
var maxLength = 10;
var hist = new Array(maxLength);

function updateHistory(){
    if (hist.length==maxLength){
        hist.shift();
        hist.shift();
    }
    let expr = document.getElementById('display_upper');
    let val = document.getElementById('display_lower');
    hist.push(val, expr);
}