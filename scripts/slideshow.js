// Slideshow
(function($){

    'use strict';

    const $slideShow = $('.slideshow');
    const duration = 12000;
    const fadeTime = 2000;

    $('img:gt(0)', $slideShow).hide();
    setInterval(function(){
      $('img:first-child', $slideShow)
         .fadeOut(fadeTime)
         .next('img')
         .fadeIn(fadeTime)
         .end()
         .appendTo($slideShow);
    }, duration);

})(jQuery);