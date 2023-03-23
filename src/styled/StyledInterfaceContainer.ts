import styled from "styled-components";

export const StyledInterfaceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  height: 80%;
  width: 80%;

  .previousPageBtn {
    :hover {
      cursor: pointer;
    }
  }

  .nextPageBtn {
    :hover {
      cursor: pointer;
    }
  }
`