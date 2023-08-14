const header = document.querySelector('#topic')
function changeColor() { 
    header.classList.toggle('header-color')
}
header.addEventListener('click', changeColor)