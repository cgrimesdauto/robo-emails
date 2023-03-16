function copyOutput() {
  var copyText = document.getElementById("outputHTML");

  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  document.execCommand('copy');
  
  document.getElementById("copyConfirm").innerHTML = "Text copied! Good luck on your email!";
  
}


function test(){
  
  //reset the output box to empty
  document.getElementById("outputHTML").value = "";
  
  //get the content to be filled
  var name = document.getElementById("name").value;
  var title = document.getElementById("title").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  
  if (document.getElementById("dauto").checked == true) {
    var company = "Dressler Automation";
    }
    else{ 
    var company = "RoboLive";
  }
  
  //generate the html
  var outputHTML = ``;
  var outputHTMLDE = ` `
  

  //output the correct template depending on language
  if (document.getElementById("langEN").checked == true) {
    document.getElementById("outputHTML").value = outputHTML;
    
  }
  else{
    
    document.getElementById("outputHTML").value = outputHTMLDE;
 
  }
  
  
  }
