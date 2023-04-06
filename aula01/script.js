// String
// Number
// Boolean
// undefined - declaro variavel, mas nao passo valor a ela
// null - variavel de valor nulo
//----------------------------------------------------------

// var
// let
// const

// const x = 0
// console.log(x);
//----------------------------------------------------------

// var texto = 'texto';
// var numero = 20;
// var decimal = 20.5;
// var boleano = true;
// var nulo = null;
// var indefinido;

// console.log(typeof(texto));
// console.log(typeof(numero));
// console.log(typeof(decimal));
// console.log(typeof(boleano));
// console.log(typeof(nulo));
// console.log(typeof(indefinido0));
//----------------------------------------------------------

// var lista = [1,2,3,4,5,6];
// var map = {
//     'nome':'pedro',
//     'profissao':'desenvolvedor'
// };

// console.log(lista[3]);
// console.log(typeof(map['profissao']));
// console.log(typeof(map));
// console.log(map.profissao);
//----------------------------------------------------------

// var carros = ['Honda', 'Ferrari', 'Uno', 'Palio'];

// carros.push('VW'); //adiciona elementos
// carros.pop(); //armazena mas elimina ultimo elemento

// var removido = carros.pop();
// console.log(removido);

// console.log(carros);
// console.log(carros.length);
//----------------------------------------------------------

// var carro = 'Honda Civic';

// console.log(carro.slice(0, 5));
// console.log(carro.toLocaleUpperCase());
// console.log(carro.toLowerCase());
// console.log(carro[0]);
// console.log(carro.replace('Honda', 'VW'));
//----------------------------------------------------------

// var x = 30;
// var y = '10';
// var z = 20;

// console.log(x == z);
// console.log(z > x);
// console.log(x == y); //compara apenas valor 2 igual ==
// console.log(x === y); //compara valor e tipo 3 igual ===
// console.log(x || y);
// console.log(x && y);
// console.log(x != y);

// if (x == z) {
//     console.log('X é igual a Z');
// } else if (x > z) {
//     console.log('X é maior a Z');
// } else {
//     console.log('X é menor a Z');
// };

// x == z ? console.log('X é igual a Y') : console.log('X é diferente de Y');

// x == z ? console.log('X é igual a Z') : x > z ? console.log('X é maior que Z') : console.log('X é menor que Z');
//----------------------------------------------------------

// var nome = prompt('Qual o seu nome?');
// console.log('Seu nome é:', nome);
// console.log(`Seu nome é ${nome}`); //usar crase ``

// var resposta = confirm('Deseja excluir o arquivo?');
// console.log(resposta);
// console.log(confirm('Deseja excluir o arquivo?'));

// if (confirm('Deseja excluir o arquivo?') == true) {
//     console.log('Arquivo deletado');
// } else {
//     console.log('Arquivo não deletado');
// };
//----------------------------------------------------------

// var lista = ['maça', 'abacate', 'morango'];

// for (var i = 0; i < lista.length; i++) {
//     console.log(lista[i]);
// };
//----------------------------------------------------------

// while (true) {
//     var count = 0;
//     console.log('Estou no laço');

//     if (count === 100) {
//         break
//     }
// };
//----------------------------------------------------------

// function escrever() {
//     console.log('Estou escrevendo em');
// }
// escrever();

// const escrever = () => {
//     console.log('Estou escrevendo');
// }

// function escrever(nome) {
//     console.log(`Estou escrevendo em ${nome}`);
// }
// escrever('javascript');
//----------------------------------------------------------

// console.log(x);
// let x = 10;

// function escrever() {
//     let x = 20
//     if (true) {
//         let x = 10
//         console.log(x);
//     }
//     console.log(x);
// }
// escrever();
//----------------------------------------------------------

async function getApi() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json()
    // console.log(data);
    // console.log(data[0]['name']);
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]['name']);
    }
}
getApi()