$(document).ready(function() { 

  $(".welldoneitem").mousemove( function(e) {
   var mouseX = e.clientX+7; 
   var mouseY = e.clientY-15;
   $(this).find('article.description').css('top',mouseY).css('left',mouseX);
  });  
  
  $('.welldoneitem').hover(
    function() {
      $(this).find('article.description').css("visibility","visible");
      var desch = $(this).find('article.description p').height();
      $(this).find('article.description').css("height",desch+70);
    },
    function() { 
      $('article.description').css("visibility","hidden");
    });
});


// masonry stuff to fit everything together...
$(function(){
  var $container = $('#masonry');
  
  $container.imagesLoaded( function(){
    $container.masonry({
      // options
      itemSelector : 'li'
    });
  });

});

// slideshow code for gallery page...
$('.slideshow').cycle({
  fx: 'fade',
  speed: 700,
  timeout:0,
  next:'.slideshow'
});
