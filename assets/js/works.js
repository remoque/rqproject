$(function() {
  $(".works-modal").colorbox({
    iframe: true,
    width: "90%",
    height: "85%",
    maxWidth: "1000px",
    maxHeight: "665px",
    opacity: 0.8,
    fixed: true,
  onOpen: function() {
    var ycoord = $(window).scrollTop();
    $('#colorbox').data('ycoord',ycoord);
    ycoord = ycoord * -1;
    $('body').css('position','fixed').css('left','0px').css('right','0px').css('top',ycoord + 'px');
  },
  onClosed: function() {
    $('body').css('position','').css('left','auto').css('right','auto').css('top','auto');
    $(window).scrollTop($('#colorbox').data('ycoord'));
  }

  });
});
