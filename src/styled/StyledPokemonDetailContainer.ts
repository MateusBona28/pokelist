import styled from "styled-components";

interface IPokemonCardProps {
  primaryColor: string
  secondaryColor: string
}

export const StyledPokemonDetailContainer = styled.div<IPokemonCardProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 700px;
  height: 450px;

  border-radius: 10px;

  background-color: var(--white);

  .pokemonImgSection {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    background-color: var(${(props => props.primaryColor)});

    width: 50%;
    height: 100%;
  }
  
  .pokemonInfoSection {
    display: flex;
    flex-direction: column;

    padding: 40px;
    gap: 30px;

    width: 50%;
    height: 100%;
    
    color: var(--grey0);
    text-shadow: none;

    overflow: auto;

    .pokemonInfoSection-abilities {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 20px;
    }
  }

  img {
    align-self: center;
    justify-self: center;
    background-color: var(${(props) => props.secondaryColor});
    border-radius: 50%;
  }
`