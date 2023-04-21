let search = document.querySelector('.search')
let pesquisa = document.querySelector('.pesquisa')
let cards = document.querySelector('.cards')
let card = document.querySelector('.card')
let result = document.querySelector('.result')

search.addEventListener('submit', (event) => {
    event.preventDefault();
    getApi(pesquisa.value)
})

async function getApi(media) {
    let response = await fetch(`https://www.omdbapi.com/?s=${media}&apikey=75bdc9fb`)
    let data = await response.json()

    for (var i = 0; i < data[`Search`].length; i++) {
        cards.innerHTML += `<div class="card">
                             <img class="poster" src="${data.Search[i].Poster}">
                             <h3 class="title">${data.Search[i].Title}</h3> 
                             <h3 class="year">${data.Search[i].Year}</h3>
                             </div>`
    }

}