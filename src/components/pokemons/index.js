import { useState, useEffect, useContext } from "react"
import { Section, Card, Container } from "./styles"
import { getNamePokemons, getPokemon } from '../../services/pokeapi'
import { Button } from "../button"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../context/theme-toggler"
import { Search } from "../input"

export const Pokemons = () => {

    const [pokemons, setPokemons] = useState([])
    const [count, setCount] = useState(0)
    let pagination = 10
    const { theme } = useContext(ThemeContext)
    const [search, setSearch] = useState('')
    const [actualPokemons, setActualPokemons] = useState([])
    const [showMore, setShowMore] = useState(true)


    useEffect(() => {
        const fetchData = async () => {
            const names = await getNamePokemons(pagination, count)
            const pokemonsPromises = names.map(async (name) => {
                return await getPokemon(name)
            })
            const pokemonsNew = await Promise.all(pokemonsPromises)
            setPokemons([...pokemons, ...pokemonsNew])
            setActualPokemons([...pokemons, ...pokemonsNew])
        }
        fetchData()
    }, [count])

    async function handleLoad() {
        setCount(count + pagination)
    }

    function handleChange(event) {
        setSearch(event.target.value)
    }

    function keyPressed (event) {
        if(event.key === 'Enter'){
            filterPokemons()
        }
    }

    function searchToLowerCase(str) {
        const searchLowerCase = search.toLowerCase()
        return str.toLowerCase().includes(searchLowerCase)
    }

    async function filterPokemons() {
        setShowMore(false)

        if (search === '') {
            pagination = 10
            setShowMore(true)
        } else {
            pagination = 256
        }

        const names = await getNamePokemons(pagination, 0)
        const pokemonsPromises = names.map(async (name) => {
            return await getPokemon(name)
        })
        const pokemonsNew = await Promise.all(pokemonsPromises)

        const pokemonsFiltered = pokemonsNew.filter((pokemonActual) => {
            return (
                searchToLowerCase(pokemonActual.name)
                ||
                searchToLowerCase(pokemonActual.types[0].type.name)
            )
        })
        setPokemons(pokemonsFiltered)
    }

    return (
        <Section style={{ backgroundImage: theme.backgrounds.homepage.image }}>
            <Search
                type='search'
                placeholder='Pesquise o nome ou o tipo do pokemon'
                onChange={handleChange}
                value={search}
                filterPokemons={filterPokemons}
                onKeyPress={keyPressed}
            />

            <Container>
                {
                    actualPokemons ? actualPokemons.map((pokemon, index) => {
                        return (
                            <Link key={index} to={`/${pokemon.id}`}>
                                <Card style={{
                                    backgroundImage: theme.backgrounds.homepage.gradient
                                }}>
                                    <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
                                    <h3 style={{ color: theme.colors.colorBgHeader }}>{pokemon.name}</h3>
                                    <ul>
                                        {
                                            pokemon.types.map((type, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        style={{ color: theme.colors.colorBgHeader }}
                                                    >
                                                        {type.type.name}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </Card>
                            </Link>
                        )
                    }
                    )
                        :
                        <h1>Nao tem pokemons na pokedex</h1>
                }
                {
                    showMore && <Button onClick={handleLoad}>Show more</Button>
                }
            </Container>
        </Section>
    )

}
