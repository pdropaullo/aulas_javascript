let hamburguer = document.querySelector('.hamburguer');
let menu = document.querySelector('.nav-menu');
let rigth = document.querySelector('.right');
let left = document.querySelector('.left');
let container = document.querySelector('.container');
let img = document.querySelectorAll('img');
let count_right = 1;
let count_left = 1;

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    hamburguer.classList.toggle('active-icon')
})

rigth.addEventListener('click', ()=>{
    if(count_right > img.length -1){
        count_right = img-length -1
    }
    container.style.transform = `translateX(${-600 * count_right}px)`;
    count_right++;
})

left.addEventListener('click', () => {
    if (count_left < 1) {
        count_left = 1
    }
    container.style.transform = `translateX(${600 * (count_left -1)}px)`;
    count_left--;
})