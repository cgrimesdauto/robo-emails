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
  var cta2 = document.getElementById("cta2").value;
  var ctaLink2 = document.getElementById("ctaLink2").value;
  var date = document.getElementById("date").value;
  var month = document.getElementById("month").value;
  var location1 = document.getElementById("location1").value;
  var location2 = document.getElementById("location2").value;
  
  //creating br tags from newlines in the input
   var contentFix = content.replace(/\n/g, "<br>");
   content = contentFix;
  
  //generate the html
  var outputHTML = `<body style="font-family:Tahoma,Arial,sans-serif;font-size:16px;">
<table style="width:600px; background:#ababab;border-collapse: collapse;" >
  
  <!-- TOP HEADER -->  
  <tr style="background-color:#0a1b2a;color:white;height:50px;">
    <th style="">
       <img src="https://robolive.info/wp-content/uploads/2023/03/Robolive-Logo_White_WithoutProtectionZone-1.png" style="width:100px;margin-top:5px;">
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
<table style="width:600px;border-collapse: collapse;">
  <tr style="background:white;color:#0a1b2a;">
    <td style="padding:50px 25px 75px 25px; width:66%;">
      $name,<br><br>
      ${content}
      <br>
                <a href="${ctaLink2}"><button style="margin: 25px 0px 0px 0px;width:100%;padding:10px 0px 10px 0px;background-color:#003c5d;border-radius:30px;border:none;color:white;font-size:16px;font-weight:bold;">${cta}</button></a>
              <a href="${ctaLink2}"><button style="margin: 5px 0px 0px 0px;width:100%;padding:10px 0px 10px 0px;background-color:white;border-radius:30px;border:3px solid #003c5d;color:#003c5d;font-size:16px;font-weight:bold;">${cta2}</button></a>
    </td>
    <td style="padding:25px; background:#f0efed;text-align:center;">
      <img src="https://robolive.info/wp-content/uploads/2023/03/email-info-icon-2.png" style="padding-bottom:25px; width:150px;">
      ${month}<BR>
      <h2 style="font-size:48px;margin:0px;">${date}</h2>
      <span style="font-size:12px;">
        ${location1}<br>
        ${location2}<br>
      </span>
      
    </td>
  </tr>
</table>
    
    
<!-- FOOTER--> 
<table style="width:600px;text-align:center;border-collapse: collapse;">
  <tr>
    <td style="color:white;background:#003c5d;background-image:url('https://robolive.info/wp-content/uploads/2023/03/email-header-bg.png');height:50px;font-size:14px;" >
      
      <a href="Tel: 423-661-2088"><img src="https://robolive.info/wp-content/uploads/2023/03/PHONE-MAIL-ICON.png" style="width:30px;margin-top:5px;"></a>
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
        &copy; RoboLive<span style="font-size:8px;"><sup>®</sup></span> 2023 - All rights reserved.<br />Don't want to receive further communication? <a href="#" style="color:#fff;">Click here to unsubscribe</a>.
    </td>
  </tr>
  
</table>
</body>`;
  
  var outputHTMLDE = `<body style="font-family:Tahoma,Arial,sans-serif;font-size:16px;">
<table style="width:600px; background:#ababab;border-collapse: collapse;" >
  
  <!-- TOP HEADER -->  
  <tr style="background-color:#0a1b2a;color:white;height:50px;">
    <th style="">
       <img src="https://robolive.info/wp-content/uploads/2023/03/Robolive-Logo_White_WithoutProtectionZone-1.png" style="width:100px;margin-top:5px;">
    </th>
    <th style="text-align:right;font-size:14px;padding:10px;">
      TRANSPARENZ BEI FERTIGUNGSROBOTERN
      
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
<table style="width:600px;border-collapse: collapse;">
  <tr style="background:white;color:#0a1b2a;">
    <td style="padding:50px 25px 75px 25px; width:66%;">
      $name,<br><br>
      ${content}
      <br>
                <a href="${ctaLink2}"><button style="margin: 25px 0px 0px 0px;width:100%;padding:10px 0px 10px 0px;background-color:#003c5d;border-radius:30px;border:none;color:white;font-size:16px;font-weight:bold;">${cta}</button></a>
              <a href="${ctaLink2}"><button style="margin: 5px 0px 0px 0px;width:100%;padding:10px 0px 10px 0px;background-color:white;border-radius:30px;border:3px solid #003c5d;color:#003c5d;font-size:16px;font-weight:bold;">${cta2}</button></a>
    </td>
    <td style="padding:25px; background:#f0efed;text-align:center;">
      <img src="https://robolive.info/wp-content/uploads/2023/03/email-info-icon-2.png" style="padding-bottom:25px; width:150px;">
      ${month}<BR>
      <h2 style="font-size:48px;margin:0px;">${date}</h2>
      <span style="font-size:12px;">
        ${location1}<br>
        ${location2}<br>
      </span>
      
    </td>
  </tr>
</table>
    
    
<!-- FOOTER--> 
<table style="width:600px;text-align:center;border-collapse: collapse;">
  <tr>
    <td style="color:white;background:#003c5d;background-image:url('https://robolive.info/wp-content/uploads/2023/03/email-header-bg.png');height:50px;font-size:14px;" >
      
      <a href="Tel: 423-661-2088"><img src="https://robolive.info/wp-content/uploads/2023/03/PHONE-MAIL-ICON.png" style="width:30px;margin-top:5px;"></a>
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
        &copy; RoboLive<span style="font-size:8px;"><sup>®</sup></span> 2023 - Alle Rechte vorbehalten.<br />Sie möchten keine weiteren E-Mails mehr von uns erhalten? Dann klicken Sie <a href="#" style="color:#fff;">hier</a>.
    </td>
  </tr>
  
</table>
</body> `
    
    
  
    
  

  //output the correct template depending on language
 
  if (document.getElementById("langEN").checked == true) {
    document.getElementById("outputHTML").value = outputHTML;
    
  }
  else{
    
    document.getElementById("outputHTML").value = outputHTMLDE;
 
  }
  
  
  }
