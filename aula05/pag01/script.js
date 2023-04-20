let item = document.querySelectorAll('.item')
let pizzas = document.querySelector('#pizzas')
let pasteis = document.querySelector('#pasteis')
let bebidas = document.querySelector('#bebidas')

item.forEach((el) => {
    el.addEventListener('click', function (event) {
        let selectedItem = event.target.innerHTML;

        item.forEach((el) => {
            if (selectedItem === el.innerHTML) {
                el.classList.add('active')
                if (selectedItem === 'Pizzas') {
                    clear()
                    pizzas.style.display = 'block'
                } else if (selectedItem === 'Pastéis') {
                    clear()
                    pasteis.style.display = 'block'
                } else if (selectedItem === 'Bebidas') {
                    clear()
                    bebidas.style.display = 'block'
                }
            } else {
                el.classList.remove('active')
            }
        })
    })
})

function clear() {
    pizzas.style.display = 'none';
    pasteis.style.display = 'none';
    bebidas.style.display = 'none';
}