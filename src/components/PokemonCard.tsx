import { useEffect, useState } from "react";
import { IPokemonCardProps } from "../interfaces/pokeapi.interfaces";
import { StyledPokemonCard } from "../styled/StyledPokemonCard";
import { pokemonTypeColor } from "../utils/pokemonTypeColor";
import PokemonDetailModal from "./PokemonDetailModal";

const PokemonCard = ({ id, name, types, sprites, abilities, moves }: IPokemonCardProps) => {
  const [primaryColor, setPrimaryColor] = useState<string>("")
  const [secondaryColor, setSecondaryColor] = useState<string>("")
  const [openPokemonDetail, setOpenPokemonDetail] = useState<boolean>(false)

  useEffect(() => {
    pokemonTypeColor(types, setPrimaryColor, setSecondaryColor)
  }, [])

  return(
    <StyledPokemonCard 
    primaryColor={primaryColor} 
    secondaryColor={secondaryColor}
    onClick={() => { setOpenPokemonDetail(!openPokemonDetail) }}
    >
      <span>{name}</span>
      <span className="pokemonType">{types[0].type.name}</span>
      <img className="pokemonImg" src={sprites.front_default} alt="pokemon" />
      {openPokemonDetail && 
      <PokemonDetailModal 
      primaryColor={primaryColor} 
      secondaryColor={secondaryColor} 
      img={sprites.front_default}
      name={name}
      abilities={abilities}
      moves={moves}
      />}
    </StyledPokemonCard>
  )
}

export default PokemonCard;
