let botao = document.querySelector('.btn');
// console.log(botao);
// console.log(botao.innerHTML);
// console.log(botao.style.backgroundColor = 'red');

let principal = document.getElementById('principal');
// console.log(principal);
// principal.innerHTML += "<h1> Vim do JS </h1>"

let n1 = document.querySelector('.n1');
let n2 = document.querySelector('.n2');
let resultado = document.getElementById("resultado");

function Somar() {
    var soma = parseInt(n1.value) + parseInt(n2.value)
    console.log(soma);
    resultado.innerText = soma
}

function ligar_Desligar() {
    // document.body.classList.toggle('active')
    botao.classList.toggle('active')
}