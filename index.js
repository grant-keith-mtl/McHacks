function newPlan(){
  var icon = document.getElementById("plus_sign")
  if(icon.className == "fas fa-plus"){
    icon.className = "fas fa-minus";
  }
  else{
    icon.className = "fas fa-plus";
  }
 
}