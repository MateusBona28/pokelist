import styled from "styled-components";

export const StyledInterfaceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  height: 80%;
  width: 80%;

  .previousPageBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50px;

    font-size: 20px;
    
    :hover {
      cursor: pointer;
    }
  }

  .nextPageBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50px;

    font-size: 20px;

    :hover {
      cursor: pointer;
    }
  }
`