import { useState } from "react";
import PokemonsList from "../components/PokemonsList";
import { IPokemon } from "../interfaces/pokeapi.interfaces";
import { API } from "../services/Api";
import StyledPageContainer from "../styled/StyledPageContainer";
import { pokemonLoopRequest } from "../utils/pokemonLoopRequest";
import { FaSearch } from "react-icons/fa"

const Home = () => {
  const [pokelist, setPokelist] = useState<IPokemon[]>([]);
  const [nextPage, setNextPage] = useState<string>("");
  const [previousPage, setPreviousPage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [searchValue, setSearchValue] = useState<string>("")

  const handleGoToFirstPage = async () => {
    setIsLoading(true)

    API.get("/pokemon")
    .then( async (res) => {
      setNextPage(res.data.next);
      setPreviousPage(res.data.previous);

      await pokemonLoopRequest(res.data.results, setPokelist);
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const handleSearchPokemon = async () => {
    setIsLoading(true)

    API.get(`/pokemon/${searchValue}`)
    .then( async (res) => {
      const pokemon = {
        id: res.data.id,
        name: res.data.name,
        order: res.data.order,
        abilities: res.data.abilities,
        types: res.data.types,
        sprites: res.data.sprites,
        moves: res.data.moves,
      }

      setPokelist([pokemon])
      setIsLoading(false)
      setSearchValue("")
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return(
    <StyledPageContainer>
      <div className="header-container">
        <div className="header-container__titleSection">
          <h1>Pokedex</h1>
          <button className="titleSectionBtn" type="button" onClick={() => { handleGoToFirstPage() }}>Primeira página</button>
        </div>
        <div className="header-container__titleSection">
          <input 
          className="titleSectionSearch" 
          type=""
          value={searchValue}
          onChange={(e) => {setSearchValue(e.target.value)}}
          placeholder="Procurar por nome/índice"
          />
          <div onClick={() => { handleSearchPokemon() }}>
            <FaSearch className="titleSectionSearchBtn"></FaSearch>
          </div>
        </div>
      </div>
      <PokemonsList 
      pokelist={pokelist} 
      setPokelist={setPokelist}
      nextPage={nextPage}
      setNextPage={setNextPage}
      previousPage={previousPage}
      setPreviousPage={setPreviousPage}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      />
    </StyledPageContainer>
  )
}

export default Home;
