Work division:
Anuradha : Getting User Information
Sanket : Integrating Maps for finding dealers
Nrupen : Build the mobile APK and the moving to desktop 

1) We get the IP address of the client by using jsonip.com and the geolocation using navigator of the browser. We get the remaining information about the client i.e. os version, os type, etc from navigator. We are using mandrillapp.com to send email to the creator, if the client wants report the user information. We have used these IP address is location based and is available only when client okays the use of sharing location and mandrillapp is the best way to send mails to a creator using only javascript. 

2) For integrating maps, we are using Google Places API because that is the best way to find and point to anything available in the world. We have used textSearch and getDetails functions of the API to get the dealers the client wants. We have used jQuery whenever we felt the need to attend to tags using ids or classes or for click functionalities. 

3)To build mobile APK, we used Phonegap. And to move to mobile site, we have added the link to our website on cs.uml.edu as the footer.

4)We had added the APK here. And the link for the desktop site is

http://www.cs.uml.edu/~standulw/513_f2014/hw5/