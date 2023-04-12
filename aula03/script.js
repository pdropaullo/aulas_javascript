let hamburguer = document.querySelector('.hamburguer')
let menu = document.querySelector('.nav-menu')

hamburguer.addEventListener('click', () => {
    menu.classList.toggle('active')
})