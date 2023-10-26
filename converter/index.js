document.addEventListener("input", test);

function test() {
  
  //get the inputs
  var first_name = document.getElementById("first_name").value;
  var last_name = document.getElementById("last_name").value;
  var company_url = document.getElementById("company_url").value;
  
  var format = document.querySelector("#format").value;
  var output = "";
  
  switch(format) {
    case "first_dot_last":
      output=(first_name+"."+last_name+"@"+company_url);
      break;
    case "first_last":
      output=(first_name+last_name+"@"+company_url);
      break;
    case "initial_dot_last":
      output=(first_name.charAt(0)+"."+last_name+"@"+company_url);
      break;
    case "initial_last":
      output=(first_name.charAt(0)+last_name+"@"+company_url);
      break;
  }
  
  //output the reformatted address
  document.getElementById("output").value = output;
  
  //clear the copy confirmation
  document.getElementById("confirmation").innerHTML = "";

}

function copy() {
  //copy whats in the output
  output.select();
  document.execCommand("copy");
  output.setSelectionRange(0,0);
  
  //confirmation message
  document.getElementById("confirmation").innerHTML = " copied :)";
  
}
