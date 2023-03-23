import { useEffect, useState } from "react";
import { IPokemonCardProps } from "../interfaces/pokeapi.interfaces";
import { StyledPokemonCard } from "../styled/StyledPokemonCard";
import { pokemonTypeColor } from "../utils/pokemonTypeColor";

const PokemonCard = ({ id, name, types, sprites }: IPokemonCardProps) => {
  const [primaryColor, setPrimaryColor] = useState<string>("")
  const [secondaryColor, setSecondaryColor] = useState<string>("")

  useEffect(() => {
    pokemonTypeColor(types, setPrimaryColor, setSecondaryColor)
  }, [])

  return(
    <StyledPokemonCard primaryColor={primaryColor} secondaryColor={secondaryColor}>
      <span>{name}</span>
      <span className="pokemonType">{types[0].type.name}</span>
      <img className="pokemonImg" src={sprites.front_default} alt="pokemon" />
    </StyledPokemonCard>
  )
}

export default PokemonCard;
