document.addEventListener("DOMContentLoaded", function() {

	let table_item = document.querySelectorAll('.table-item'),
	choose_alls = document.querySelector('#choose_alls');
	for (let i = 0; i < table_item.length; i++) {
		let count = 0;
		table_item[i].addEventListener('click', function(){
			count++;
			if(count % 2 != 0){
				table_item[i].children[0].children[0].checked = true;
				table_item[i].children[0].children[0].classList.add('showCheckd');
			}else{

				table_item[i].children[0].children[0].checked = false;
				table_item[i].children[0].children[0].classList.remove('showCheckd');
			}
		});
		table_item[i].addEventListener('dblclick', function(){
			
		});
	}
	let countChoose = 0;
	choose_alls.addEventListener('click', function(){
		
		countChoose++;
		if(countChoose % 2 != 0){
			for (let i = 0; i < table_item.length; i++) {
				table_item[i].children[0].children[0].checked = true;
				table_item[i].children[0].children[0].classList.add('showCheckd');
			}
		}else{
			for (let i = 0; i < table_item.length; i++) {
				table_item[i].children[0].children[0].checked = false;
				table_item[i].children[0].children[0].classList.remove('showCheckd');
			}
		}
		
	});
});