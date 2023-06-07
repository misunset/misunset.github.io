$(function(){
  var $window = $(window);
  var $text = $('.text');

  $window.on('scroll', function() {
    var scrollPosition = $window.scrollTop();
    var windowHeight = $window.height() / 2;

    $text.each(function() {
      var offsetTop = $(this).offset().top;
      
      if (scrollPosition + windowHeight >= offsetTop) {
        $(this).removeClass('hidden');
        $(this).addClass('visible');
      } else {
        $(this).removeClass('visible');
        $(this).addClass('hidden');
      }    
    });

    fixed();

  });

  function fixed(){
    var scrollPosition = $window.scrollTop();
    var windowHeight = $window.height();
    if (scrollPosition > windowHeight) {
      $header.addClass('fixed');
    } else {
      $header.removeClass('fixed');
    }
  }
});