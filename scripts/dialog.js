let form = document.querySelector('#form');
let input = document.querySelector('#input');
let messanger = document.querySelector('#messanger');

form.addEventListener('submit', handleForm);
function handleForm(event) {
	if (input.value != '') {
		messanger.innerHTML += `<div class="dialog__message question">${input.value}</div>`;
		messanger.innerHTML += `<div class="dialog__message answer">${
			input.value + input.value
		}</div>`;
		messanger.scrollTop = 99999;

		speechSynthesis.speak(new SpeechSynthesisUtterance(input.value));
	}
	input.value = '';
}
