import PokemonsList from "../components/PokemonsList";
import StyledPageContainer from "../styled/StyledPageContainer";

const Home = () => {
  return(
    <StyledPageContainer>
      <h1>Pokedex</h1>
      <PokemonsList />
    </StyledPageContainer>
  )
}

export default Home;
