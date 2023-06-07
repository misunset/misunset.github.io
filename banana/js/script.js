$(function(){
  var $window = $(window);
  var $header = $('header');
  var timeout = 1000;
  var interval = 2000;
  var slideDuration = 3000;
  var $milk = $('#milk');
  var $text = $('.text');
  var $productImage = $('#product-images > ul');


  window.setTimeout(function(){
    $milk.show().animate({
      right: '0%'
    }, 600);
    if ($milk.is('visible')){
      $(this).addClass('fixed');
    }
  }, timeout);

  $window.on('scroll', function() {
    var scrollPosition = $window.scrollTop();
    var windowHeight = $window.height() / 2;

    // .con 서서히 뜨게하기
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

  // header 고정
  function fixed(){
    var scrollPosition = $window.scrollTop();
    var windowHeight = $window.height();
    if (scrollPosition > windowHeight) {
      $header.addClass('fixed');
    } else {
      $header.removeClass('fixed');
    }
  }

  // 이미지 슬라이드 왼쪽->오른쪽
  function slideRight() {
    $productImage.animate({
      marginLeft: '0%'
    }, slideDuration,'linear' ,function() {
      $productImage.removeAttr('style').children(':last').prependTo(this);
    });
  }
  
  window.setInterval(slideRight, interval);

  /* 왼쪽으로 슬라이드
  function slideLeft() {
    $productImage.animate({
      marginLeft: '-25%'
    }, function(){
      $productImage.removeAttr('style').children(':first').appendTo(this);
    });
  }
  var intervalId = window.setInterval(slideLeft, 2000); */

  
  
});