
$(function(){
  var $window = $(window);
  var $seasonItem = $('#seasonItem');
  var seasonOffset = $seasonItem.offset().top;
  var $bannerlast = $('#banner-wrap > img:last-child');
  var bannerHeight = $bannerlast.height();
  var bannerOffset = $bannerlast.offset().top;

  var $seasonYoga = $('#season-yoga');
  var $seasonImg = $('#season-yoga > img');

  var $tennisSlide = $('#womanImage > ul');
  var interval = 3000;

  var $agreeall = $('#allagree');
  var $argeeper = $('.peragree');

  $agreeall.click(function(){
    var allChk = $(this).is(":checked");
    if (allChk) {
      $argeeper.prop('checked', true);
    } else {
      $argeeper.prop('checked', false);
    }
  });
  $argeeper.on('change', function() { // chkControl 체크박스(모두 동의 아래의 체크박스)의 상태가 바뀔때
    var chkLength = $(".peragree:checked").length; // 체크된 chkControl 체크박스의 개수
    var chk_ctrl = $argeeper.length; // 전체 체크박스의 개수
    if(chk_ctrl == chkLength){ // 체크된 chkControl 체크박스의 개수와 전체 chkControl 체크박스의 개수가 동일하다면(전부 다 체크됐다면)
        $agreeall.prop('checked',true); // 모두동의 체크박스도 선택됨
    }else{ // 반대의 경우(전체가 체크된 상태가 아니라면)
        $agreeall.prop('checked',false); // 모두동의 체크박스 해제됨
    }
  });


  $window.scroll(function(){
    bannerfixed();
    fadeIn();
    accessorySmall();
  });

  function bannerfixed (){
    var scrollOffset = $window.scrollTop();
    if (scrollOffset > bannerOffset) {
      // 스크롤이 여기 영역에 닿을 때, $bannerlast가 고정되고, 
      $bannerlast.addClass('fixed');
      $seasonItem.css('margin-top', bannerHeight);
        
      // banner 다음 컨텐츠들인 #seasonItem은 고정된 $bannerlast 그 위로 올라와서
      // 스크롤을 내릴때 보여지게 한다.
    } else {
      $bannerlast.removeClass('fixed');
      $seasonItem.css('margin-top','');
    }
    if (scrollOffset > seasonOffset) {
      $bannerlast.fadeOut();
    } else {
      $bannerlast.fadeIn();
    }
  };

  function fadeIn (){
    var scrollOffset = $window.scrollTop();
    var seasonYogaOffset = $seasonYoga.offset().top;
    var seasonImgHeight = $seasonImg.outerHeight();
    
    if (scrollOffset > (seasonYogaOffset - seasonImgHeight)){
      $seasonImg.addClass('visible');
    }
    // 스크롤 위치가 이 영역 이외 구간에는 visible이 해제된다.
    /* else if (scrollOffset > (seasonOffset + seasonImgHeight) || scrollOffset < (seasonOffset - seasonImgHeight)){
      $seasonImg.removeClass('visible');
    }*/
  }

  // accessoryMenImg 작아지는 효과
  // 스크롤이 액세서리 위치값보다 높아진 상태에서,
  // 휠을 아래로 굴리면 이미지가 비율에 따라 작아진다.
  
  var $accessoryArea = $('#accessoryItem');
  // 액세서리를 감싸는 전체 태그 

  var $accessoryOffset = $accessoryArea.offset().top +50;
  // 액세서리가 처음 시작하는 위치

  var $accessoryMen = $('#accessoryMen');
  // 액세서리 남자
 
  function accessorySmall() {
    var scrollPosition = $window.scrollTop();
  
    if (scrollPosition > $accessoryOffset) {
      $accessoryMen.css({
        animation: 'scaleAnimation 1s forwards',
      });
    } 
  }
  

  /* 기본 이미지 좌우 슬라이드
  window.setInterval(function(){
    slideImage();
  },interval);
  function slideImage (){
    $tenniswoman.animate({
      marginLeft: -slideWidth
    },800, function(){
      $tenniswoman.find('li:first').appendTo($tenniswoman);
      $tenniswoman.css('marginLeft', "");
    });
  } */

  window.setInterval(tennisfadein,interval);
  function tennisfadein(){
    $tennisSlide.find('li').hide();
    $tennisSlide.find('li:first-child').show().fadeOut(1000)
      .next().fadeIn(1000)
      .end().appendTo($tennisSlide);
  }
});



