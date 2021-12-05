window.addEventListener('load', function () {
	const text = document.querySelector('.theory__text');

	for (let i = 0; i < text.querySelectorAll('img').length; i++) {
		let w = text.querySelectorAll('img')[i].clientWidth;
		text.querySelectorAll('img')[i].width = w * 0.5;
	}

	const button = document.querySelector('#dl_low');
	const background = document.querySelector('#image-handler');

	button.addEventListener('click', displayBlock);
	background.addEventListener('click', displayNone);

	function displayBlock() {
		background.style.display = 'block';
	}
	function displayNone() {
		background.style.display = 'none';
	}
});
