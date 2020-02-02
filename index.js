function newPlan(){
  var icon = document.getElementById("plus_sign");
  var newPlans = document.getElementById("newPlans");
  if(icon.className == "fas fa-plus"){
    icon.className = "fas fa-minus";
    newPlans.style.display = "block";
  }
  else{
    icon.className = "fas fa-plus";
    newPlans.style.display = "none";
  }
 
}