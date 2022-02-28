import { Input, ButtonSearch } from "./styles"

export const Search = (props) => {
    return (
        <>
            <Input {...props} />
            <ButtonSearch onClick={props.filterPokemons}>
            <i className="fas fa-search"></i>
            </ButtonSearch>
        </>
    )
}