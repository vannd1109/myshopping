let my_shopping_header = document.getElementById('my_shopping--header');

my_shopping_header.classList.add("my_shopping_minus");

document.addEventListener("DOMContentLoaded", function() {

	setInterval(() => {
		my_shopping_header.classList.toggle("my_shopping_minus");
	}, 5000);

	let my_shopping_content_sidebar_link = document.querySelectorAll('.my_shopping--content-sidebar-link');

	let my_shopping_content_sidebar_item_link = 
	document.querySelectorAll('.my_shopping--content-sidebar-item-link');
	// console.log(my_shopping_content_sidebar_link);

	// var total = 0;
	// for (let i = 0; i < my_shopping_content_sidebar_item.length; i++) {

	// 	my_shopping_content_sidebar_item[i].addEventListener('click', function(){
	// 		total++;
	// 		if(total % 2 != 0){
	// 			this.children[1].style.display = "block";
	// 		}

	// 		if(total % 2 == 0){
	// 			this.children[1].style.display = "none";
	// 		}
	// 	});
	// }
	let total = 0;
	for (let i = 0; i <  my_shopping_content_sidebar_link.length ; i++) {
		my_shopping_content_sidebar_link[i].addEventListener('click', function(){
			
			if(my_shopping_content_sidebar_link[i].nextElementSibling.style.display == "block"){
				my_shopping_content_sidebar_link[i].nextElementSibling.style.display = "none";
			}else{
				my_shopping_content_sidebar_link[i].nextElementSibling.style.display = "block";
			}
		});
		
	}

	for (let i = 0; i <  my_shopping_content_sidebar_item_link.length ; i++) {
		my_shopping_content_sidebar_item_link[i].addEventListener('click', function(){
			if(my_shopping_content_sidebar_item_link[i].nextElementSibling != null){
				if(my_shopping_content_sidebar_item_link[i].nextElementSibling.style.display == "block"){
					my_shopping_content_sidebar_item_link[i].nextElementSibling.style.display = "none";
				}else{
					my_shopping_content_sidebar_item_link[i].nextElementSibling.style.display = "block";
				}
			}
		});
	}

	// open
	var my_shopping_content__label_action_open = 
	document.querySelectorAll(".my_shopping--content__label--action-open"),
	action__hidden = document.querySelectorAll('.my_shopping--action-hidden'),
	action__show   = document.querySelectorAll('.my_shopping--action-show'),
	content__body = document.querySelectorAll('.my_shopping--content__body');

	
	for (let i = 0; i <  my_shopping_content__label_action_open.length ; i++) {
		my_shopping_content__label_action_open[i].addEventListener('click', function(){
			my_shopping_content__label_action_open[i].style.display = "none";
			this.nextElementSibling.style.display = "block";
			this.nextElementSibling.nextElementSibling.style.display = "block";
			this.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "block";
			this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "block";
			// this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "block";
			this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "block";
			this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "block";
			action__hidden[i].classList.remove('action_hidden');

			if(action__hidden[i].style.display == "block"){
				content__body[i].classList.remove('hidden_content');
			}
		});
		
	}

	// close
	var my_shopping_content__label_action_close = 
	document.querySelectorAll(".my_shopping--content__label--action-close");

	for (let i = 0; i <  my_shopping_content__label_action_close.length ; i++) {
		my_shopping_content__label_action_close[i].addEventListener('click', function(){
			my_shopping_content__label_action_close[i].style.display = "none";
			this.nextElementSibling.style.display = "none";
			this.nextElementSibling.nextElementSibling.style.display = "none";
			this.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";
			this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";
			this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";
			this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";
			my_shopping_content__label_action_close[i].previousElementSibling.style.display = "block";

			action__hidden[i].classList.remove('action_show');
			action__show[i].classList.remove('action_show');
		});
		
	}

	// my_shopping--bar-icon
	let bars_icon = document.querySelector("#my_shopping--bar-icon"),
	my_shopping_header = document.querySelector("#my_shopping--header"),
	my_shopping_content = document.querySelector("#my_shopping--content"),
	my_shopping_content_sidebar = document.querySelectorAll('.my_shopping--content-sidebar'),
	my_shopping_content_right = document.querySelector("#my_shopping--content-right");

	// var onresize = function() {
	//    //your code here
	//    //this is just an example
	//    width = document.body.clientWidth;
	//    if(width >= 992){
	//    		my_shopping_content_sidebar[0].classList.remove('show_side_bar');
	//    		// my_shopping_content_sidebar[0].classList.remove('hide_side_bar');
	//    }else{
	//    		my_shopping_content_sidebar[0].classList.add('show_side_bar');
	//    		// my_shopping_content_sidebar[0].classList.add('hide_side_bar');
	//    }
	//    // height = document.body.clientHeight;
	// }
	// window.addEventListener("resize", onresize);

	let count = 0;
	bars_icon.addEventListener("click", function(){
		count++;
		if(count % 2 != 0){
			my_shopping_header.classList.add('close');
			my_shopping_content.classList.add('close');
			my_shopping_content_right.classList.add('change_width')
			my_shopping_header.classList.remove('open');
			my_shopping_content.classList.remove('open');
			my_shopping_content_right.classList.remove('remove_change_width');
		}
		if(count % 2 == 0){
			my_shopping_header.classList.remove('close');
			my_shopping_content.classList.remove('close');
			my_shopping_content_right.classList.remove('change_width');
			my_shopping_content_right.classList.add('remove_change_width');
			my_shopping_header.classList.add('open');
			my_shopping_content.classList.add('open');
		}
	});


	// show_side_bar
	let show_side_bar = document.querySelector("#my_shopping--show-side-bar"),
	sidebar = document.querySelector("#my_shopping--content-sidebar"),
	intro_open = document.querySelector("#my_shopping--intro-open"),
	intro = document.querySelector("#my_shopping--intro");

	let count_click = 0;

	show_side_bar.addEventListener("click", function(){

		count_click++;
		if(count_click % 2 != 0){
			sidebar.classList.add('show_side_bar');
			sidebar.classList.remove('hide_side_bar');
		}
		if(count_click % 2 == 0){
			sidebar.classList.remove('show_side_bar');
			sidebar.classList.add('hide_side_bar');
		}
	});

	let count_intro = 0;

	intro_open.addEventListener("click", function(){
		count_intro++;
		if(count_intro % 2 != 0){
			intro.classList.add('intro_show');
			intro.classList.remove('intro_hide');
		}
		if(count_intro % 2 == 0){
			intro.classList.remove('intro_show');
			intro.classList.add('intro_hide');
		}
	});

	let language_item = document.querySelectorAll('.my_shopping--intro__action--item');
	for (let i = 0; i < language_item.length; i++) {
		language_item[i].addEventListener('mouseover',function(){
			if( this.children.length > 1){
				this.children[1].classList.add('showUp');
				this.children[1].classList.remove('showDown');
			}
		});
		language_item[i].addEventListener('mouseleave',function(){
			if(this.children.length > 1){
				this.children[1].classList.add('showUp');
				this.children[1].classList.add('showDown');
			}
		});
	}

	let action_hidden = document.querySelectorAll('.my_shopping--action-hidden'),
	action_show = document.querySelectorAll('.my_shopping--action-show'),
	action_delete = document.querySelectorAll('.my_shopping--action-delete');

	for (let i = 0; i < action_hidden.length; i++) {
		action_hidden[i].addEventListener('click', function () {
			action_show[i].classList.add('action_show');
			action_hidden[i].classList.add('action_hidden');
			action_hidden[i].parentElement.parentElement.nextElementSibling.classList.add('hidden_content');
			action_hidden[i].parentElement.parentElement.nextElementSibling.classList.remove('show_content');
		});

		action_show[i].addEventListener('click', function () {
			action_show[i].classList.remove('action_show');
			action_hidden[i].classList.add('action_show');
			action_hidden[i].classList.remove('action_hidden');
			action_show[i].parentElement.parentElement.nextElementSibling.classList.add('show_content');
			action_show[i].parentElement.parentElement.nextElementSibling.classList.remove('hidden_content');
		});
		//
		action_delete[i].addEventListener('click', function(){
			this.parentElement.parentElement.parentElement.style.display = "none";
		});
	}

	// Full Screen

	let fullscreen = document.querySelector("#action-fullscreen");

	fullscreen.addEventListener('click', function(){
		if (document.fullscreenElement) {
			document.exitFullscreen()
			.then(() => console.log("Document Exited from Full screen mode"))
			.catch((err) => console.error(err))
		} else {
			document.documentElement.requestFullscreen();
		}
	});
	

	
})