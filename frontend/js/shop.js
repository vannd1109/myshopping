
document.addEventListener("DOMContentLoaded", function() {
	var sidebar_item_label = document.querySelectorAll('.shopping_sidebar--item-label'),
	sidebar_label = document.querySelectorAll('.shopping_sidebar--label'),
	sidebar_colors = document.querySelectorAll('.shopping_sidebar--color .shopping_sidebar--item');

	for(let i = 0; i < sidebar_item_label.length; i++){
		sidebar_item_label[i].addEventListener('click', function(){
			// var item = document.querySelector(sidebar_item_label[i]);

		});
	}

	for(let i = 0; i < sidebar_label.length; i++){
		sidebar_label[i].addEventListener('click', function(){
			// sidebar_label[i].nextElementSibling.style.display = "none";
			if(sidebar_label[i].nextElementSibling.style.display == "none"){
				sidebar_label[i].nextElementSibling.style.display = "block";
			}else{
				sidebar_label[i].nextElementSibling.style.display = "none";
			}
		});
	}

	for(let i = 0; i < sidebar_colors.length; i++){
		sidebar_colors[i].addEventListener('click', function(){
			for(let i = 0; i < sidebar_colors.length; i++){
				sidebar_colors[i].classList.remove('active');
			}
			sidebar_colors[i].classList.add('active');
		});
	}

	let action_grid = document.querySelector("#action-column-grid")
	let action_list = document.querySelector("#action-column-list");
	let action_column_two = document.querySelector("#action-column--two");
	let action_column_three = document.querySelector("#action-column--three");
	let action_column_four = document.querySelector("#action-column--four");

	let product_items = document.querySelectorAll(".new_product--item");

	var action_column = document.querySelector("#action-column");
	action_list.addEventListener('click', function(){
		action_column.style.display = "none";
		for (var i = 0; i < product_items.length; i++) {
			product_items[i].classList.remove("col-lg-3");
			product_items[i].classList.remove("col-6");
			product_items[i].classList.remove("col-4");
			product_items[i].classList.add("col-12");
			product_items[i].classList.add("new_product--item-changed");
			product_items[i].children[0].style.height = "190px";
		}
	});
	action_grid.addEventListener('click', function(){
		action_column.style.display = "block";

		for (var i = 0; i < product_items.length; i++) {
			product_items[i].classList.remove("col-12");
			product_items[i].classList.remove("col-6");
			product_items[i].classList.remove("col-4");
			product_items[i].classList.remove("new_product--item-change-two");
			product_items[i].classList.remove("new_product--item-change-three");
			product_items[i].classList.remove("new_product--item-change-four");
			product_items[i].classList.add("col-lg-3");
			product_items[i].children[0].style.height = "190px";
			product_items[i].classList.remove("new_product--item-changed");
		}
	});

	action_column_two.addEventListener('click', function(){
		for (var i = 0; i < product_items.length; i++) {
			product_items[i].classList.remove("col-lg-3");
			product_items[i].classList.remove("col-4");
			product_items[i].classList.remove("new_product--item-change-three");
			product_items[i].classList.remove("new_product--item-change-four");
			product_items[i].classList.add("col-6");
			product_items[i].children[0].style.height = "500px";
			product_items[i].classList.add("new_product--item-change-two");
		}
	});
	action_column_three.addEventListener('click', function(){
		for (var i = 0; i < product_items.length; i++) {
			product_items[i].classList.remove("col-lg-3");
			product_items[i].classList.remove("col-6");
			product_items[i].classList.remove("new_product--item-change-two");
			product_items[i].classList.remove("new_product--item-change-four");
			product_items[i].classList.add("col-4");
			product_items[i].children[0].style.height = "350px";
			product_items[i].classList.add("new_product--item-change-three");
		}
	});
	action_column_four.addEventListener('click', function(){
		for (var i = 0; i < product_items.length; i++) {
			product_items[i].classList.remove("col-4");
			product_items[i].classList.remove("col-6");
			product_items[i].classList.remove("new_product--item-change-three");
			product_items[i].classList.add("col-lg-3");
			product_items[i].children[0].style.height = "190px";
			product_items[i].classList.add("new_product--item-change-four");
		}
	});

	
	// my_shopping--filter
	let my_filter = document.querySelector("#my_filter");
	let my_sidebar = document.querySelector('.shopping_body--left');

	my_filter.addEventListener('click', function(){
		my_sidebar.classList.add('sidebar_show');
		my_sidebar.classList.remove('sidebar_hide');
	});

	// my_shopping--back
	let my_back = document.querySelector('.my_shopping--back span');

	my_back.addEventListener('click', function(){
		my_sidebar.classList.add('sidebar_hide');
		// my_sidebar.classList.remove('sidebar_show');
	});

});