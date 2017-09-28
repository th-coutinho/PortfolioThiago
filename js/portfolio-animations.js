 var teste;   

   $(document).ready(function(){
      $(window).scroll(function(){
         //navAnimation();
         brandAnimation();
      });
   });

   $(".nav-button").click( function() {
      //$('body').scrollTo(".skills-title");
      //$(".extra").animatedScroll({duration: 1000, easing: "easeOutExpo"}, {top: "60%"});
      var divId = $(this).attr("id");
      jumpToDiv(divId);
      //alert(divId);
   });

   function jumpToDiv(name, position) {
      $(name).animatedScroll({duration: 1000, easing: "easeOutExpo"}, {top: "60%"});
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