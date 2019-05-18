$(function() {
    $(document).ready( function(){
        // ページ読み込み時に実行したい処理
        $('.img').css({opacity:0});
        $('.box .btn').css({opacity:0});
        });
    $('.startbtn').click(function() {
        $('.img').css({opacity:1});
        $('.box .btn').css({opacity:1});
        $('.startbtn').fadeOut('5000', function() {
            $('.startbtn').remove();
                // $('#title p').fadeOut('5000');
                $('#title span').css('color','white');
        })
    })
})