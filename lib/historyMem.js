// File Created on 07/08/2020 by Amanda Cheng

// The max history buffer is 10 (5 expression-value pairs).
// All the even indexes are values and odd indexes are expressions
const maxLength = 10;
var hist = new Array(maxLength);
hist = ["1","1+0","4", "2^2"]
// Get div element to be able to dynamically replace text in hmtl
var histElement = document.getElementById('history')


function updateBuffer() {
  // Check if memory operation button is pressed.
  // If not, show history Buffer. If so, show memory buffer
  if(!memPress.flag){
    updateHistory();
  }else{
    updateMemory();
  }
}
function updateHistory() {
  histElement.innerHTML;
  histElement.innerHTML= "<h3>History</h3>";
  if (hist.length == maxLength) {
    hist.shift();
    hist.shift();
  }
  //let expr = document.getElementById('display_upper');
  //let val = document.getElementById('display');
  val = "5"
  expr = "4+1"
  hist.push(val, expr);
  // Write out the history buffer starting right end
  for(i=0; i<hist.length; i++){
    histElement.innerHTML+=hist[hist.length-1-i] + "<br />";
    console.log(hist[hist.length-1-i]);
    // for each odd index (end of expr-val pair), output break to separate each entry pair
    if (i%2!=0){
      console.log("");
      histElement.innerHTML+="----------<br />";
    }
  }
}

function updateMemory() {
  //A memory operation button is pressed. Show Memory Buffer Instead
  histElement.innerHTML;
  histElement.innerHTML="<h3>Memory</h3>";
  histElement.innerHTML +=calculator.mem[calculator.mem.length-1];
  // Also output to console for debugging purposes;
  console.log(calculator.mem[calculator.mem.length-1]);
  // Set memPress back to false so when other operations are done, it only hshows history buffer
  memPress.flag = false;
}

updateBuffer()