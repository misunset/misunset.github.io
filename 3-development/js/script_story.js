$(function(){

    // 요소 미리 찾아놓기
    var $logo = $('#logo > a > img');
    var $nav = $('#nav > li > a');
    var $window = $(window);
    var $introduce = $('#introduce');
    var $streetOn = $('#street-on');
    var $profile = $('#profile');
    var $skills = $('#skills');
    var bannerHeight = $('#banner').outerHeight();
    var $bannerH1 = $('#content-wrap1 > h1');
    var timeOut = 1000;

    // class 적용된 img 태그만 선택!
    var $ps = $('.ps > .skills-lamp > .light > img');
    var $ai = $('.ai > .skills-lamp > .light > img');
    var $html = $('.html > .skills-lamp > .light > img');
    var $css = $('.css > .skills-lamp > .light > img');
    var $jquery = $('.jquery > .skills-lamp > .light > img');
    
    // load 이벤트
    if ($window.scrollTop() <= bannerHeight) {
        $bannerH1.css('opacity', 0)
            .css('visibility', 'visible')
            .css('transition', 'opacity 1s ease-in-out');

        window.setTimeout(function() {
            $bannerH1.css('opacity', 1);
        }, 100);
    } else {
        $bannerH1.css('opacity', 0)
            .css('visibility', 'hidden');
    }
        
    // bannerH1 해당하는 영역에서만 보여지기
    function bannerH1 (){
        var scrollPosition = $window.scrollTop();
        if (scrollPosition >= bannerHeight) {
            $bannerH1.css('opacity', 0)
                .css('visibility', 'hidden');
        } else {
            $bannerH1.css('opacity', 1)
                .css('visibility', 'visible')
                .css('transition', 'opacity 1s ease-in-out');
        }
    }

    // 스크롤 이벤트
    $window.scroll(function(){
        bannerH1();
        colorChange();
        visible();
        eachlampOn();
        window.setTimeout(function(){
            streetOn();
        }, 1500);
    });
    

    // header 색상 변경하는 함수 생성!
    function colorChange() {
        var scrollPosition = $window.scrollTop();
        var profilePosition = $profile.offset().top - 60;
        var skillsPosition = $skills.offset().top - 60 ;
      
        if (scrollPosition >= profilePosition) {
          $logo.attr('src', './images/logo-navy.png');
          $nav.addClass('dark');
        } else {
          $logo.attr('src', './images/logo.png');
          $nav.removeClass('dark');
        }
        if (scrollPosition >= skillsPosition) {
          $logo.attr('src', './images/logo.png');
          $nav.removeClass('dark');
        }
    };

    // con 서서히 뜨게하는 효과 함수 생성!
    function visible(){

        $('.con').each(function() {
            var scrollPosition = $window.scrollTop();
            var windowHeight = $window.height();
            var windowTop = scrollPosition + windowHeight;
            var offsetTop = $(this).offset().top;
            
            if (offsetTop < windowTop && $(this).hasClass('hidden')) {
                $(this).removeClass('hidden');
                $(this).animate({ 
                    opacity: 1 
                }, 500);
            } else if (offsetTop > windowTop && !$(this).hasClass('hidden')) {
                $(this).addClass('hidden');
                $(this).animate({ 
                  opacity: 0 
                }, 500);
            }  
        });
    }

    // introduce - street-lightOn 함수 생성!
    function streetOn(){
        var scrollPosition = $window.scrollTop();
        var introducePosition = $introduce.offset().top;
        var introduceHeight = $introduce.outerHeight();

        if (scrollPosition >= (introducePosition + introduceHeight) || scrollPosition < introducePosition){
            $streetOn.css('visibility', 'hidden').css('opacity','0');
        } else {
            $streetOn.css('visibility', 'visible').css('opacity','1');
        }        
    }


    var timerIds = [];
    // skills lamp 켜지는 함수 생성!
    function eachlampOn(){
        var scrollPosition = $window.scrollTop();
        var skillsPosition = $skills.offset().top;

        console.log('현재스크롤위치' + scrollPosition);
        console.log('skill 위치' + skillsPosition);
        var timerId;

        if (scrollPosition >= skillsPosition) {

            $ps.each(function(index) {
                var img = $(this);
                timerId = setTimeout(function() {
                    img.css('opacity', '1');
                }, index * 200);
                timerIds.push(timerId);
            });  
            $ai.each(function(index) {
                var img = $(this);
                timerId = setTimeout(function() {
                    img.css('opacity', '1');
                }, index * 200);
                timerIds.push(timerId);
            }); 
            $html.each(function(index) {
                var img = $(this);
                timerId = setTimeout(function() {
                    img.css('opacity', '1');
                }, index * 200);
                timerIds.push(timerId);
            });    
            $css.each(function(index) {
                var img = $(this);
                timerId = setTimeout(function() {
                    img.css('opacity', '1');
                }, index * 200);
                timerIds.push(timerId);
            });  
            $jquery.each(function(index) {
                var img = $(this);
                timerId = setTimeout(function() {
                    img.css('opacity', '1');
                }, index * 200);
                timerIds.push(timerId);
            });  
        } else {
            // 진행 중, 혹은 진행 예정인 모든 타이머 기능을 해제한다. 
            for (var i = 0; i < timerIds.length; i++){
                clearTimeout(timerIds[i]);
            }
            timerIds = [];    
            $ps.add($ai).add($html).add($css).add($jquery).css('opacity', '0.3');
        }
    }
});
