
document.addEventListener("DOMContentLoaded", function() {

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
	document.querySelectorAll(".my_shopping--content__label--action-open");

	for (let i = 0; i <  my_shopping_content__label_action_open.length ; i++) {
		my_shopping_content__label_action_open[i].addEventListener('click', function(){
			my_shopping_content__label_action_open[i].style.display = "none";
			this.nextElementSibling.style.display = "block";
			this.nextElementSibling.nextElementSibling.style.display = "block";
			this.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "block";
			this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "block";
			this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "block";
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
			my_shopping_content__label_action_close[i].previousElementSibling.style.display = "block";
		});
		
	}

	// my_shopping--bar-icon
	let bars_icon = document.querySelector("#my_shopping--bar-icon"),
	my_shopping_header = document.querySelector("#my_shopping--header"),
	my_shopping_content = document.querySelector("#my_shopping--content"),
	my_shopping_content_right = document.querySelector("#my_shopping--content-right");

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
			my_shopping_header.classList.add('open');
			my_shopping_content.classList.add('open');
			my_shopping_content_right.classList.add('remove_change_width');
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
})