import { useEffect, useState } from "react";
import { IPokemonCardProps } from "../interfaces/pokeapi.interfaces";
import { StyledPokemonCard } from "../styled/StyledPokemonCard";
import { pokemonTypeColor } from "../utils/pokemonTypeColor";

const PokemonCard = ({ id, name, types }: IPokemonCardProps) => {
  const [primaryColor, setPrimaryColor] = useState<string>("")
  const [secondaryColor, setSecondaryColor] = useState<string>("")

  useEffect(() => {
    pokemonTypeColor(types, setPrimaryColor, setSecondaryColor)
  }, [])

  return(
    <StyledPokemonCard primaryColor={primaryColor}>
      <span>{id}</span>
      <span>{name}</span>
    </StyledPokemonCard>
  )
}

export default PokemonCard;
