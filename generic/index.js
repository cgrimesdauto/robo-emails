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
  var content = document.getElementById("content").value;
  var cta = document.getElementById("cta").value;
  var ctaLink = document.getElementById("ctaLink").value;
  var title = document.getElementById("title").value;
  
  //generate the html
  var outputHTML = `<body style="font-family:Arial;font-size:16px;">

<table style="width:600px; background:#ababab;border-collapse: collapse;" >
  
  <!-- TOP HEADER -->  
  <tr style="background-color:#0a1b2a;color:white;height:50px;">
    <th style="">
       <img src="https://robolive.info/wp-content/uploads/2023/03/Robolive-Logo_White_WithoutProtectionZone-1.png" style="width:100px;">
    </th>
    <th style="text-align:right;font-size:14px;padding:10px;">
      TRANSPARENCY FOR PRODUCTION ROBOTS
      
    </th>
  </tr>
</table>
  
  <!-- HERO --> 
<table style="width:600px;border-collapse: collapse;">
  <tr style="color:white;background:#003c5d;background-image:url('https://robolive.info/wp-content/uploads/2023/03/email-header-bg.png')" >
    <td style="padding:25px; height:100px;">
      <h1 style="margin:0px;">${title}</h1>

    </td>
  </tr>
</table>



<!-- MAIN CONTENT--> 

<table style="width:600px;margin-top:10px;border-collapse: collapse;">
  <tr style="background:white;color:#0a1b2a;">
    <td style="padding:25px;">
      $name,<br><br>
      
      ${content}
      
      <br>
        
        <a href="${ctaLink}"><button style="margin: 25px 0px 0px 0px;width:100%;padding:10px 0px 10px 0px;background-color:#003c5d;border-radius:30px;border:none;color:white;font-size:16px;font-weight:bold;">${cta}</button></a> 
    </td>
  </tr>
</table>
    
    
<!-- FOOTER--> 
<table style="width:600px;text-align:center;margin-top:50px;border-collapse: collapse;">
  <tr>
    <td style="color:white;background:#003c5d;background-image:url('https://robolive.info/wp-content/uploads/2023/03/email-header-bg.png');height:50px;font-size:14px;" >
      
      <a href="Tel: 423-661-2088"><img src="https://robolive.info/wp-content/uploads/2023/03/PHONE-MAIL-ICON.png" style="width:30px;"></a>
      <a href="https://www.linkedin.com/showcase/robolivedeu/"><img src="https://robolive.info/wp-content/uploads/2023/03/LINKEDIN-MAIL-ICON.png" style="width:30px;"></a>
      <a href="mailto:usa@dautomation.com"><img src="https://robolive.info/wp-content/uploads/2023/03/MAIL-MAIL-ICON.png" style="width:30px;"></a>
    </td>
  </tr>
  
  <!-- FOOTER BOTTOM --> 
  <tr style="color:white;background-color:#0a1b2a;">
    <td style="padding:50px;font-size:14px;">
      <img src="https://robolive.info/wp-content/uploads/2023/03/Robolive-Logo_White_WithoutProtectionZone-1.png" style="width:200px;padding:10px;"><br>
      RoboLive<span style="font-size:10px;"><sup>®</sup></span> | Transparency for Production Robots
    </td>
  </tr>
  <tr style="font-size:12px;color:white;background-color:#0a1b2a;">
    <td>
      Dressler Automation Corp.<br>
      102 Jordan Drive, Chattanooga TN 37421<br>
      Tel. (423) 661-2088<br>
      Email: <a href="mailto:usa@dautomation.com" style="color: #65a4d4">usa@dautomation.com</a><br>
      <a href="robolive.info" style="color: #65a4d4">robolive.info</a>
    </td>
  </tr>
  
  <tr style="font-size:12px;color:white;background-color:#0a1b2a;">
    <td style="padding-bottom:50px;">
        &copy; Robolive 2023 - All rights reserved.<br />Don't want to receive further communication? <a href="#" style="color:#fff;">Click here to unsubscribe</a>.
    </td>
  </tr>
  
</table>


</body>
    
    
  
    `;
  
  var outputHTMLDE = `<body style="font-family:Arial;font-size:16px;">

<table style="width:600px; background:#ababab;border-collapse: collapse;" >
  
  <!-- TOP HEADER -->  
  <tr style="background-color:#0a1b2a;color:white;height:50px;">
    <th style="">
       <img src="https://robolive.info/wp-content/uploads/2023/03/Robolive-Logo_White_WithoutProtectionZone-1.png" style="width:100px;">
    </th>
    <th style="text-align:right;font-size:14px;padding:10px;">
      TRANSPARENCY FOR PRODUCTION ROBOTS
      
    </th>
  </tr>
</table>
  
  <!-- HERO --> 
<table style="width:600px;border-collapse: collapse;">
  <tr style="color:white;background:#003c5d;background-image:url('https://robolive.info/wp-content/uploads/2023/03/email-header-bg.png')" >
    <td style="padding:25px; height:100px;">
      <h1 style="margin:0px;">${title}</h1>

    </td>
  </tr>
</table>



<!-- MAIN CONTENT--> 

<table style="width:600px;margin-top:10px;border-collapse: collapse;">
  <tr style="background:white;color:#0a1b2a;">
    <td style="padding:25px;">
      $name,<br><br>
      
      ${content}
      
      <br>
        
        <a href="${ctaLink}"><button style="margin: 25px 0px 0px 0px;width:100%;padding:10px 0px 10px 0px;background-color:#003c5d;border-radius:30px;border:none;color:white;font-size:16px;font-weight:bold;">${cta}</button></a> 
    </td>
  </tr>
</table>
    
    
<!-- FOOTER--> 
<table style="width:600px;text-align:center;margin-top:50px;border-collapse: collapse;">
  <tr>
    <td style="color:white;background:#003c5d;background-image:url('https://robolive.info/wp-content/uploads/2023/03/email-header-bg.png');height:50px;font-size:14px;" >
      
      <a href="Tel: 05332-93060"><img src="https://robolive.info/wp-content/uploads/2023/03/PHONE-MAIL-ICON.png" style="width:30px;"></a>
      <a href="https://www.linkedin.com/showcase/robolivedeu/"><img src="https://robolive.info/wp-content/uploads/2023/03/LINKEDIN-MAIL-ICON.png" style="width:30px;"></a>
      <a href="mailto:usa@dautomation.com"><img src="https://robolive.info/wp-content/uploads/2023/03/MAIL-MAIL-ICON.png" style="width:30px;"></a>
    </td>
  </tr>
  
  <!-- FOOTER BOTTOM --> 
  <tr style="color:white;background-color:#0a1b2a;">
    <td style="padding:50px;font-size:14px;">
      <img src="https://robolive.info/wp-content/uploads/2023/03/Robolive-Logo_White_WithoutProtectionZone-1.png" style="width:200px;padding:10px;"><br>
      RoboLive<span style="font-size:10px;"><sup>®</sup></span> | Transparenz bei Fertigungsrobotern
    </td>
  </tr>
  <tr style="font-size:12px;color:white;background-color:#0a1b2a;">
    <td>
      Dressler Automation GmbH<br>
      Braunschweiger Straße 20<br>
      38170 Schöppenstedt<br>
      Tel.:   05332 93060<br>
      Email: <a href="mailto:deu@dautomation.com" style="color: #65a4d4">deu@dautomation.com</a><br>
      <a href="robolive.info/de" style="color: #65a4d4">robolive.info</a>
    </td>
  </tr>
  
  <tr style="font-size:12px;color:white;background-color:#0a1b2a;">
    <td style="padding-bottom:50px;">
        &copy; Robolive 2023 - Alle Rechte vorbehalten.<br />Sie möchten keine weiteren E-Mails mehr von uns erhalten? Dann klicken Sie <a href="#" style="color:#fff;">hier</a>.
    </td>
  </tr>
  
</table>


</body>
    
    
  
     `
  

  //output the correct template depending on language
 
  if (document.getElementById("langEN").checked == true) {
    document.getElementById("outputHTML").value = outputHTML;
    
  }
  else{
    
    document.getElementById("outputHTML").value = outputHTMLDE;
 
  }
  
  
  }
