/************  메뉴 클릭 시 사이드 메뉴 노출  ************/
$(".ham_menu").click(function(){
    $(".sub_menu").stop().animate({"left":300}, 700);
    $(".main_txt").stop().animate({"margin-left": 300+"px"});
    $(".top_menu").stop().animate({"opacity": 0});
});
$(".menu_close").click(function(){
    $(".sub_menu").stop().animate({"left": -300}, 700);
    $(".main_txt").stop().animate({"margin-left": 0 +"px"});
    $(".top_menu").stop().delay(300).animate({"opacity": 0.8});
});

/************  포트폴리오 영역 마우스 오버 시 동작  ************/

$(".some li").hover(function(){
	$(this).find(".button").css({"display":"block"});
	$(this).find(".port_bor").css({"display": "block"});
	$(this).find("img").css({"opacity": 1, "-webkit-transform":"scale(1.03)", "transform":"scale(1.03)", "-webkit-transition":"all 0.7s ease", "transition":"all 0.5s ease"});
}, function (){
	$(this).find(".button").css({"display":"none"});
	$(this).find(".port_bor").css({"display": "none"});
	$(this).find("img").css({"opacity": 0.5, "-webkit-transform":"scale(1)", "transform":"scale(1)", "-webkit-transition":"all 0.7s ease", "transition":"all 0.5s ease"});
});


/************  스크롤 시 탑 메뉴 동작  ************/
$(window).scroll(function(){
	var gap = $("html, body").scrollTop();
	if(gap > 80) {
		if($(".top_menu").hasClass("dn_bg") == false) {
			$(".top_menu").css({"top":"-60px", "padding": "50px"}).addClass("dn_bg");
			$(".top_menu").stop().animate({"top":"-25px"}, 500);
		}
	}
	else {
		$(".top_menu").css({"top":"-60px"}).removeClass("dn_bg");
		$(".top_menu").stop().animate({"top":"0px"}, 500);
	}
});

/************  사이드메뉴, 푸터메뉴 클릭 시 화면 이동  ************/
$("#menu0").click(function(){
	var position = $("#window0").offset();
	$("body, html").stop().animate({scrollTop:position.top},500);
});
$(".cl_menu0").click(function(){
	var position = $("#window0").offset();
	$("body, html").stop().animate({scrollTop:position.top},500);
});
$("#menu1").click(function(){
	var position = $("#window1").offset();
	$("body, html").stop().animate({scrollTop:position.top},500);
});
$(".cl_menu1").click(function(){
	var position = $("#window1").offset();
	$("body, html").stop().animate({scrollTop:position.top},500);
});
$("#menu2").click(function(){
	var position = $("#window2").offset();
	$("body, html").stop().animate({scrollTop:position.top},500);
});
$(".cl_menu2").click(function(){
	var position = $("#window2").offset();
	$("body, html").stop().animate({scrollTop:position.top},500);
});

$("#menu3").click(function(){
	var position = $("#window3").offset();
	$("body, html").stop().animate({scrollTop:position.top},500);
});
$(".cl_menu3").click(function(){
	var position = $("#window3").offset();
	$("body, html").stop().animate({scrollTop:position.top},500);
});

$("#menu4").click(function(){
	var position = $("#window4").offset();
	$("body, html").stop().animate({scrollTop:position.top},500);
});
$(".cl_menu4").click(function(){
	var position = $("#window4").offset();
	$("body, html").stop().animate({scrollTop:position.top},500);
});


/***********  skills banner ************/

var interval = setInterval(skillRev, 3000);
function skillRev() {
    $(".skills_wrap").stop().animate({"left":"-160px"}, 700, function(){
				var li = $(this).find("li").eq(0).remove();

				$(this).find(".skills_ban").append(li);
				$(this).css({"left":0});
		});    
}
/***** prev, next 버튼 클릭 시 *****/
$(".prev").click(function(){
	
/*
	var li = $(".skills_wrap").find("li").eq(4).remove();
	$(".skills_wrap").find(".skills_ban").prepend(li);
	$(".skills_wrap").stop().animate({"left":"160px"}, 700);
*/
	$(".skills_wrap").stop().animate({"left":"160px"}, 700, function(){
		var li = $(this).find("li").eq(4).remove();
		$(this).find(".skills_ban").prepend(li);
		$(this).css({"left":0});
});
});

$(".next").click(function(){
	$(".skills_wrap").stop().animate({"left":"-160px"}, 700, function(){
		var li = $(this).find("li").eq(0).remove();
		$(this).find(".skills_ban").append(li);
		$(this).css({"left":0});
});    
});
