$(function(){
    $(window).scroll(function() {
        let scrollTop = $(document).scrollTop();

        let mainTop = $('.left-img').offset().top;

        if (scrollTop > mainTop -550 ) {
            $('.left-img').animate({left : 0}, 1500);
        };

        // let mainTop = $('.right-img').offset().top;
        if (scrollTop > mainTop -550) {
            $('.right-img').animate({right : 0}, 1500);
        };

        if (scrollTop > mainTop -550) {
            $('.center-img').fadeIn(2000);
        };
        })
})
