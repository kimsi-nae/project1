$(function(){
	let tabCheck=false;
	let searchCheck=false;

	let video=document.getElementById("mainVideo");
	video.muted=true;

	video.addEventListener("loadeddata", function(){
		video.play();
	});

	video.addEventListener("ended", function(){
		video.play();
	});

	let subVideo=document.getElementById("bgVideo");
	subVideo.muted=true;

	subVideo.addEventListener("loadeddata", function(){
		subVideo.play();
	});

	subVideo.addEventListener("ended", function(){
		subVideo.play();
	});

	$("header #desktop > ul > li").hover(
		function(){
			$(this).addClass("active");
			$(".nav_bg").show();
			$("#desktop").addClass("active");
		},
		function(){
			$(this).removeClass("active");
			$(".nav_bg").hide();
			$("#desktop").removeClass("active");
		}
	);

	$("header .tab").click(function(){
		if(searchCheck === true){
			$(".search_area").removeClass("active");
			searchCheck=false;
		}

		if(tabCheck === false){
			$(this).addClass("active");
			$("#mobile").show();
			$("body").addClass("fixed");
			tabCheck=true;
		}
		else{
			$(this).removeClass("active");
			$("#mobile").hide();
			$("body").removeClass("fixed");
			tabCheck=false;
		}
	});

	$("#mobile > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") === true){
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);
		}
		else{
			$("#mobile > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#mobile ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
	});

	$(".utils .search").click(function(e){
		e.preventDefault();

		if(tabCheck === true){
			$("header .tab").removeClass("active");
			$("#mobile").hide();
			$("body").removeClass("fixed");
			tabCheck=false;
		}

		if(searchCheck === false){
			$(".search_area").addClass("active");
			searchCheck=true;
		}
		else{
			$(".search_area").removeClass("active");
			searchCheck=false;
		}
	});

	$("footer .family").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active")){
			$(this).removeClass("active");
		}
		else{
			$(this).addClass("active");
		}
	});

	const subSwiper=new Swiper("#page3 .Swiper", {
		slidesPerView: 1,
		spaceBetween: 20,
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
		breakpoints: {
			350: {
				slidesPerView: 1.5
			},
			750: {
				slidesPerView: 2
			},
			1130: {
				slidesPerView: 3
			}
		}
	});

	$("#page3 .navigation .prev").click(function(e){
		e.preventDefault();
		subSwiper.slidePrev();
	});

    $("#page3 .navigation .next").click(function(e){
        e.preventDefault();
        subSwiper.slideNext();
    });

    $("#page3 .title .menu a").click(function(e){
        e.preventDefault();
        $("#page3 .title .menu li").removeClass("active");
        $(this).parent().addClass("active");
    });

	$("footer .agree_area").click(function(e){
		e.preventDefault();

		if($("footer .check").hasClass("on")){
			$("footer .check").removeClass("on");
			$("input[name='hidden_agree']").prop({checked: false});
		}
		else{
			$("footer .check").addClass("on");
			$("input[name='hidden_agree']").prop({checked: true});
		}
	});
});