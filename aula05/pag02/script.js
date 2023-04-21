let result1 = document.querySelector('.result1')
let result2 = document.querySelector('.result2')
let card = document.querySelector('.card')

async function getApi() {
    let response = await fetch(`https://raw.githubusercontent.com/LenaLatosinski/cardapio.json/main/cardapio.json`)
    let data = await response.json()
    for (var i = 0; i < data[`cardapio`].length; i++) {
        result1.innerHTML += `<h1>${data.cardapio[i].name}</h1> 
                            <h3>${data.cardapio[i].description}</h3>
                            <h3>${data.cardapio[i].price}</h3>
                            <h3>${data.cardapio[i].gluten}</h3>
                            <h3>${data.cardapio[i].calories}</h3>
                            <img src="${data.cardapio[i].image}">`
    }
    // result2.innerHTML += `<h1>${data.cardapio[1].name}</h1> 
    //                         <h3>${data.cardapio[1].description}</h3>
    //                         <h3>${data.cardapio[1].price}</h3>
    //                         <h3>${data.cardapio[1].gluten}</h3>
    //                         <h3>${data.cardapio[1].calories}</h3>
    //                         <img src="${data.cardapio[1].image}">`
    
}

getApi();