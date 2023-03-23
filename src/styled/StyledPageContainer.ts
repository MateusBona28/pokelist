import styled from "styled-components";

const StyledPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 100vw;
  height: 100vh;

  @media (max-width: 660px) {
    h1 {
      font-size: 22px;
    }

    .header-container {
      flex-direction: column !important;
      gap: 10px;
    }
  }

  .header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 70%;

    .header-container__titleSection {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 15px;

      .titleSectionBtn {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 80px;
        
        border-radius: 12px;
        border: none;

        background-color: var(--firePrimaryColor);
        color: var(--white);
        text-shadow: black 0.05em 0.05em 0.1em;

        :hover {
          cursor: pointer;
          background-color: var(--fireSecondaryColor);
        }
      }

      .titleSectionSearch {
        border: solid 1.5px var(--grey4);
        height: 30px;
        border-radius: 8px;
        padding-left: 10px;
      }

      div {
        cursor: pointer;
      }

      .titleSectionSearchBtn {
        :hover {
          color: #050505;
        }
      }
    }
  }
`

export default StyledPageContainer;
