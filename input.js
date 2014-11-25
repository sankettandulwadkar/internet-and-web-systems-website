$(document).ready(function() {

  	$(function(){
          $('ul.tabs li:first').addClass('active');
          $('.block article').hide();
          $('.block article:first').show();
          $('ul.tabs li').on('click',function(){
            $('ul.tabs li').removeClass('active');
            $(this).addClass('active')
            $('.block article').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).show();
            return false;
          });
    });



  	$("#tab1").append("<h1 align='center'><h1>");
    $("#tab1").append('<p class="centeredImage"><img src="sanket.jpg" class="image-class" alt="Profile Picture"></p>');
    $("#tab1").append('<br><br><p id="information" class="biotext">I am Sanket Tandulwadkar. I am a graduate student at University of Massachusetts Lowell. I am currently in my second year. I am interning as a Software Engineer at Cengage Learning, Boston. I am taking Internet and Web Systems I, Advanced Database Systems, Data Mining at the University this semester. I moved to the United States August, 2013 to pursue MS in Computer Science. It has been an exciting journey here, learning new culture and a different way of life. My interests include music, cooking, eating, soccer, hiking.</p>');
     

    $("#tab5").append('<p class="contact-info"><strong>Phone</strong> : (978) 427-3524<br> </p>');
    $("#tab5").append('<p class="contact-info"><strong>Email</strong> : sanket_tandulwadkar@student.uml.edu<br> </p>');
    $("#tab5").append('<p class="contact-info"><strong>Address</strong> : 42 Gershom Avenue, Apartment 1, Lowell, MA 01854<br> </p>');
    $("#tab5").append('<p class="contact-info"><strong>GitHub</strong> : <a target="_blank" href="https://www.github.com/sankettandulwadkar">sankettandulwadkar</a><br> </p>');
    $("#tab5").append('<p class="contact-info"><strong>LinkedIn</strong> : <a target="_blank" href="https://www.linkedin.com/in/sankettandulwadkar/">Sanket Tandulwadkar</a><br> </p>');
    $("#tab5").append('<p class="contact-info"><strong>Facebook</strong> : <a target="_blank" href="https://www.facebook.com/sankettandulwadkar">Sanket Tandulwadkar</a> </p>');
    $("#tab5").append('<p class="contact-info"><strong>Personal Website</strong> : <a target="_blank" href="https://www.sankettandulwadkar.com">Sanket Tandulwadkar</a> </p>');
   

    $("#guestbook_firstName").keypress(function(event){
        var inputValue = event.which;
        //if digits or not a space then don't let keypress work.
        if((inputValue > 47 && inputValue < 58)){
            event.preventDefault();
        }
    });


    $("#guestbook_lastName").keypress(function(event){
        var inputValue = event.which;
        //if digits or not a space then don't let keypress work.
        if((inputValue > 47 && inputValue < 58)){
            event.preventDefault();
        }
    });


    // $("#guestbook_email").keypress(function(event){
    //     var inputValue = event.which;
    //     //if digits or not a space then don't let keypress work.
    //     if((inputValue > 47 && inputValue < 58)){
    //         event.preventDefault();
    //     }
    // });

    function validateEmail() {

        var x = document.getElementById("guestbook_email").value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
            alert("Not a valid e-mail address");
            return false;
        }
    }   

    function validateName()
    {
        var first_name = document.getElementById("guestbook_firstName").value;
        var last_name = document.getElementById("guestbook_lastName").value;
        var email_adress = document.getElementById("guestbook_email").value;
        if(first_name=="" || last_name=="" || email_adress=="")
        {
            alert("Please enter all fields");
            return false;
        }
    }

    function isOneChecked() {
      alert("Here");  
      var chx = document.getElementsByTagName('input');
      for (var i=0; i<chx.length; i++) {
        
        if (chx[i].type == 'radio' && chx[i].checked) {
          return true;
        } 
      }
      return false;
    }


    $("#guestbook_submit").click(function(){
        var name_validation, email_validation, radio_validation;

        name_validation = validateName();
        email_validation = validateEmail();
        radio_validation = isOneChecked();

        if(name_validation && email_validation && radio_validation)
        {
            alert("Submitting");
        }
        else
        {
            alert("Not Submitting");
        }
            

    });

});