import styled from "styled-components";

export const StyledPokelistContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  gap: 20px;

  width: 100%;
  height: 100%;

  padding: 30px;

  border: solid 1.5px var(--grey4);
  border-radius: 10px;

  overflow: auto;
`