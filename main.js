document.addEventListener('DOMContentLoaded',()=>{

	const btn_menu = document.querySelectorAll(".btn_menu");

	for(let btn of btn_menu) {
		btn.addEventListener('click',(e)=>{
			e.preventDefault();

			if( !btn.classList.contains('active') ) {
				btn.classList.add('active');
			} else {
				btn.classList.remove('active');
			}

		});
	}
});