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
    $("html").animate({scrollTop:600},300);
});

swim.click(function(){
    $("html").animate({scrollTop:1400},300);
});

IslandHop.click(function(){
    $("html").animate({scrollTop:2200},300);
});

$(".up").click(function(){
    $("html").animate({scrollTop:0},300);
});

$(window).scroll(function(){
    let scrollTop = $(document).scrollTop();
    let classjungle = $(".classjungle").offset().top;

     if ( scrollTop > classjungle){
        $(".up").fadeIn();
     }else{
        $(".up").fadeOut();
     }
    });












})



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

