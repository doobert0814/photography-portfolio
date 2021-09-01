$(document).ready(function(){	
	//Tooltip
	$('.follow_us a').tooltip();
	
	//PrettyPhoto
	$("a[rel^='prettyPhoto']").prettyPhoto();
	
	//Image hover
	$(".hover_img").live('mouseover',function(){
			var info=$(this).find("img");
			info.stop().animate({opacity:0.2},300);
			$(".preloader").css({'background':'none'});
		}
	);
	$(".hover_img").live('mouseout',function(){
			var info=$(this).find("img");
			info.stop().animate({opacity:1},300);
			$(".preloader").css({'background':'none'});
		}
	);
});	