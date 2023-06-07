$(function(){
  var $modal = $('#modal');
  var $designImage = $('#designImage');
  var $imageButton = $('.popup > button > a');
  var $sidemenu = $('.btn');
  
  // 사이드메뉴 해당 컨텐츠만 나타나게 하기
  /* $(document).ready(function(){
  }); */

  $sidemenu.on('click', function(){
    $sidemenu.removeClass('selected');
    $(this).addClass('selected');

    var selector = $(this).attr('data-filter');
    if (selector === '*'){
      $('#web, #design').fadeIn(400);
    } else if (selector === '#design'){
      $(selector).fadeIn(400);
      $('#web').fadeOut();
    } else {
      $(selector).fadeIn(400);
      $('#design').fadeOut();
    }
  });

  $imageButton.click(function(e){
    // button 을 클릭하면 <a> 요소 이벤트 제거
    e.preventDefault();

    // 팝업창으로 나타나게 한다.
    $modal.fadeIn(200);
    $designImage.fadeIn(200);
    var src = $(this).attr('href');
    var img = "<img src='" + src + "'>";
    $designImage.html(img);
    });

    // 이미지 클릭하면 사라지게 한다.
    $designImage.click(function(){
      $(this).fadeOut();
      $modal.fadeOut();
  })
  
});