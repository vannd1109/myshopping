$(window).scroll(function(event) {
	/* Act on the event */
	let position = $('html,body').scrollTop();

	let position_tabs = $('.my_shopping--tabs').offset().top;

	if(position >= (position_tabs - 600)){
		$('.my_shopping--product-choose').addClass('my_shopping--product-choose-open');
		$('.my_shopping--product-choose').removeClass('my_shopping--product-choose-close');
		$('.my_shopping ').addClass('my_shopping--changed');
	}else{
		$('.my_shopping--product-choose').removeClass('my_shopping--product-choose-open');
		$('.my_shopping--product-choose').addClass('my_shopping--product-choose-close');
		$('.my_shopping ').removeClass('my_shopping--changed');
	}
});

document.addEventListener("DOMContentLoaded", function() {
	let colors = document.querySelectorAll('.my_shopping--product__color--item'),
	sizes = document.querySelectorAll('.my_shopping--product__info--size--link');

	for(let i = 0; i < colors.length; i++){
		colors[i].addEventListener('click', function(){
			for(let i = 0; i < colors.length; i++){
				colors[i].classList.remove('active');
			}
			colors[i].classList.add('active');
		});
	}

	for(let i = 0; i < sizes.length; i++){
		sizes[i].addEventListener('click', function(){
			for(let i = 0; i < sizes.length; i++){
				sizes[i].classList.remove('active');
			}
			sizes[i].classList.add('active');
		});
	}
});