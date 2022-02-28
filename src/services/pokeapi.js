const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

export async function getNamePokemons(limit, offset) {
    const response = await fetch(`${baseUrl}?limit=${limit}&offset=${offset}`)
    const json = await response.json()
    const names = json.results.map(result => {
        return result.name
    })
    return names
}

export async function getPokemon(name) {
    const response = await fetch(`${baseUrl}/${name}`)
    const json = await response.json()
    return json
}

export async function getAbilitiesPokemon (abilities) {
    const response = abilities.map(async (ability) => {
        const result = await fetch(ability.ability.url)
        const json = await result.json()
        return json
    })
    const responsePromise = await Promise.all(response)
    return responsePromise
}
