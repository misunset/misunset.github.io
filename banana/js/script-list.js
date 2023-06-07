$(function(){
  $window = $(window);
  $content = $('.content');
  $button = $('.button > button');
  $text = $('.text');
  
  $window.on('scroll', function(){
    visible();
  });


  $('.filter-button').on('click', function(){
    var target = $(this).data('target');

    if(target === 'all') {
      $content.show();
    } else {
      $content.hide();
      $('.content[data-category="' + target + '"]').show();
    }
    $('.filter-button').removeClass('selected');
    $(this).addClass('selected');
  });

  function visible(){
    var scrollPosition = $window.scrollTop();
    var windowHeight = $window.height() / 2 ;
    $text.each(function(){
      var offsetTop = $(this).offset().top;
      if (scrollPosition  + windowHeight >= offsetTop){
        $(this).removeClass('hidden');
        $(this).addClass('visible');
      } else {
        $(this).removeClass('visible');
        $(this).addClass('hidden');
      }
    })
  };

    $shortcut = $('#shortcut');
    $leftHand = $('#left');
    $rightHand = $('#right');

    /*
    function danzi(){
    var shortcutOffset = $shortcut.offset().top;
    var windowHeight = $window.height() / 2;
    if ($window.scrollTop()+ windowHeight >= shortcutOffset) {
      $leftHand.fadeIn('slow');
      $rightHand.fadeIn('slow');
    } else {
      $leftHand.fadeOut('slow');
      $rightHand.fadeOut('slow');
    }
    console.log(shortcutOffset);
    console.log(shortcutOffset + windowHeight);
  };
  */
});
