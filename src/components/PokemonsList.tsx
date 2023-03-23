import { useEffect, useState } from "react";
import { IButtonEventInterface } from "../interfaces/events.interfaces";
import { IBasePokemonUrlInfo, IPokemon } from "../interfaces/pokeapi.interfaces";
import { API, NOURLAPIREQUEST } from "../services/Api";
import { StyledInterfaceContainer } from "../styled/StyledInterfaceContainer";
import { StyledPokelistContainer } from "../styled/StyledPokelistContainer";
import { pokemonLoopRequest } from "../utils/pokemonLoopRequest";
import PokemonCard from "./PokemonCard";

const PokemonsList = () => {

  const [pokelist, setPokelist] = useState<IPokemon[]>([]);
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");

  useEffect(() => {
    API.get("/pokemon")
    .then( async (res) => {
      setNextPage(res.data.next);
      setPreviousPage(res.data.previous);

      pokemonLoopRequest(res.data.results, setPokelist);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  const handleChangePage = async (e: IButtonEventInterface) => {
    if (e.title === "next") {
      const response = await NOURLAPIREQUEST.get(nextPage);
      setNextPage(response.data.next);
      setPreviousPage(response.data.previous);
      pokemonLoopRequest(response.data.results, setPokelist);
    }
    else {
      const response = await NOURLAPIREQUEST.get(previousPage);
      setNextPage(response.data.next);
      setPreviousPage(response.data.previous);
      pokemonLoopRequest(response.data.results, setPokelist);
    }
  }

  return(
    <StyledInterfaceContainer>
      <div className="previousPageBtn" title="prev" 
      onClick={(e) => {
        handleChangePage(e.target)
      }}
       >previous</div>
      <StyledPokelistContainer>
        {pokelist?.map((pokemon) => {
          return <PokemonCard 
          key={pokemon.id} 
          id={pokemon.id} 
          name={pokemon.name} 
          types={pokemon.types} 
          />
        })}
      </StyledPokelistContainer>
      <div className="nextPageBtn" title="next"
      onClick={(e) => {
        handleChangePage(e.target)
      }}
      >next</div>
    </StyledInterfaceContainer>
  );
}

export default PokemonsList;
