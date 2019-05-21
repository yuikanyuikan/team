$(function(){
//     $(window).scroll(function() {
//     let scroll = $(document).scrollTop();
//     console.log(scroll);
// });
    // <button class="content in-main">ABOUT WEBSITE</button>がクリックされた時、
    $('.in-main').click(function () {
        // htmlのscrollTopの300下までアニメーションで移動する。
        $('html').animate({scrollTop: 300} ,500)

        let html = $('html');
        if(html > scrollTop - 300) {
            $('.strong').fadeIn('10000');
            $('.strong').css('color', 'rgba(255, 94, 0, 0.698)');
        }
    });

    // <button class="content in-footer">TEAM GAP</button>がクリックされた時、
    $('.in-footer').click(function () {
        // htmlのscrollbottomまでアニメーションで移動する。
        $('html').animate({scrollTop: 1230} ,500);
    })

    // <img class="okinawa" src="./img/logo.png"></img>がクリックされた時、
    $('.okinawa').click(function () {
        $('html').animate({scrollTop: 0},1000);
    })
    // <img class="img" src="./img/active.jpg" alt="">
    // <img class="img" src="./img/road_trip.jpeg" alt="">がマウスオーバーされた時、
    $('.img').mouseover(function() {
        $('.img').css('background-color','whitesmoke')
    })
});