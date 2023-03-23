import { useEffect, useState } from "react";
import { IBasePokemonUrlInfo, IPokemon } from "../interfaces/pokeapi.interfaces";
import { API, NOURLAPIREQUEST } from "../services/Api";
import { StyledPokelistContainer } from "../styled/StyledPokelistContainer";
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

      const pagePokemonsArray: IPokemon[] = []

      for (let i = 0; i < res.data.results.length; i++) {
        const pokemon: IBasePokemonUrlInfo = res.data.results[i];

        const response = await NOURLAPIREQUEST.get(pokemon.url)
        pagePokemonsArray.push({
          id: response.data.id,
          name: response.data.name,
          order: response.data.order,
          abilities: response.data.abilities,
          types: response.data.types,
        })

        if (i + 1 === res.data.results.length) {
          setPokelist(pagePokemonsArray);
        }
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  return(
    <StyledPokelistContainer>
      {pokelist?.map((pokemon) => <PokemonCard key={pokemon.id} id={pokemon.id} name={pokemon.name} />)}
    </StyledPokelistContainer>
  );
}

export default PokemonsList;
