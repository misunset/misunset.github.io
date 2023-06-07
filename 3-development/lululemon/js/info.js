$(function(){
  var $window = $(window);
  var $productOffset = $('#product').offset().top;
  var $pdTxtBox = $('#pdTxt');

 $window.on('scroll', function(){
    scrollTop = $window.scrollTop();
    if (scrollTop > $productOffset){
      $pdTxtBox.addClass('fixed');
    } else {
      $pdTxtBox.removeClass('fixed');
    }
  });

  var $rightbutton = $('.next');
  var $leftbutton = $('.previous');
  var $slideWrap = $('#rcmd-slide');
  var $slideDiv = $('#rcmd-slide > div');
  var slideW = $slideDiv.width();
  var currentSlide = 0; // 현재 슬라이드의 인덱스 

  $rightbutton.on('click', function() {
  
    $slideWrap.animate({
      marginLeft: -slideW
    }, function(){
      // 현재 사진을 뒤로 보낸다.
      $(this).append($(this).find('div').first());
      // 그리고 바로 left 초기화를 시켜 밀리지 않도록 한다.
      $(this).css({marginLeft:0});
      // 다음 슬라이드 인덱스 계산하기. 1번 박스가 012
      currentSlide = (currentSlide + 1) % $slideDiv.length;
      console.log(currentSlide);
    });
  });
  
   $leftbutton.on('click', function() {
    $slideWrap.prepend($slideWrap.find('div').last());
    $slideWrap.css({
      marginLeft: -slideW
    });
    $slideWrap.animate({
      marginLeft:0
    }, function(){
      // 이전 슬라이드 인덱스 계산
      currentSlide = (currentSlide - 1 +$slideDiv.length) % $slideDiv.length
    });
  
  }); 

  //check box
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

  var $img = $('.infor-img');
  var $modal = $('.modal');
  var $modalImg = $('.modal-img');

  // 상세페이지에 있는 이미지를 클릭하면 
  $img.on('click', function(){
    // 모달 창과 이미지가 크게 표시되게 한다.
    $modal.show();
    var src = $(this).attr('src');
    $modalImg.attr('src', src);
  });
  // 모달을 클릭하거나, span close 를 클릭하면 사라지게 한다.
  $modalImg.on('click', function(){
    $modal.hide();
  });
  $('.close').on('click', function(e){
    e.stopPropagation();
    $modal.hide();
  });
});

// javaScript
document.addEventListener('DOMContentLoaded', function(){

  // 아코디언 토글 메뉴
  var acc = document.getElementsByClassName('toggle-bottom');
  var m;
  for (m = 0; m < acc.length; m++) {
    acc[m].addEventListener('click', function(){
      // 토글 타이틀 영역을 클릭하면 클릭한 토글이 활성화된다.
      this.classList.toggle('active');

      var accinfo = this.nextElementSibling;
      if (accinfo.style.maxHeight){
        accinfo.style.maxHeight = null;
      } else {
        accinfo.style.maxHeight = accinfo.scrollHeight + 'px';
      }
    });
  }
});
