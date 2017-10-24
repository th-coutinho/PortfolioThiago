 var buttonState = false;   

   $(document).ready(function(){
      $(window).scroll(function(){
         //navAnimation();
         brandAnimation();
      })
   });

   $(".navbar-button").click( function() {
      $(".navigationBar").slideToggle("slow");  
   });

   /*$(".contact-me").click( function() {
      changeContactButton();      
   });*/

   $(".nav-button").click( function() {
      var divId = $(this).attr("id");
      var adjust = 0;

      if (divId == 'welcome') {
         adjust = 850;
      }

      if (divId == 'skills') {
         adjust = 20;
      }

      if (divId == 'extra') {
         adjust = 80;
      }

      if (divId == 'exp') {
         adjust = 80;
      }

      if (divId == 'tools') {
         adjust = 30;
      }

      if (divId == 'contact') {
         adjust = 30;
      }


      jumpToDiv(divId, adjust);
   });

   $(".nav-button")

          .mouseover(function(){
             var name = $(this).attr('id');
              name = "#line-" + name;
              //alert(name);
              $(name).addClass("nav-itens-line-marked");
          })


          .mouseout(function(){
             var name = $(this).attr('id');
              name = "#line-" + name;
             // alert(name);
              $(name).removeClass("nav-itens-line-marked");
   });   

   function jumpToDiv(name, adjust) {
      name = "." + name;

      $(name).animatescroll({scrollSpeed:1000, padding:adjust, easing:'easeInOutQuad'});

      if ($(window).width() < 768) {
         $(".navigationBar").slideUp("slow");
      }
   }

   function navAnimation() {
      var scrolled = $(this).scrollTop();
      if (scrolled > 769) {
         var previouslyColor = $(".navigationBar").css('backgroundColor');
         $(".navigationBar").css({
            "background": "rgba(227, 227, 227, 0.65)"
         });
      }
      else {
         $(".navigationBar").css({
            "background": previouslyColor
         });
      }
   }

   /*function changeContactButton () { 
      if (buttonState == false) {
         $(".contact-me").addClass("pressed-button", function(){
            buttonState = true;
            var buttonHtml = "<p class='button-email'>Thiagoscoutinho92@gmail.com</p>" + "<hr class='button-hr'>" + "<p class='button-tel'>21 9 8095-3323</p>";
            changeButtonText(buttonHtml);
         });
      } else {
         $(".contact-me").removeClass("pressed-button", function(){
            buttonState = false;
            changeButtonText("ENTRE EM CONTATO");
         });
      }      
   }

   function changeButtonText(text) {
      $(".contact-me").html(text);
   }*/

   function brandAnimation() {
      var scrolled;
      scrolled = $(this).scrollTop();
      scrolled = (scrolled / 560);
      scrolled = scrolled.toFixed(2);
      scrolled = 1 - scrolled;

      if (scrolled < 0) {
         scrolled = 0;
      }

      //alert(scrolled);
      $(".brand").css({
         "opacity": scrolled
      });


      //560
   }