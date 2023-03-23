import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --white                    : #fff;
    --grey0                      : #000;
    --grey4                      : #ADB5BD;
    --leafPrimaryColor           : #49D0B0;
    --leafSecondaryColor         : #57DCC1;
    --firePrimaryColor           : #F96C6D;
    --fireSecondaryColor         : #FC7F7F;
    --waterPrimaryColor          : #76BBFB;
    --waterSecondaryColor        : #85CAFF;
    --lightningPrimaryColor      : #FBE137;
    --lightningSecondaryColor    : #FCE75F;
    --rockPrimaryColor           : #7A3F29;
    --rockSecondaryColor         : #C26847;
    --psychicPrimaryColor        : #F750A6;
    --psychicSecondaryColor      : #F977BA;
    --poisonPrimaryColor         : #3F2083;
    --poisonSecondaryColor       : #764AD3;
    --dragonPrimaryColor         : #FF7C1F;
    --dragonSecondaryColor       : #FF9447;
    --defaultPrimaryColor        : #A4ADB6;
    --defaultSecondaryColor      : #BBC2C9;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;

    transition: 0.4s;

    ::-webkit-scrollbar-track {
        background-color: #F4F4F4;
        border-radius: 20px;
    }
    ::-webkit-scrollbar {
        width: 5px;
        background: #F4F4F4;
        border-radius: 20px;
    }
    ::-webkit-scrollbar-thumb {
        background: #dad7d7;
        border-radius: 20px;
    }

    font-family: 'Kanit', sans-serif;
  }
`

