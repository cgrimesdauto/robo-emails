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
  var headline = document.getElementById("headline").value;
  
  var opening = document.getElementById("opening").value;
  
  var news1Title = document.getElementById("news1Title").value;
  var news1Body = document.getElementById("news1Body").value;
  var news1Link = document.getElementById("news1Link").value;
  var news1SRC = document.getElementById("news1SRC").value;
  
  var news2Title = document.getElementById("news2Title").value;
  var news2Body = document.getElementById("news2Body").value;
  var news2Link = document.getElementById("news2Link").value;
  var news2SRC = document.getElementById("news2SRC").value;
  
  var news3Title = document.getElementById("news3Title").value;
  var news3Body = document.getElementById("news3Body").value;
  var news3Link = document.getElementById("news3Link").value;
  var news3SRC = document.getElementById("news3SRC").value;
  
  var closing = document.getElementById("closing").value;
  
  var cta = document.getElementById("cta").value;
  var ctaLink = document.getElementById("ctaLink").value;
  
  
 
  //create br tags from newlines in the textarea inputs
  var openingFix = opening.replace(/\n/g, "<br>");
   opening = openingFix;
  
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
        <a href="tel:423-661-2088"><img style="width: 30px; padding-bottom: 8px;" src="https://robolive.info/wp-content/uploads/2023/03/ICON-PHONE-30.png" alt="PHONE" /></a> <a href="https://www.linkedin.com/showcase/77684161"><img style="width: 30px; padding-bottom: 8px;" src="https://robolive.info/wp-content/uploads/2023/03/ICON-LINKEDIN-30.png" alt="LINKEDIN" /></a> <a href="mailto:usa@dautomation.com"><img style="width: 30px; padding-bottom: 8px;" src="https://robolive.info/wp-content/uploads/2023/03/ICON-MAIL-30.png" alt="MAIL" /></a>
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
        <a href="tel:05332-93060"><img style="width: 30px; padding-bottom: 8px;" src="https://robolive.info/wp-content/uploads/2023/03/ICON-PHONE-30.png" alt="PHONE" /></a> <a href="https://www.linkedin.com/showcase/robolivedeu/"><img style="width: 30px; padding-bottom: 8px;" src="https://robolive.info/wp-content/uploads/2023/03/ICON-LINKEDIN-30.png" alt="LINKEDIN" /></a> <a href="mailto:usa@dautomation.com"><img style="width: 30px; padding-bottom: 8px;" src="https://robolive.info/wp-content/uploads/2023/03/ICON-MAIL-30.png" alt="MAIL" /></a>
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




<!-- MAIN CONTENT-->


<table style="width: 600px; min-width: 600px; border-collapse: collapse; color: #ffffff; font-family: Tahoma, Arial, sans-serif; font-size: 16px;">
  <tbody>
    <tr style="background: #FFFFFF; color: #000000;">
      
      <td style="padding: 25px;">
        
        <h1 style="color:#00263c;font-size:36px;">${headline}</h1><br>
        
        $contact_first_name,<br /><br />
        
        ${opening}
        
        <br />
        <h2 style="padding-top: 25px;color:#00263c; font-size:24px;">${h2}</h2>
      </td>
    </tr>
  </tbody>
</table>


<!-- NEWS COLUMNS -->
<table style="width: 600px; min-width: 600px; border-collapse: collapse; font-family: Tahoma, Arial, sans-serif; font-size: 16px;">
  <tbody>
    <tr>
       <!-- NEWS IAMGES-->
      <td style="width: 200px; text-align: center;"><a href="${news1Link}"><img style="width: 150px;height:150px;" src="${news1SRC}" alt="newsletter-1-150.png" /></a></td>
      <td style="width: 200px; text-align: center;"><a href="${news2Link}"><img style="width: 150px;height:150px;" src="${news2SRC}" alt="newsletter-2-150.png" /></a></td>
      <td style="width: 200px; text-align: center;"><a href="${news3Link}"><img style="width: 150px;height:150px;" src="${news3SRC}" alt="newsletter-3-150.png" /></a></td>
    </tr>
    <tr>
      <!-- NEWS HEADLINES -->
      <td style="width: 200px; padding: 5px 25px 5px 25px; vertical-align: top;"><a style="color: #65a4d4; font-weight: bold; text-decoration: none; font-size: 18px;" href="${news1Link}"> ${news1Title} </a></td>
      <td style="width: 200px; padding: 5px 25px 5px 25px; vertical-align: top;"><a style="color: #65a4d4; font-weight: bold; text-decoration: none; font-size: 18px;" href="${news2Link}"> ${news2Title}</a></td>
      <td style="width: 200px; padding: 5px 25px 5px 25px; vertical-align: top;"><a style="color: #65a4d4; font-weight: bold; text-decoration: none; font-size: 18px;" href="${news3Link}"> ${news3Title} </a></td>
    </tr>
    <tr>
      <!-- NEWS CAPTIONS + READ MORE -->
      <td style="width: 200px; padding: 5px 25px 20px 25px; vertical-align: top;">${news1Body} <br /><br /><a style="color: #65a4d4;" href="${news1Link}">${readMore}</a></td>
      <td style="width: 200px; padding: 5px 25px 5px 25px; vertical-align: top;">${news2Body} <br /><br /><a style="color: #65a4d4;" href="${news2Link}">${readMore}</a></td>
      <td style="width: 200px; padding: 5px 25px 5px 25px; vertical-align: top;">${news3Body}<br /><br /><a style="color: #65a4d4;" href="${news3Link}">${readMore}</a></td>
    </tr>
  </tbody>
</table>

<!-- CLOSING CONTENT -->
<table style="width: 600px; min-width: 600px; border-collapse: collapse; font-family: Tahoma, Arial, sans-serif; font-size: 16px;">
  <tbody>
    <tr style="background: #FFFFFF;">
      <td style="padding: 25px;padding-top:40px;">
        
        ${closing}
        
      </td>
    </tr>
  </tbody>
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
