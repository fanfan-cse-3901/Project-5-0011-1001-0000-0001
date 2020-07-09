// File Created on 07/08/2020 by Amanda Cheng
// File Edited on 07/09/2020 by Amanda Cheng: Fixed history buffer bugs

// The max history buffer is 10 (5 expression-value pairs).
// All the even indexes are values and odd indexes are expressions
const maxLength = 10;
hist = [];
// Get div element to be able to dynamically replace text in hmtl
var histElement = document.getElementById('history')

/* updateBuffer displays to html either the memory buffer
or the history buffer based on buttons user pressed */
function updateBuffer() {
  // Check if memory operation button is pressed.
  // If not, show history Buffer. If so, show memory buffer
  if(!memPress.flag){
    updateHistory();
  }else{
    updateMemory();
  }
}

/* updateHistory displays to html the history buffer. It mutates the history array
based on the display values and output to html. It has no parameters. */
function updateHistory() {
  histElement.innerHTML;
  histElement.innerHTML= "<h3>History</h3>";
  if (hist.length == maxLength) {
    hist.shift();
    hist.shift();
  }
  let expr = document.getElementById('display_upper').value;
  let val = document.getElementById('display').value;
  // Push to history buffer the display values
  hist.push(val, expr);
  // Write out the history buffer starting right end
  for(i=0; i<hist.length; i++){
    // If even index, just output it with no boldness
    if (i%2==0){
      histElement.innerHTML+=hist[hist.length-1-i] + "<br />";
      console.log(hist[hist.length-1-i]);
    }else{
      // Keep this for future: histElement.style.fontWeight='bold';
      histElement.innerHTML+="<h3>"+hist[hist.length-1-i] +"</h3>";
      console.log(hist[hist.length-1-i]);
      // for each odd index (end of expr-val pair), output break to separate each entry pair
      console.log("");
      // Keep this for future outlook of buffer: histElement.innerHTML+="----------<br />";
    }
  }
}
/* updateMemory displays to html the memory buffer. It does NOT mutate the memory buffer,
but simply reads it. It has no parameters */
function updateMemory() {
  //A memory operation button is pressed. Show Memory Buffer Instead
  histElement.innerHTML;
  histElement.innerHTML="<h3>Memory</h3>";
  histElement.innerHTML +="<h3>"+calculator.mem[calculator.mem.length-1]+"</h3>";
  // Also output to console for debugging purposes;
  console.log(calculator.mem[calculator.mem.length-1]);
  // Set memPress back to false so when other operations are done, it only hshows history buffer
  memPress.flag = false;
}
/* When html first loads, show history buffer since no memory buttons are pressed */
updateBuffer()