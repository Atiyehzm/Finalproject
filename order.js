const dropDownMenu = document.querySelector('#type-order')
console.log(dropDownMenu)
function add(){
    if(dropDownMenu.value === 'Cake'){
        document.querySelector('#cakedropdown').style.display="block";
    }
    else{
        document.querySelector('#cakedropdown').style.display="none";
    }
    }
dropDownMenu.addEventListener('change', add)



const header = document.querySelector('#topic')
function changeColor() { 
    header.classList.toggle('header-color')
}
header.addEventListener('click', changeColor)