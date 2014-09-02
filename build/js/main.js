var vpWidth = $(window).width(),
    vpHeight = $(window).height();

$(window).resize(function(){
  vpWidth = $(window).width();
  vpHeight = $(window).height();
});




function registerParallaxMe($target){
  var targetOffsetByBottom;

  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop(),

    targetOffsetByBottom = $target.offset().top + $target.height() - scrollTop;
    
    if (targetOffsetByBottom > vpHeight + $target.height()) {
      targetOffsetByBottom = vpHeight + $target.height();
    } else if (targetOffsetByBottom < 0) {
      targetOffsetByBottom = 0;
    }

    var bgPosY = (targetOffsetByBottom/(vpHeight + $target.height()))*100 + '%';
    $target.css('background-position', '50% '+bgPosY);

  });
}


$('.parallax-me').each(function(){
  registerParallaxMe($(this));
});