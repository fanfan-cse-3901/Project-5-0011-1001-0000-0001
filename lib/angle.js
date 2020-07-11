/* Created on 07/09/2020 by Troy Stein
 * Toggles between degrees/radians
 * Edited on 07/10/2020 by Kevin Dong: Refactor
 */
document.getElementById("angle").addEventListener("click", function(){
  if (document.getElementById("angle").checked) {
    return "DEG";
  }
  return "RAD";
},false);
