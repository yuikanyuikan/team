// 最初icon消す
$(".left").css("display","none");
$(".up").css("display","none");

// swiper
var swiper = new Swiper('.swiper-container', {
    effect: "cube",
    loop: "true",
    
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    } 
  });


// Sectionにjump
$(function(){

let forest = $("#forest");
let swim = $("#swim");
let IslandHop = $("#IslandHop");

forest.click(function(){
    $("html").animate({scrollTop:1800},300);
});

swim.click(function(){
    $("html").animate({scrollTop:2600},300);
});

IslandHop.click(function(){
    $("html").animate({scrollTop:3400},300);
});

$(".up").click(function(){
    $("html").animate({scrollTop:1200},300);
});

$(".video").click (function(){
    $("html").animate({scrollTop:1200},2000);
});

$(window).scroll(function(){
    let scrollTop = $(document).scrollTop();
    let classjungle = $(".classjungle").offset().top;

     if (scrollTop > classjungle -100){
        $(".up").fadeIn();
     }else{
        $(".up").fadeOut();
     }
    });

})

$(window).scroll(function(){
    let scrollTop = $(document).scrollTop();
    let classjungle = $(".classjungle").offset().top;

     if (scrollTop > classjungle -100){
        $(".left").fadeIn();
     }else{
        $(".left").fadeOut();
    }

});




$(document).ready(function(){
	$('body').pointer();
});


// ポインターがまる
(function($){
	$.fn.pointer = function (options) {
		var settings = {
			size : 80,
			spd : 300,
			color : "#ccc"
		}
		settings = $.extend(settings, options);
		
		var circle_style = {
			"position":"absolute",
			"z-index":9999,
			"height":10,
			"width":10,
			"border":"solid 4px "+settings.color,
			"border-radius":settings.size
		}
		return this.each(function() {
			var $this = $(this);
			$this.css({"position":"relative"});
			$(document).click(function(e){
				var x = e.pageX-5;
				var y = e.pageY-5;
				
				var pos = {
					top :(-settings.size/2)+y,
					left :(-settings.size/2)+x
				}
		
				$this.append('<div class="circle"></div>');
				$this.find(".circle:last").css(circle_style).css({
					"top":y,
					"left":x
				}).animate({"height":settings.size,"width":settings.size,"left":pos.left,"top":pos.top},{duration:settings.spd,queue:false})
				.fadeOut(settings.spd*1.8,function(){
					$(this).remove();
				});
			});
		});
	}
})(jQuery); 


// $(function() {
//     // $(document).ready( function(){
//     //     $('.box').css({opacity:0});
//     // })
//     $('.startbtn').click(function() {
//         $('.clothes').fadeOut('10000',function() {
//             $('.clothes').remove();
//             $('.title').fadeOut('5000',function() {
//                 $('.title').remove();
//                 // $('.btn').fadeIn('10000');
//             })
//         })
//     })
// })

