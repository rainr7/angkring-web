$(".hover").mouseleave(
    function () {
      $(this).removeClass(".hover");
    }
  );

  $(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
  });
