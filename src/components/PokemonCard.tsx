import { IPokemonCardProps } from "../interfaces/pokeapi.interfaces";

const PokemonCard = ({ id, name }: IPokemonCardProps) => {
  return(
    <div>
      <span>{id}</span>
      <span>{name}</span>
    </div>
  )
}

export default PokemonCard;
