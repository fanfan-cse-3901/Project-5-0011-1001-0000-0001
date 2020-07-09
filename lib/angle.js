//Created on 07/09/2020 by Troy Stein
let e = document.getElementById("angle");

function announceAngle(){
 if(e.checked) {
   window.alert("DEG");
 }
  window.alert("RAD");
}
function getAngle(){
  if(e.checked) {
    return "DEG";
  }
  return "RAD";
}
//creates listener
e.addEventListener("click", announceAngle,false);
