import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Section, CardPhoto, CardDetails, Container } from "./styles"
import { getAbilitiesPokemon, getNamePokemons, getPokemon } from "../../services/pokeapi"
import { ThemeContext } from "../../context/theme-toggler"

export const PokemonDetails = () => {

    const { theme } = useContext(ThemeContext)

    const [pokemon, setPokemon] = useState({
        name: '',
        image: '',
        moves: [],
        types: []
    })
    const [abilities, setAbilites] = useState([])

    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
            const name = await getNamePokemons(1, (id - 1))
            const pokemonInPage = await getPokemon(name)
            setPokemon({
                name: pokemonInPage.name,
                image: pokemonInPage.sprites.other.home.front_default,
                moves: pokemonInPage.moves,
                types: pokemonInPage.types
            })

            return pokemonInPage
        }
        fetchData().then(async (res) => {
            const data = await getAbilitiesPokemon(res.abilities)
            setAbilites(data)
        })
    }, [])


    return (
        <Section style={{
            backgroundImage: theme.backgrounds.pageDetails.image,
            backgroundSize: theme.backgrounds.pageDetails.size,
            backgroundRepeat: theme.backgrounds.pageDetails.repeat,
            color: theme.colors.second
        }}>
            <Container style={{
                backgroundImage: theme.backgrounds.pageDetails.imageCard,
                color: theme.colors.second
            }}>
                <CardPhoto>
                    <div>
                        <img src={pokemon.image} alt={pokemon.name} />
                        <h2>{pokemon.name}</h2>
                    </div>
                </CardPhoto>
                <CardDetails>
                    <h3>Abilities🔥</h3>
                    <ul>
                        {
                            abilities.map((ability, index) => {
                                return (
                                    <div key={index}>
                                        <li>
                                            <h4>{ability.name.toUpperCase()}🐱‍👤</h4>
                                            <p>
                                                {ability.effect_entries[0].effect}
                                            </p>
                                        </li>
                                    </div>
                                )
                            })
                        }
                    </ul>
                    <h3>Moves💨</h3>
                    <ul>
                        {
                            pokemon.moves.map((move, index) => {
                                if (index <= 5) {
                                    return (
                                        <div key={index}>
                                            <li>{move.move.name}</li>
                                        </div>
                                    )
                                } else {
                                    return false;
                                }
                            })
                        }
                    </ul>
                    <h3>Type(s)⭐</h3>
                    <ul>
                        {
                            pokemon.types.map((type, index) => {
                                return (
                                    <li
                                        key={index}
                                    >
                                        {type.type.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </CardDetails>
            </Container>
        </Section>
    )
}

