// swiper
var swiper = new Swiper('.swiper-container', {
    effect: "cube",
    loop: "true",
    
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    } 
  });


$(function(){

let forest = $("#forest");
let swim = $("#swim");
let IslandHop = $("#IslandHop");

forest.click(function(){
    $("html").animate({scrollTop:700},300);
});

swim.click(function(){
    $("html").animate({scrollTop:1400},300);
});

IslandHop.click(function(){
    $("html").animate({scrollTop:2100},300);
});
})