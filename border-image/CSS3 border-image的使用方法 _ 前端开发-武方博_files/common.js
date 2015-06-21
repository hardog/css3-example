//返回顶部按钮
$(function() {
if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) { 
} else{
	$("body").append('<div id="backTop"></div>')
		$(window).scroll(function(){
			if ($(window).scrollTop()>100){
			$("#backTop").fadeIn(400);
			}else{
			$("#backTop").fadeOut(400).hide();
			}
		});
		$("#backTop").click(function(){
			$('body,html').animate({scrollTop:0},200); 
			return false;
		});
}
});

//隐藏为空的文内分页
$(function() {
$("#fenye a").each(function(){
	if($(this).text().length==0){
		$(this).remove();
		}
	})
});

//导航悬浮
$(function(){
       $(window).scroll(function(){
			if($(window).scrollTop()>=226){
				$(".navWrap").addClass("navWrapFix");
			}else{
				$(".navWrap").removeClass("navWrapFix");
			} 
       });

})
  