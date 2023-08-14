const cakeButton = document.querySelector('#cakebtn')
const cakeUl = document.querySelector('#cake-ul')
                
function addCakeMenu() {
    cakeUl.innerHTML = "<li>Vanilla</li>"+"<li>Rich Chocolate</li>"+"<li>Red Velvet</li>"+"<li>Chocolate & Banana</li>"+"<li>Coffee & Walnut</li>"
}
cakeButton.addEventListener('click', addCakeMenu)



const dessertButton = document.querySelector('#dessertbtn')
const dessertUl = document.querySelector('#dessert-ul')

function addDessertMenu() {
    dessertUl.innerHTML = "<li>Saffron</li>"+"<li>Vanilla</li>"+"<li>Chocolate</li>"+"<li>Rainbow</li>"+"<li>Cheesecake</li>"
}
dessertButton.addEventListener('click', addDessertMenu)



halwaButton = document.querySelector('#halwabtn')
const halwaUl = document.querySelector('#halwa-ul')

function addHalwaMenu() {
    halwaUl.innerHTML = "<li>Saffron Halwa</li>"+"<li>Carrot Halwa</li>"+"<li>Pumkin Halwa</li>"+"<li>Arabic Halwa</li>"+"<li>Milk Halwa</li>"
}
halwaButton.addEventListener('click', addHalwaMenu)



cupcakeButton = document.querySelector('#cupcake')
const cupcakeUl = document.querySelector('#cupcake-ul')

function addCupcakeMenu() {
    cupcakeUl.innerHTML = "<li>Vanilla</li>"+"<li>Chocolate</li>"+"<li>Red Velvet</li>"+"<li>Carrot & Walnut</li>"+"<li>Banana</li>"
}
cupcakeButton.addEventListener('click', addCupcakeMenu)


       
const header = document.querySelector('#topic')
function changeColor() { 
    header.classList.toggle('header-color')
}
header.addEventListener('click', changeColor)