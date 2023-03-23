import { IAbilities, IPokemonDetailModalInfo } from "../interfaces/pokeapi.interfaces";
import { StyledModalBackgroundContainer } from "../styled/StyledModalBackgroundContainer";
import { StyledPokemonDetailContainer } from "../styled/StyledPokemonDetailContainer";

const PokemonDetailModal = ({ primaryColor, secondaryColor, img, name, abilities, moves }: IPokemonDetailModalInfo) => {
  return(
    <StyledModalBackgroundContainer>
      <StyledPokemonDetailContainer primaryColor={primaryColor} secondaryColor={secondaryColor}>
        <div className="pokemonImgSection">
          <figure>
            <img src={img} width={200} height={200} alt="pokemon" />
          </figure>
        </div>
        <div className="pokemonInfoSection">
          <h2>{name}</h2>
          <h3>Habilidades :</h3>
          <div className="pokemonInfoSection-abilities">
            {abilities?.map((ability, index) => {
              return <span key={index}>{index + 1}  -  {ability.ability.name.split("-").join(" ")}</span>
            })}
          </div>
          <h3>Movimentos :</h3>
          <div className="pokemonInfoSection-abilities">
            {moves?.map((move, index) => {
              return <span key={index}>{index + 1}  -  {move.move.name.split("-").join(" ")}</span>
            })}
          </div>
        </div>
      </StyledPokemonDetailContainer>
    </StyledModalBackgroundContainer>
  )
}

export default PokemonDetailModal;
