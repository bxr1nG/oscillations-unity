const upBtn = document.querySelector('.slider__up-button')
const downBtn = document.querySelector('.slider__down-button')

const mainSlide = document.querySelector('.slider__images')
const slidesCount = document.querySelectorAll('.slider__img-item').length

let activeSlideIndex = 0

upBtn.addEventListener('click', () => {
	changeSlide('up')
})

downBtn.addEventListener('click', () => {
	changeSlide('down')
})

function changeSlide(direction) {
	if (direction === 'up') {
		activeSlideIndex--
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesCount - 1
		}
	} else if (direction === 'down') {
		activeSlideIndex++
		if (activeSlideIndex === slidesCount) {
			activeSlideIndex = 0
		}
	}

	const height = 600 //document.querySelector('body').clientHeight * 0.9

	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
}
