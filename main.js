// Select DOM items
const arrowLeft = document.querySelector('#leftslide')
const arrowRight = document.querySelector('#rightslide')
const slides = document.querySelectorAll('.slide')

let index = 0

// clear all Images
function reset() {
  for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
  }
}

// Init slider
function startSlides() {
  reset()
  slides[0].style.display = 'block'
}

function slidesLeft() {
  reset()
  slides[index - 1].style.display ='block'
  index--
}
// arrow prev click
arrowLeft.addEventListener('click', () => {
  if (index === 0) {
      index = slides.length
    }
    slidesLeft()
})

function slidesRight() {
  reset()
  slides[index + 1].style.display ='block'
  index++
}
// arrow next click
arrowRight.addEventListener('click', () => {
  if (index == slides.length -1) {
      index = 0
    }
    slidesRight()
})

startSlides()

