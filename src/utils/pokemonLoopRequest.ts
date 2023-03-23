import { IBasePokemonUrlInfo, IPokemon } from "../interfaces/pokeapi.interfaces";
import { NOURLAPIREQUEST } from "../services/Api";

export const pokemonLoopRequest = async (arr: IBasePokemonUrlInfo[], setPokelist: Function) => {
    const pagePokemonsArray: IPokemon[] = []

      for (let i = 0; i < arr.length; i++) {
        const pokemon: IBasePokemonUrlInfo = arr[i];

        const response = await NOURLAPIREQUEST.get(pokemon.url)
        pagePokemonsArray.push({
          id: response.data.id,
          name: response.data.name,
          order: response.data.order,
          abilities: response.data.abilities,
          types: response.data.types,
          sprites: response.data.sprites,
          moves: response.data.moves,
        })

        if (i + 1 === arr.length) {
          setPokelist(pagePokemonsArray);
        }
    }
}
