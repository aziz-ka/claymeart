$(function() {
	var url = window.location.href;
	$("header ul li a").each(function() {
		if(url == this.href) {
			$(this).addClass("current");
		}
	});
	
	//	portfolio gallery
	var hoverme = $(".gallery li");
	hoverme.hover(function() {
		$(hoverme).css("-webkit-filter", "blur(3px)");
		$(this).css("-webkit-filter", "blur(0)");
	}, function() {
		$(hoverme).css("-webkit-filter", "blur(0)");
		$(this).css("-webkit-filter", "blur(0)");
	});
})