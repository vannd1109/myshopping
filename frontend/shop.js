
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
});