(function ($, window, document, undefined) {

  'use strict';

  $('html').toggleClass('no-js js');

  /* 
   * fade in article's on ready
   */
  setTimeout(function(){
    $('article').addClass('fadein');
  }, 120);
  

  /* 
   * add Class for full viewport width image
   */
  $('.img-header').each(function(i, figure){ 
    var imgsrc = $(figure).find('img').attr('src');

    $(figure).css({
      'background-image': 'url('+ imgsrc +')',
      'background-repeat': 'no-repeat'
    }).addClass('full-width');
  });


  // var supportsTouch = (typeof Touch == "object");
  // if (!supportsTouch) $('html').addClass('notouch')


  /* 
   * Google Analytics 
   */

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-47892597-1', 'flowen.nl');
  ga('send', 'pageview');


})(jQuery, window, document);