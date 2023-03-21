function copyOutput() {
  var copyText = document.getElementById("outputHTML");

  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  document.execCommand('copy');
  
  document.getElementById("copyConfirm").innerHTML = "Text copied! Good luck on your email!";
  
}


function imagePreview(target,source){
  var sourceSRC = document.getElementById(source).value;
  document.getElementById(target).src = sourceSRC;
}


function test(){
  
  //reset the output box to empty
  document.getElementById("outputHTML").value = "";
  
  //get the content to be filled
  var opening = document.getElementById("opening").value;
  
  var newsTitle = document.getElementById("newsTitle").value;
  var content = document.getElementById("newsContent").value;
  var link = document.getElementById("link").value;
  var src = document.getElementById("src").value;

  
  var closing = document.getElementById("closing").value;
  
  var cta = document.getElementById("cta").value;
  var ctaLink = document.getElementById("ctaLink").value;
  
   //creating br tags from newlines in the input
  var contentFix = content.replace(/\n/g, "<br>");
  content = contentFix;
  
  var closingFix = closing.replace(/\n/g, "<br>");
   closing = closingFix;
  
  
  
  //create the header and footer depending on lang selected
  
    if (document.getElementById("langEN").checked == true) { //if english
      
      var header = `<table style="width: 600px; min-width: 600px; background: #ababab; border-collapse: collapse; font-family: Tahoma, Arial, sans-serif; font-size: 16px;">
  <tbody>
    <tr style="background-color: #0a1b2a; color: #ffffff; height: 50px;">
      <th style="width: 150px;"><a href="robolive.info/de"><img style="width: 100px;padding-top:5px;" src="https://robolive.info/wp-content/uploads/2023/03/LOGO-SCALE-100.png" alt="RoboLive logo" /></a></th>
      <th style="text-align: right; font-size: 14px; padding: 10px; width: 450px;">TRANSPARENCY FOR PRODUCTION ROBOTS</th>
    </tr>
  </tbody>
</table>`;
      var footer = `<!-- FOOTER -->
<table style="width: 600px; min-width: 600px; border-collapse: collapse; color: #ffffff; font-family: Tahoma, Arial, sans-serif; font-size: 16px; background:#0a1b2a;">
  <tbody>
    
        <tr><Td style="padding:0px;">
      <img src="https://robolive.info/wp-content/uploads/2023/03/email-hero-50.png" alt="email-hero-50.png" width="600" height="50" /></td>
    </tr>
    
    <!-- LOGO + TAGLINE -->
    <tr style="color: #ffffff; background-color: #0a1b2a; text-align:center;">
      <td style="padding: 50px; font-size: 14px;"><a href="#"><img style="width: 200px; padding: 10px;" src="https://robolive.info/wp-content/uploads/2023/03/LOGO-SCALE-200.png" alt="Robolive Logo" /></a><br /><br />RoboLive<span style="font-size: 10px;"><sup>&reg;</sup></span> | Transparency for Production Robots</td>
    </tr>
    
    <TR style="color: #ffffff; background-color: #0a1b2a; text-align:center;">
      <td>
        <!-- SOCIAL ICONS -->
        <a href="tel:423-661-2088"><img style="width: 30px; padding-bottom: 8px;" src="https://robolive.info/wp-content/uploads/2023/03/ICON-PHONE-30.png" alt="PHONE" /></a> <a href="https://www.linkedin.com/showcase/77684161"><img style="width: 30px; padding-bottom: 8px;" src="https://robolive.info/wp-content/uploads/2023/03/ICON-LINKEDIN-30.png" alt="LINKEDIN" /></a> <a href="mailto:office@dautomation.com"><img style="width: 30px; padding-bottom: 8px;" src="https://robolive.info/wp-content/uploads/2023/03/ICON-MAIL-30.png" alt="MAIL" /></a>
        </td>
 
        </TR>
    
    <!-- CONTACT + OPT-OUT -->
    <tr style="font-size: 12px; color: #ffffff; background-color: #0a1b2a; text-align:center;">
      <td>Dressler Automation Corp.<br />102 Jordan Drive, Chattanooga TN 37421<br />Tel. (423) 661-2088<br />Email: <a style="color: #65a4d4;" href="mailto:usa@dautomation.com">usa@dautomation.com</a><br /><a style="color: #65a4d4;" href="robolive.info">robolive.info</a><br><br></td>
    </tr>
    <tr style="font-size: 12px; color: #ffffff; background-color: #0a1b2a; text-align:center;">
      <td style="padding-bottom: 50px;">&copy; RoboLive<span style="font-size: 8px;"><sup>&reg;</sup></span> 2023 - All rights reserved.<br />Don't want to receive further communication? <a style="color: #fff;" href="#">Click here to unsubscribe</a>.</td>
    </tr>
  </tbody>
</table>`;
      var h2 =`UPDATES FOR YOU:`;
      var readMore="Read More";
    
    } else{ //if german
      
      var header = `<table style="width: 600px; min-width: 600px; background: #ababab; border-collapse: collapse; font-family: Tahoma, Arial, sans-serif; font-size: 16px;">
  <tbody>
    <tr style="background-color: #0a1b2a; color: #ffffff; height: 50px;">
      <th style="width: 150px;"><a href="robolive.info/de"><img style="width: 100px;padding-top:5px;" src="https://robolive.info/wp-content/uploads/2023/03/LOGO-SCALE-100.png" alt="RoboLive logo" /></a></th>
      <th style="text-align: right; font-size: 14px; padding: 10px; width: 450px;">TRANSPARENZ BEI FERTIGUNGSROBOTERN</th>
    </tr>
  </tbody>
</table>`;
      var footer = `<!-- FOOTER -->
<table style="width: 600px; min-width: 600px; border-collapse: collapse; color: #ffffff; font-family: Tahoma, Arial, sans-serif; font-size: 16px; background:#0a1b2a;">
  <tbody>
    
        <tr><Td style="padding:0px;">
      <img src="https://robolive.info/wp-content/uploads/2023/03/email-hero-50.png" alt="email-hero-50.png" width="600" height="50" /></td>
    </tr>
    
    <!-- LOGO + TAGLINE -->
    <tr style="color: #ffffff; background-color: #0a1b2a; text-align:center;">
      <td style="padding: 50px; font-size: 14px;"><a href="robolive.info/de"><img style="width: 200px; padding: 10px;" src="https://robolive.info/wp-content/uploads/2023/03/LOGO-SCALE-200.png" alt="Robolive Logo" /></a><br /><br />RoboLive<span style="font-size: 10px;"><sup>&reg;</sup></span> | Transparenz bei Fertigungsrobotern</td>
    </tr>
    
    <TR style="color: #ffffff; background-color: #0a1b2a; text-align:center;">
      <td>
        <!-- SOCIAL ICONS -->
        <a href="tel:05332-93060"><img style="width: 30px; padding-bottom: 8px;" src="https://robolive.info/wp-content/uploads/2023/03/ICON-PHONE-30.png" alt="PHONE" /></a> <a href="https://www.linkedin.com/showcase/robolivedeu/"><img style="width: 30px; padding-bottom: 8px;" src="https://robolive.info/wp-content/uploads/2023/03/ICON-LINKEDIN-30.png" alt="LINKEDIN" /></a> <a href="mailto:deu@dautomation.com"><img style="width: 30px; padding-bottom: 8px;" src="https://robolive.info/wp-content/uploads/2023/03/ICON-MAIL-30.png" alt="MAIL" /></a>
        </td>
 
        </TR>
    
    <!-- CONTACT + OPT-OUT -->
    <tr style="font-size: 12px; color: #ffffff; background-color: #0a1b2a; text-align:center;">
      <td>Dressler Automation GmbH<br />      Braunschweiger Straße 20<br>
      38170 Schöppenstedt<br>
      Tel.:   05332 93060<br>E-Mail: <a style="color: #65a4d4;" href="mailto:office@dautomation.com">office@dautomation.com</a><br /><a style="color: #65a4d4;" href="robolive.info/de">robolive.info</a><br><br></td>
    </tr>
    <tr style="font-size: 12px; color: #ffffff; background-color: #0a1b2a; text-align:center;">
      <td style="padding-bottom: 50px;">&copy; RoboLive<span style="font-size: 8px;"><sup>&reg;</sup></span> 2023 - Alle Rechte vorbehalten.<br />Sie möchten keine weiteren E-Mails mehr von uns erhalten? Dann klicken Sie <a style="color: #fff;" href="#">hier</a>.</td>
    </tr>
  </tbody>
</table>`;
      var h2 ="NEWS:";
      var readMore ="Mehr Erfahren!";
   
    }
  
  

  
  
  //generate the html, filling with the variable
  var outputHTML = `
  
  ${header}
  <!-- HEADER IMAGE-->
<table style="width: 600px; min-width: 600px; border-collapse: collapse; color: #ffffff; font-family: Tahoma, Arial, sans-serif; font-size: 16px;">
  <tbody>
    <tr>
      <td style="padding:0px;">
      <img src="https://robolive.info/wp-content/uploads/2023/03/email-hero-50.png" alt="email-hero-50.png" width="600" height="50" />
      </td>
    </tr>
  </tbody>
</table>
  
  <!-- UPPER CONTENT  --> 
<table style="width: 600px; min-width: 600px; border-collapse: collapse; color: #ffffff; font-family: Tahoma, Arial, sans-serif; font-size: 16px;">
    

  <tr style="background:white;color:black;">
    <td style="padding:25px;">
      $contact_first_name,<br><br>
      ${content}
      <br>
      
      <h2 style="margin-top:50px;"> ${h2} </h2>       
    </td>
  </tr>
</table>
  <!-- NEWS SEGMENTS --> 
  
  <table style="width: 600px; min-width: 600px; border-collapse: collapse; color: #ffffff; font-family: Tahoma, Arial, sans-serif; font-size: 16px;">
    <!-- IMAGE ROW --> 
    <tr >
      
      <!-- IMAGE 1 --> 
      <td style="width:600px;text-align:center;">
        <a href="${link}"><img src="${src}" style="width:550px;HEIGHT:250px;"></a>
      </td>
    </tr>
  
    
    <!-- TITLES ROW--> 
    
    <tr>
      
      <!-- NEWS 1 TITLE --> 
      <td style="width:600px;padding:5px 25px 5px 25px;vertical-align: top;" >
        <a href="${link}" style="color:#65a4d4; font-weight:bold;text-decoration:none;font-size:18px;">${newsTitle}</a>
      </td>
      
    </tr>
    
    <!-- CONTENT ROW--> 
    
    <tr>
      
      <!-- NEWS 1 --> 
      <td style="width:600px;padding:5px 25px 20px 25px;vertical-align: top; COLOR:BLACK;">
        ${content}
        <br><br><a href="${link}" style="color:#65a4d4; ">${readMore}</a></span>
      </td>
 
    </tr>
</table>



<!-- CLOSUNG CONTENT--> 
<table style="width: 600px; min-width: 600px; border-collapse: collapse; color: #ffffff; font-family: Tahoma, Arial, sans-serif; font-size: 16px;">
  <tr style="background:white;color:black;">
    <td style="padding:25px;">
      ${closing}<br>
      <br>
    </td>
  </tr>
</table>



<!-- CTA BUTTON -->
<table style="min-width: 600px; width: 600px; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; text-align: center;">
  <tbody>
    <tr>
      <td style="padding: 25px;padding-top:35px;"><a style="color: #ffffff; width: 500px; background-color: #0a1b2a; text-decoration: none; border-radius: 30px; text-align: center; border-top: 10px solid #0a1b2a; border-bottom: 10px solid #0a1b2a; border-right: 50px solid #0a1b2a; border-left: 50px solid #0a1b2a;" href="${ctaLink}">${cta}</a> <br /><br /><br /><br /></td>
    </tr>
  </tbody>
</table>

${footer}

`
  

  //output the correct template depending on language

    document.getElementById("outputHTML").value = outputHTML;
 
  
  
  }
