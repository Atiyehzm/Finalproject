const header = document.querySelector('#topic')
function changeColor() { 
header.classList.toggle('header-color')
}
header.addEventListener('click', changeColor)


const newsLetter = document.querySelector('#newsletter')
function show() {
alert('After adding your Email, you can be updated with any news! :)')
}
newsLetter.addEventListener('click', show)