//Created on 07/09/2020 by Troy Stein
let e = document.getElementById("angle");

function getAngle(){
  if(e.checked) {
    return "DEG";
  }
  return "RAD";
}
//creates listener
e.addEventListener("click", getAngle,false);
