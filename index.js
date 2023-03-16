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
  
  //generate the html
  var outputHTML = `<table style="background-color: #003c5e; width: 600px; border: 0; border-collapse: collapse; font-family: Tahoma, Arial, sans-serif;">
  <tbody>
    <tr>
      <td style="background-color: #00263c; padding: 20px; text-align: center; border: 1px solid #003c5e; width: 799.231px;">
        <img src="https://robolive.info/wp-content/uploads/2023/03/Robolive-Logo_White_WithoutProtectionZone-1.png" style="width:75%; padding:20px;">
        <p style="color:#ffffff;">Read the latest news and updates from our team.</p>
      </td>
    </tr>
    <tr>
      <td style="background-color: #ffffff; padding: 30px 20px 20px 20px; border: 1px solid #003c5e; width: 100%;">
        <p style="font-family: Tahoma, Arial, sans-serif; text-align:center;">${opening}</p>
        <table style="width: 100%; border: 0; border-collapse: collapse;">
          <tbody>
            <tr valign="top" style="padding: 20px;">
              <td style="width: calc(100% /3); vertical-align: top; padding: 30px 10px 30px 10px;text-align:center;"><a href="${news1Link}"><img src="${news1SRC}" alt="News Image" style="width: 150px; height: auto; margin-bottom: 10px;" /></a>
                <h2 style="margin-bottom: 10px; font-family: Tahoma, Arial, sans-serif;text-align:center;font-size:18px;">${news1Title}</h2>
                <p style="font-family: Tahoma, Arial, sans-serif;text-align:center;font-size:14px;">${news1Body}</p>
                <center> <a href="${news1Link}" style="font-family: Tahoma, Arial, sans-serif; color: #65a4d4; margin-top: 10px;">Read more</a></center>
              </td>
              <td style="width: calc(100% /3); vertical-align: top; padding: 30px 10px 30px 10px;text-align:center;"><a href="${news2Link}"><img src="${news2SRC}" alt="News Image" style="width: 150px; height: auto; margin-bottom: 10px;" /></a>
                <h2 style="margin-bottom: 10px; font-family: Tahoma, Arial, sans-serif;text-align:center;font-size:18px;">${news2Title}</h2>
                <p style="font-family: Tahoma, Arial, sans-serif;text-align:center;font-size:14px;">${news2Body}</p>
                <center> <a href="${news2Link}" style="font-family: Tahoma, Arial, sans-serif; color: #65a4d4; margin-top: 10px;">Read more</a></center>
              </td>
              <td style="width: calc(100% /3); vertical-align: top; padding: 30px 10px 30px 10px;text-align:center;"><a href="${news3Link}"><img src="${news3SRC}" alt="News Image" style="width: 150px; height: auto; margin-bottom: 10px;" /></a>
                <h2 style="margin-bottom: 10px; font-family: Tahoma, Arial, sans-serif;text-align:center;font-size:18px;">${news3Title}</h2>
                <p style="font-family: Tahoma, Arial, sans-serif;text-align:center;font-size:14px;">${news3Body}</p>
                <center> <a href="${news3Link}" style="font-family: Tahoma, Arial, sans-serif; color: #65a4d4; margin-top: 10px;">Read more</a></center>
              </td>
            </tr>
          </tbody>
        </table>
        <p style="font-family: Tahoma, Arial, sans-serif; margin-top: 20px; margin-bottom:50px; text-align:center;">${closing}</p>
      </td>
    </tr>
    <tr>
            <td style="background-color: #00263c; padding: 30px 30px; text-align: center; border: 1px solid #003c5e; width: 100%;">
        <p style="font-size: 13px; color: #ffffff;"><span style="font-size: 10pt; font-family: tahoma ,arial ,helvetica ,sans-serif;"><strong>RoboLive<sup>&reg;</sup>&nbsp;|&nbsp;Transparency for Production Robots</strong><br /><br />Dressler Automation Corp<br />102 Jordan Drive, Chattanooga TN 37421<br>Tel.: (423) 661-2088<br />E-Mail:&nbsp;<a href="mailto:deu@dautomation.com" style="color: #65a4d4">usa@dautomation.com</a><br /><br />

          
          <a href="https://robolive.info/" style="color: #65a4d4">robolive.info</a>&nbsp;|&nbsp;<a href="https://www.linkedin.com/showcase/77684161/" style="color: #65a4d4">LinkedIn</a><br /><br /></span></p>
        <p style="font-size: 13px; color: #ffffff;"><a href="https://calendly.com/robolivedeu" style="background-color: #ffffff; color: #003c5e; padding: 10px 20px; text-decoration: none; border-radius: 30px; font-size: 14px; font-weight: bold;">Request a demo</a></p>

        <!-- Ende der Signatur -->

        <p style="font-size: 13px; color: #ffffff;"><span style="font-size: 10pt; font-family: tahoma ,arial ,helvetica ,sans-serif;"><br />&copy; Robolive 2023 - All rights reserved.<br />Don't want to receive further communication? <a href="#" style="color:#fff;">Click here to unsubscribe</a>.</span></p>
      </td>
    </tr>
  </tbody>
</table>`;
  
  var outputHTMLDE = `<table style="background-color: #003c5e; width: 600px; border: 0; border-collapse: collapse; font-family: Tahoma, Arial, sans-serif;">
  <tbody>
    <tr>
      <td style="background-color: #00263c; padding: 20px; text-align: center; border: 1px solid #003c5e; width: 799.231px;">
        <img src="https://robolive.info/wp-content/uploads/2023/03/Robolive-Logo_White_WithoutProtectionZone-1.png" style="width:75%; padding:20px;">
        <p style="color:#ffffff;">Lesen Sie die neuesten Nachrichten aus unserem Team:</p>
      </td>
    </tr>
    <tr>
      <td style="background-color: #ffffff; padding: 30px 20px 20px 20px; border: 1px solid #003c5e; width: 100%;">
        <p style="font-family: Tahoma, Arial, sans-serif; text-align:center;">${opening}</p>
        <table style="width: 100%; border: 0; border-collapse: collapse;">
          <tbody>
            <tr valign="top" style="padding: 20px;">
              <td style="width: calc(100% /3); vertical-align: top; padding: 30px 10px 30px 10px;text-align:center;"><a href="${news1Link}"><img src="${news1SRC}" alt="News Image" style="width: 150px; height: auto; margin-bottom: 10px;" /></a>
                <h2 style="margin-bottom: 10px; font-family: Tahoma, Arial, sans-serif;text-align:center;font-size:18px;">${news1Title}</h2>
                <p style="font-family: Tahoma, Arial, sans-serif;text-align:center;font-size:14px;">${news1Body}</p>
                <center> <a href="${news1Link}" style="font-family: Tahoma, Arial, sans-serif; color: #65a4d4; margin-top: 10px;">Mehr lesen</a></center>
              </td>
              <td style="width: calc(100% /3); vertical-align: top; padding: 30px 10px 30px 10px;text-align:center;"><a href="${news2Link}"><img src="${news2SRC}" alt="News Image" style="width: 150px; height: auto; margin-bottom: 10px;" /></a>
                <h2 style="margin-bottom: 10px; font-family: Tahoma, Arial, sans-serif;text-align:center;font-size:18px;">${news2Title}</h2>
                <p style="font-family: Tahoma, Arial, sans-serif;text-align:center;font-size:184x;">${news2Body}</p>
                <center> <a href="${news2Link}" style="font-family: Tahoma, Arial, sans-serif; color: #65a4d4; margin-top: 10px;">Mehr lesen</a></center>
              </td>
              <td style="width: calc(100% /3); vertical-align: top; padding: 30px 10px 30px 10px;text-align:center;"><a href="${news3Link}"><img src="${news3SRC}" alt="News Image" style="width: 150px; height: auto; margin-bottom: 10px;" /></a>
                <h2 style="margin-bottom: 10px; font-family: Tahoma, Arial, sans-serif;text-align:center;font-size:18px;">${news3Title}</h2>
                <p style="font-family: Tahoma, Arial, sans-serif;text-align:center;font-size:14px;">${news3Body}</p>
                <center> <a href="${news3Link}" style="font-family: Tahoma, Arial, sans-serif; color: #65a4d4; margin-top: 10px;">Mehr lesen</a></center>
              </td>
            </tr>
          </tbody>
        </table>
        <p style="font-family: Tahoma, Arial, sans-serif; margin-top: 20px; margin-bottom:50px; text-align:center;">${closing}</p>
      </td>
    </tr>
    <tr>
      <td style="background-color: #00263c; padding: 30px 30px; text-align: center; border: 1px solid #003c5e; width: 100%;">
                <p style="font-size: 13px; color: #ffffff;"><span style="font-size: 10pt; font-family: tahoma ,arial ,helvetica ,sans-serif;"><strong>Dressler Automation | Wir setzen Standards<br />RoboLive<sup>&reg;</sup>&nbsp;|&nbsp;Transparenz bei Fertigungsrobotern</strong><br /><br />Dressler Automation GmbH<br />Braunschweiger Stra&szlig;e 20<br />38170 Sch&ouml;ppenstedt<br />Tel.:&nbsp;&nbsp;&nbsp;05332 93060<br />E-Mail:&nbsp;<a href="mailto:deu@dautomation.com" style="color: #65a4d4">deu@dautomation.com</a><br /><br /><a href="https://dautomation.com/de/" style="color:#65a4d4;">dautomation.com</a>&nbsp;|&nbsp;<a href="https://www.linkedin.com/company/dressler-automation-gmbh/" style="color: #65a4d4">LinkedIn</a><br /><a href="https://robolive.info/de/" style="color: #65a4d4">robolive.info</a>&nbsp;|&nbsp;<a href="https://www.linkedin.com/showcase/robolivedeu/" style="color: #65a4d4">LinkedIn</a><br /><br /></span></p>
        <p style="font-size: 13px; color: #ffffff;"><a href="https://calendly.com/robolivedeu" style="background-color: #ffffff; color: #003c5e; padding: 10px 20px; text-decoration: none; border-radius: 30px; font-size: 14px; font-weight: bold;">Jetzt Termin buchen!</a></p>
   
        
        
        <!-- Ende der Signatur -->
        
        
        <p style="font-size: 13px; color: #ffffff;"><span style="font-size: 10pt; font-family: tahoma ,arial ,helvetica ,sans-serif;"><br />&copy; Robolive 2023 - Alle Rechte vorbehalten.<br />Sie m&ouml;chten keine weiteren E-Mails mehr von uns erhalten? Dann klicken Sie <a href="#" style="color:#fff;">hier</a>.</span></p>
      </td>
    </tr>
  </tbody>
</table>`
  

  //output the correct template depending on language
 
  if (document.getElementById("langEN").checked == true) {
    document.getElementById("outputHTML").value = outputHTML;
    
  }
  else{
    
    document.getElementById("outputHTML").value = outputHTMLDE;
 
  }
  
  
  }
