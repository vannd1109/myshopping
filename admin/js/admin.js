
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
})