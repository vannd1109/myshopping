$(window).scroll(function(event) {
	/* Act on the event */
	var position = $('html,body').scrollTop();

	if(position >= ($('.sale').offset().top - 60)){
		$('.back_top').addClass('show_back_top');
	}else{
		$('.back_top').removeClass('show_back_top');
	}
});