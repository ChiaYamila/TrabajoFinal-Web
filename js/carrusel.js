const slides = document.querySelectorAll('.slider li')
const span = document.querySelectorAll('.btnimg span')

let index = 0
setInterval(nextSlide, 3000)

function nextSlide() {

    slides[index].classList.remove('show')
    span[index].classList.remove('shownum')

    index = (index + 1) % slides.length

    slides[index].classList.add('show')
    span[index].classList.add('shownum')
}