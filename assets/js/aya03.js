$(function() {
    // $(document).ready( function(){
    //     $('.box').css({opacity:0});
    // })
    $('.startbtn').click(function() {
        $('.clothes').fadeOut('10000',function() {
            $('.clothes').remove();
            $('.title').fadeOut('5000',function() {
                $('.title').remove();
                // $('.btn').fadeIn('10000');
            })
        })
    })
})