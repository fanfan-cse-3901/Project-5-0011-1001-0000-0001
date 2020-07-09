// File Created on 07/08/2020 by Amanda Cheng

// The max history buffer is 10 (5 expression-value pairs).
// All the even indexes are values and odd indexes are expressions
const maxLength = 10;
var hist = new Array(maxLength);
hist = ["1","1+0","4", "2^2"]
function updateHistory() {
  document.write("<h3>History</h3>");
  if (hist.length == maxLength) {
    hist.shift();
    hist.shift();
  }
  //let expr = document.getElementById('display_upper');
  //let val = document.getElementById('display');
  val = "5"
  expr = "4+1"
  hist.push(val, expr);
  // Write out the history buffer
  for(i=0; i<hist.length; i++){
    document.writeln(hist[hist.length-1-i]);
    console.log(hist[hist.length-1-i]);
    if (i%2!=0){
      console.log("");
      document.writeln("");
    }

  }
}
updateHistory()