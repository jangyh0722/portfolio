$(".ham_menu").click(function(){
    $(".sub_menu").stop().animate({"left":300}, 700);
    $(".main_txt").stop().animate({"margin-left": 300+"px"});
    $(".top_menu").stop().animate({"opacity": 0});
});
$(".menu_close").click(function(){
    $(".sub_menu").stop().animate({"left": -300}, 700);
    $(".main_txt").stop().animate({"margin-left": 0 +"px"});
    $(".top_menu").stop().delay(300).animate({"opacity": 1});
});

$(".port .some").each("li").hover(function(){
    $(this).attr("img").stop().animate({"opacity": 0.7}, 500)
}, function(){
    $(this).attr("img").stop().animate({"opacity": 0.8}, 500)
});