import { fetchPokemonData } from "./util/util.js"

const container = document.querySelector('.card_container')
const loading = document.getElementById('loading')
const img = document.getElementById('pokemon-img')
const name = document.getElementById('name')
const weight = document.getElementById('weight')
const height = document.getElementById('height')
const prevbtn = document.querySelector('.prev-btn')
const nextbtn = document.querySelector('.next-btn')
const randombtn = document.querySelector('.random-btn')
const navig = document.getElementById('navig')

let pokemons = []
let e
let currentItem = 0
container.style.display = "none"

fetchPokemonData().then((data) => {
    pokemons = data
    console.log(pokemons);
    displayFirst()
})

function displayFirst() {
    if (pokemons.length > 0) {
        loading.style.display = "none"
        container.style.display = ""
        const item = pokemons[currentItem]
        name.textContent = item.name
        weight.textContent = item.weight
        height.textContent = item.height
        img.src = item.image
    }
}

nextbtn.addEventListener("click", function () {
    currentItem++
    if (currentItem > pokemons.length - 1) {
        currentItem = 0
    }
    console.log(currentItem);
    displayFirst()
})

prevbtn.addEventListener("click", function () {
    currentItem--
    if (currentItem < 0) {
        currentItem = pokemons.length - 1
    }
    console.log(currentItem);
    displayFirst()
})

randombtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * pokemons.length)
    console.log(currentItem);
    displayFirst()
})

navig.addEventListener("keydown", (e) => {
    if (e.code == 'Enter') {
        const navigV = document.getElementById('navig').value
        currentItem = navigV
        console.log(currentItem);
        displayFirst()
    }
})
