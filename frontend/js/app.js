
let my_shopping = document.getElementById('my_shopping');

my_shopping.classList.add("my_shopping_minus");


document.addEventListener("DOMContentLoaded", function() {
	var items = document.querySelectorAll('.menu_min--item-label'),
	item_s = document.querySelectorAll('.menu_min-item-link'),
	items_sidebar = document.querySelectorAll('.menu_sidebar--link'),
	item_link = document.querySelectorAll('.menu_sidebar--item-link');

	// my_shopping.classList.remove("my_shopping_minus");

	setInterval(() => {
		my_shopping.classList.toggle("my_shopping_minus");
	}, 5000);
	for(let i = 0; i < items.length ; i++)
	{
		items[i].addEventListener('click', function(){
			if(items[i].nextElementSibling.style.display == "block"){
				items[i].nextElementSibling.style.display = "none";
				if(items[i].children.length == 2){
					items[i].children[0].style.display = "block";
					items[i].children[1].style.display = "none";
				}

				if(items[i].children.length == 3){
					items[i].children[1].style.display = "block";
					items[i].children[2].style.display = "none";
				}
			}else{
				items[i].nextElementSibling.style.display = "block";
				if(items[i].children.length == 2){
					items[i].children[0].style.display = "none";
					items[i].children[1].style.display = "block";
				}
				if(items[i].children.length == 3){
					items[i].children[1].style.display = "none";
					items[i].children[2].style.display = "block";
				}
			}
		});
	}

	for(let i = 0; i < item_s.length ; i++){
		item_s[i].addEventListener('click', function(){

			if(item_s[i].nextElementSibling.style.display == "block"){
				item_s[i].nextElementSibling.style.display = "none";
				item_s[i].style.color = "black";
				if(item_s[i].children.length == 2){
					item_s[i].children[0].style.display = "block";
					item_s[i].children[1].style.display = "none";
				}
				if(item_s[i].children.length == 3){
					item_s[i].children[2].style.display = "none";
					item_s[i].children[1].style.display = "block";
				}
			}else{
				item_s[i].nextElementSibling.style.display = "block";
				item_s[i].style.color = "#ff4c3b";
				if(item_s[i].children.length == 2){
					item_s[i].children[0].style.display = "none";
					item_s[i].children[1].style.display = "block";
				}

				if(item_s[i].children.length == 3){
					item_s[i].children[1].style.display = "none";
					item_s[i].children[2].style.display = "block";
				}
			}
		});
	}

	for(let i = 0; i < items_sidebar.length ; i++){

		items_sidebar[i].addEventListener('click', function(){

			if(items_sidebar[i].nextElementSibling.style.display == "block"){
				items_sidebar[i].nextElementSibling.style.display = "none";
				items_sidebar[i].children[1].style.display = "block";
				items_sidebar[i].children[2].style.display = "none";
				// }
			}else{
				items_sidebar[i].nextElementSibling.style.display = "block";
				items_sidebar[i].children[1].style.display = "none";
				items_sidebar[i].children[2].style.display = "block";
				// }
			}
		});

	}

	for(let i = 0; i < item_link.length ; i++){

		item_link[i].addEventListener('click', function(){
			if(item_link[i].nextElementSibling.style.display == "block"){
				item_link[i].nextElementSibling.style.display = "none";
				item_link[i].children[1].style.display = "block";
				item_link[i].children[2].style.display = "none";
			}else{
				item_link[i].nextElementSibling.style.display = "block";
				item_link[i].children[1].style.display = "none";
				item_link[i].children[2].style.display = "block";
			}
		});
	}

	
	let val = 0;

	rotateItem = item => {
		item.style.transform = "rotate(" + val + "deg)";
		item.style.webkitTransform = "rotate(" + val + "deg)";
		item.style.mozTransform = "rotate(" + val + "deg)";
		val += 10; 
	}
	setInterval(() => rotateItem(document.getElementById('turned'), 0) ,80);

});


$(document).ready(function() {
	// open_menu
	// $(window).scroll(function(event) {
		
		if(window.innerWidth < 768){
			var mySwiper2 = new Swiper('.swiper-container-blog', {
				slidesPerView: 1,
				spaceBetween: 30,
				slidesPerGroup: 1,
				loop: true,
			});

			var mySwiperBrand = new Swiper('.swiper-container-brand', {
				slidesPerView: 3,
				spaceBetween: 30,
				slidesPerGroup: 3,
				loop: true,
			});
		}
		if(window.innerWidth < 992){
			var swiper = new Swiper('.swiper-containers', {
				slidesPerView: 2,
				spaceBetween: 30,
				slidesPerGroup: 2,
				loop: true,
				loopFillGroupWithBlank: true,
			});
		}
		if(window.innerWidth < 1200 && window.innerWidth > 992){
			var swiper = new Swiper('.swiper-containers', {
				slidesPerView: 3,
				spaceBetween: 30,
				slidesPerGroup: 3,
				loop: true,
				loopFillGroupWithBlank: true,
			});
		} 
		if(window.innerWidth >= 1200){
			var swiper = new Swiper('.swiper-containers', {
				slidesPerView: 4,
				spaceBetween: 30,
				slidesPerGroup: 4,
				loop: true,
				loopFillGroupWithBlank: true,
			});
			var mySwiper2 = new Swiper('.swiper-container-blog', {
				slidesPerView: 3,
				spaceBetween: 30,
				slidesPerGroup: 3,
				loop: true,

			});
		}
		if(window.innerWidth < 1200 && window.innerWidth > 768){
			var mySwiper2 = new Swiper('.swiper-container-blog', {
				slidesPerView: 2,
				spaceBetween: 30,
				slidesPerGroup: 2,
				loop: true,

			});
		}	

		if(window.innerWidth < 600){
			var mySwiper3 = new Swiper('.swiper-container-instagram', {
				slidesPerView: 4,
				slidesPerGroup: 4,
				loop: true,

			});
		}

		if(window.innerWidth > 600 && window.innerWidth < 1023){
			var mySwiper3 = new Swiper('.swiper-container-instagram', {
				slidesPerView: 5,
				slidesPerGroup: 5,
				loop: true,

			});
		}

		if(window.innerWidth > 768 && window.innerWidth < 1023){
			var mySwiperBrand = new Swiper('.swiper-container-brand', {
				slidesPerView: 4,
				spaceBetween: 30,
				slidesPerGroup: 4,
				loop: true,
			});
		}

		if(window.innerWidth > 1023){
			var mySwiper3 = new Swiper('.swiper-container-instagram', {
				slidesPerView: 6,
				slidesPerGroup: 6,
				loop: true,

			});
			var mySwiperBrand = new Swiper('.swiper-container-brand', {
				slidesPerView: 5,
				spaceBetween: 30,
				slidesPerGroup: 5,
				loop: true,
			});
		}
	// });
	

	
	$('.navbar-toggler').click(function(event) {
		$('.menu_min').addClass('open_menu');
		$('.navbar-toggler').addClass('hide');
	});

	$('.menu_min--back').click(function(event) {
		$('.menu_min').removeClass('open_menu');
		$('.navbar-toggler').removeClass('hide');
	});

	$('.show_menu_sidebar').click(function(event) {
		$('.menu_sidebar').addClass('show_menu_sidebar');
		$('.bg_sidebar').addClass('show_menu_sidebar');
	});

	$('.menu_min--back-sidebar').click(function(event){
		$('.menu_sidebar').removeClass('show_menu_sidebar');
		$('.bg_sidebar').removeClass('show_menu_sidebar');
	});

	$('.bg_sidebar').click(function(event){
		$('.menu_sidebar').removeClass('show_menu_sidebar');
		$('.bg_sidebar').removeClass('show_menu_sidebar');
	});

	$('.menu_option--icon-search, .menu_sidebar--bottom-search').click(function(){
		$('.search').addClass('show_search');
	});

	$('.search_content--close-icon').click(function(){
		$('.search').removeClass('show_search');
	});

	$('.dark_light').click(function(){

		if($('.dark_light').text() == 'Light'){
			$('.dark_light').text('Dark');
		}else{
			$('.dark_light').text('Light');
		}

		$('body').toggleClass('dark');
	});

	$('.back_top').click(function(event) {
		/* Act on the event */
		$("html, body").animate({scrollTop:0},100,"easeInBack");
	});
})