var main = function() {
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: '0px'
    }, 300);

    $('body').animate({
      left: '285px'
    }, 300);
  });
  
  
  $('.icon-close').click(function() {
      $('.menu').animate({
          left: "-285px"
      }, 300);
      
    $('body').animate({
        left: "0px"
    }, 300);
  });
  
  $('.menu li.dropdown').ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(500);
        },
        function(){
            $(this).children('.sub-menu').slideUp(500);
        }
    );
  };
};
$(document).ready(main);
