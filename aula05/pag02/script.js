let result = document.querySelector('.result')
let item = document.querySelector('.item')

async function getApi() {
    let response = await fetch(`https://raw.githubusercontent.com/LenaLatosinski/cardapio.json/main/cardapio.json`)
    let data = await response.json()
    for (var i = 0; i < data[`cardapio`].length; i++) {
        result.innerHTML += `<h1>${data.cardapio[i].name}</h1> 
                            <h3>${data.cardapio[i].description}</h3>
                            <h3>${data.cardapio[i].price}</h3>
                            <h3>${data.cardapio[i].gluten}</h3>
                            <h3>${data.cardapio[i].calories}</h3>
                            <img src="${data.cardapio[i].image}">`
    }
}

getApi();