$(function() {


$("form").submit(function(){
    alert("Thanks for subscribing");
});


//flickity
   

        
        $('.list-products').flickity({
        cellAlign: 'left',
        contain: true,
        percentPosition: true,
        imagesLoaded: true,
        autoPlay: true,
        prevNextButtons: false
    });


//smooth scrolling

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



    });
    





