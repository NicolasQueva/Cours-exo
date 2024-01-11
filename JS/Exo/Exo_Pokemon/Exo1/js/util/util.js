import { Pokemon } from " ../classe/Pokemon.js"

//URL de l'api
const apiUrl = "https://pokeapi.co/api/v2/pokemon/"

async function getPokemoninfo(pokemonNumber) {
    try {
        const response = await fetch(apiUrl + pokemonNumber)
        if (!response.ok) {
            throw new Error(`Erreur HTTP ${response.status}`)
        }
        const pokemonData = await response.json()
        console.log(pokemonData)

        return new Pokemon(pokemonData.name, pokemonData.weight, pokemonData.height, pokemonData.sprites.front_default)

    } catch (error) {
        console.error(`Erreur lors de la récuperation des données ${error.message}`)
    }
}

export async function fetchPokemonData() {
    const pokemonDataList = []
    for (let i = 1; i < 1018; i++) {
        const pokeInfo = await getPokemoninfo(i)
        pokemonDataList.push(pokeInfo)
    }
    return pokemonDataList
}