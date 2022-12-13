/*Bradley Johnson 4/25/2022*/

/*-------------BIG IMAGE #HOME SCRIPT-------------*/

$(document).ready(function(){
    $('.hero').height($(window).height());
});

/*-------------SCROLL ANIMATION SCRIPT-------------*/

function scrollToAnchor(aid){
    const destination = $("a[name='"+ aid +"']");
      $('html,body').animate({
        scrollTop: destination.offset().top
      },'slow');
  }
  /*warps to class smoothly*/
  $(document).on('click', '.About', function(){
    scrollToAnchor('About');
  })
  $(document).on('click', '.Home', function(){
    scrollToAnchor('Home');
  })
  $(document).on('click', '.Projects', function(){
    scrollToAnchor('Projects');
  })
  $(document).on('click', '.Interests', function(){
    scrollToAnchor('Interests');
  })
  $(document).on('click', '.Contact', function(){
    scrollToAnchor('Contact');
  })