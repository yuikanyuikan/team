$(function(){
    $(window).scroll(function() {
        let scrollTop = $(document).scrollTop();

        let mainTop = $('.photo').offset().top;

        if (scrollTop > mainTop ) {
            $('.photo').fadeIn();
        };
    })
})
