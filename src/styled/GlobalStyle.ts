import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --white0                  : #fff;
    --grey0                   : #000;
    --grey4                   : #ADB5BD;
    --leafPrimaryColor        : #49D0B0;
    --leafSecondaryColor      : #57DCC1;
    --firePrimaryColor        : #F96C6D;
    --fireSecondaryColor      : #FC7F7F;
    --waterPrimaryColor       : #76BBFB;
    --waterSecondaryColor     : #85CAFF;
    --lightningPrimaryColor   : #FDD56C;
    --lightningSecondaryColor : #F1D284;
    --rockPrimaryColor        : #7A3F29;
    --rockSecondaryColor      : #C26847;
    --pysicPrimaryColor       : #F750A6;
    --pysicSecondaryColor     : #F977BA;
    --defaultPrimaryColor     : #A4ADB6;
    --defaultSecondaryColor   : #BBC2C9;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;

    font-family: 'Kanit', sans-serif;
  }
`

