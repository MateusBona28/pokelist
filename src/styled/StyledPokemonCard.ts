import styled from "styled-components";

interface IPokemonCardProps {
  primaryColor: string
  secondaryColor: string
}

export const StyledPokemonCard = styled.div<IPokemonCardProps>`
  display: flex;
  flex-direction: column;

  height: 180px;
  width: 200px;

  border-radius: 12px;

  color: var(--white);
  font-weight: 600;
  font-size: 18px;
  text-shadow: black 0.05em 0.05em 0.1em;

  padding: 10px;

  background-color: var(${(props) => props.primaryColor});
  
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  :hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  .pokemonType {
    border-radius: 6px;

    width: fit-content;
    padding: 5px;
    
    background-color: var(${(props) => props.secondaryColor});
  }

  .pokemonImg {
    align-self: flex-end;
    background-color: var(${(props) => props.secondaryColor});
    border-radius: 50%;
  }
`