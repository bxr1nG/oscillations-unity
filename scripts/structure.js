const slides = document.querySelectorAll('.slider__img-item')

for (const slide of slides) {
	slide.addEventListener('mouseover', () => {
		clearActiveClasses()

		slide.classList.add('active')
	})
}

function clearActiveClasses() {
	slides.forEach(slide => {
		slide.classList.remove('active')
	})
}
