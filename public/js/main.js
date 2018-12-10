/*************** 모달창 ***************/
var modal = document.getElementById('myModal');
 
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];                                          

// When the user clicks on the button, open the modal 
btn.onclick = function() {
	modal.style.display = "block";
	$('html, body').on('scroll touchmove mousewheel', function(event) {
		event.preventDefault();
		event.stopPropagation();
		return false;
	  });
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
	$('html, body').off('scroll touchmove mousewheel');
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
		$('html, body').off('scroll touchmove mousewheel');
	}
}

/************ 메뉴 클릭 시 사이드 메뉴 노출 ************/
//햄버거 메뉴 오버시 효과
$(".bars").hover(function(){
	$(".ham").css({"background-color":"#f3b47f"});
	$(".ham").css({"-webkit-transition": "background-color .5s, -webkit-transform .5s", "transition":"background-color .5s, transform .5s"});
}, function(){
	$(".ham").css({"background-color":"#fff"});
});

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

/************ 스크롤 시 탑메뉴 노출 ************/
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

/************ About Me의 Keyword 영역 ************/
$(".keword_box li").mousemove(function(evt){
	var delta = 15;
	var cX = evt.offsetX; // offset : 부모 기준
	var cY = evt.offsetY;
	var iX = $(this).width()/2;
	var iY = $(this).height()/2;
	var mX = (iX - cX)/delta;
	var mY = (iY - cY)/delta;
	$(this).css({"margin-left":mX+"px", "margin-top": mY+"px"});
	
});
/************ Portfolio 영역 마우스 오버 시 동작 ************/

$(".some li").hover(function(){
	$(this).find(".button").css({"display":"block"});
	$(this).find(".port_bor").css({"display": "block"});
	$(this).find("img").css({"opacity": 1, "-webkit-transform":"scale(1.03)", "transform":"scale(1.03)", "-webkit-transition":"all 0.7s ease", "transition":"all 0.5s ease"});
}, function (){
	$(this).find(".button").css({"display":"none"});
	$(this).find(".port_bor").css({"display": "none"});
	$(this).find("img").css({"opacity": 0.5, "-webkit-transform":"scale(1)", "transform":"scale(1)", "-webkit-transition":"all 0.7s ease", "transition":"all 0.5s ease"});
});


/*********** skills rolling banner ************/
var interval = setInterval(skillRev, 3000);
function skillRev() {
    $(".skills_wrap").stop().animate({"left":"-320px"}, 700, function(){
				var li = $(this).find("li").eq(0).remove();
				$(this).find(".skills_ban").append(li);
				$(this).css({"left":"-160px"});
		});    
}
/***** skills banner의 prev, next 버튼 클릭 시 *****/
function prevFn() {
	clearInterval(interval);
	$(".prev").off("click");
	$(".skills_wrap").stop().animate({"left":0}, 700, function(){
		var li = $(this).find("li").eq(4).remove();
		$(this).find(".skills_ban").prepend(li);
		$(this).css({"left":"-160px"});
		clearInterval(interval);
		interval = setInterval(skillRev, 3000);
		$(".prev").on("click", prevFn);
	});
}

function nextFn() {
	clearInterval(interval);
	$(".next").off("click");
	$(".skills_wrap").stop().animate({"left":"-320px"}, 700, function(){
		var li = $(this).find("li").eq(0).remove();
		$(this).find(".skills_ban").append(li);
		$(this).css({"left":"-160px"});
		clearInterval(interval);
		interval = setInterval(skillRev, 3000);
		$(".next").on("click", nextFn);
	});  
}
$(".prev").on("click", prevFn);
$(".next").on("click", nextFn);
/************* skills의 progress bar 효과 **************/
var progChk = true;
$(window).scroll(function(){
	var gap2 = $("html, body").scrollTop();
	if(gap2 > 1800 && progChk) {
		$(".prog_inner1").stop().animate({"width":"90%"}, 2500);
		$(".prog_inner2").stop().animate({"width":"90%"}, 2500);
		$(".prog_inner3").stop().animate({"width":"40%"}, 2500);
		$(".prog_inner4").stop().animate({"width":"30%"}, 2500);
		$(".prog_inner5").stop().animate({"width":"65%"}, 2500);
		$(".prog_inner6").stop().animate({"width":"65%"}, 2500);
		$(".skills_prog li:nth-child(2) .in li:last-child, .skills_prog li:nth-child(1) .in li:last-child").stop().animate({"left":"-9%", "opacity":1}, 2500);
		$(".skills_prog li:nth-child(3) .in li:last-child").stop().animate({"left":"-53.5%", "opacity":1}, 2500);
		$(".skills_prog li:nth-child(4) .in li:last-child").stop().animate({"left":"-62.5%", "opacity":1}, 2500);
		$(".skills_prog li:nth-child(5) .in li:last-child, .skills_prog li:nth-child(6) .in li:last-child").stop().animate({"left":"-31.2%", "opacity":1}, 2500);
		progChk = false;
	}
});

/********** Special Note 효과 **********/
var noteChk = true;
$(window).scroll(function(){

	if(768 < $(window).width() <= 992)
	{
		var gap3 = $("html, body").scrollTop();
		if(gap3 > 5000 && noteChk) {
		$(".note_bor").stop().animate({"bottom": 0}, 2000);
		$(".mac").stop().animate({"left":"21%", "opacity":1}, 1500);
		noteChk = false;
		}
	}
	else($(window).width() > 992)
	{
		var gap3 = $("html, body").scrollTop();
		if(gap3 > 2800 && noteChk) {
			$(".note_bor").stop().animate({"bottom": 0}, 2000);
			$(".mac").stop().animate({"left":"17%", "opacity":1}, 1500);
			noteChk = false;
	}
}
});

/************ 사이드메뉴, 푸터메뉴 클릭 시 화면 이동 ************/
$(".menu_close").hover(function(){
	$(this).find("img").attr("src", "img/sub_menu_icon/sub_menu_close_hover.png");
}, function(){
	$(this).find("img").attr("src", "img/sub_menu_icon/sub_close.png");
});

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
