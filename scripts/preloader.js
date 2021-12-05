window.onload = async function () {
	//await sleep(2000);
	let preloader = document.querySelector('.preloader');
	preloader.classList.add('preloader__hiding');
	document.body.classList.remove('noscroll');
	await sleep(500);
	preloader.classList.add('preloader__none');
	preloader.classList.remove('preloader__hiding');
};

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
