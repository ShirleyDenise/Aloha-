
 $(function() {


$("form").submit(function(){
    alert("Thanks for subscribing");
});


//items
   

        
        $('.list-products').flickity({
        cellAlign: 'center',
        contain: true,
        percentPosition: true,
        imagesLoaded: true,
        autoPlay: true,
        prevNextButtons: false
    });


//smooth scrolling

// function pageJump(id) {
//        $('html,body').animate({
//                  scrollTop: $(id).offset().top - 150

//          }, 'slow');
// };
// $('.navlink_names').on('click', function(e) {
//           e.preventDefault();
//                 var hashHref = $(this).attr('href');

//                 pageJump(hashHref);
// });



    });
    






