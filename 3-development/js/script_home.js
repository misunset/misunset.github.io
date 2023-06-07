$(function(){
  var time = 1500;
  var $hello = $('.hello');
  var text = 'Hello!';
  var i = 0;
  var typingSpeed = 300;
  var $deskOn = $('#desk-wrap > .on');
  var $overlay = $('#overlay');
  var isWheeling = false; 

  $(window).on('wheel', function(e){
    if (isWheeling) return; 
    isWheeling = true; 
    mainFadein(e);
    window.setTimeout(function(){
      blindUp();
      isWheeling = false; 
    }, time);
  });
  

  var $blindWrap = $("#blind-wrap");
  var $spans = $blindWrap.find("span");
  var spansLength = $spans.length;
  
  // desk on img 보여지게 하는 효과
  // blind 각 span에 대한 애니메이션 실행
  function blindUp(){
    
    if($overlay.is(':hidden')){
      $deskOn.fadeIn('200', function(){
        type();
        $spans.each(function(index) {
        var delay = 200 * (spansLength - index + 1);
        var $this = $(this);
        setTimeout(function() {
          $this.find("img").animate({
            marginTop: "-100%",
            opacity: 1
          }, 1000);
        },delay);
      })
    });
      
    } else {
       $deskOn.fadeOut('200', function(){
        i = 0;
        $hello.text('');
        clearTimeout(typingTimeout); // 타이핑 중지

        $spans.find('img').css({
          marginTop: "0",
          opacity: 1
        });
      });
    }
  }

  var $scrollDown = $('#scrolldown');
  // mouse up
  
  function mouseUp(){
    window.setTimeout(function(){
      $scrollDown.css({
        top: '70%',
        opacity: '0.5',
        transitionDuration: '800ms'
      });
    }, time);
  }
  
  // overlay fadeOut 효과
  function mainFadein(e){
  if (e.originalEvent.deltaY > 0) {
    $overlay.fadeOut('slow');
    mouseUp();
  } 
  else if (e.originalEvent.deltaY < 0) {
    $overlay.fadeIn('slow');
    $scrollDown.css({
      top: '',
      opacity: '1',
      transitionDuration: '800ms'
    });
  }
}

  // typing 효과
  var typingTimeout;

  function type() {
    $hello.text(text.substring(0, i));
    i++;
    if($overlay.is(':hidden')){
      typingTimeout = setTimeout(type, typingSpeed);
    } else {
      i = 0;
      $hello.text('');
    }
  }
});
