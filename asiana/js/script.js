$(function(){
  var $window = $(window);
  var $airplane = $('#better-airplane img');

  $window.on('scroll', function(){
    visible();
  });


  function visible(){

    $('.con-wrap').each(function() {
      var scrollPosition = $window.scrollTop();
      var windowHeight = $window.height() - 200;
      var windowTop = scrollPosition + windowHeight;
      var offsetTop = $(this).offset().top;
      
      if (offsetTop < windowTop && $(this).hasClass('hidden')) {
        $(this).removeClass('hidden');
        $(this).animate({ 
            opacity: 1 
        }, 500);
        $airplane.delay(500).addClass('animation');
      } else if (offsetTop > (windowTop + 150) && !$(this).hasClass('hidden')) {
        $(this).addClass('hidden');
        $(this).animate({ 
          opacity: 0 
        }, 500);
        $airplane.removeClass('animation');
      }  
    });
  }
})
