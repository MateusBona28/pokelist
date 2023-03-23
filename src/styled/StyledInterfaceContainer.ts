import styled from "styled-components";

export const StyledInterfaceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  height: 70%;
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

  .disabledBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50px;
    font-size: 20px;
    color: var(--grey3);

    :hover {
      cursor: not-allowed;
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