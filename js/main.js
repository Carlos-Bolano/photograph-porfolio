// CONST 
// ---------------HEADER --------------
const buttonTag = document.querySelector(".Header-button")
const navTag = document.querySelector(".Header-nav")
// FUNTIONS
// ---------------HEADER --------------
const openMenuHandler = () => {
    navTag.classList.toggle("active")
}

// INTEGRATIONS
// ---------------HEADER --------------
buttonTag.addEventListener('click', () => {openMenuHandler()})