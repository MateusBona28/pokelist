import styled from "styled-components";

interface IPokemonCardProps {
  primaryColor: string
}

export const StyledPokemonCard = styled.div<IPokemonCardProps>`
  height: 250px;
  width: 150px;

  border-radius: 12px;

  background-color: var(${(props) => props.primaryColor});
`