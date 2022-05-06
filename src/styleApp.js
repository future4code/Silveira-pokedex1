import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Background from "./img/nuvens.jpg"

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
`
export const Header = styled.header`
  height: 20vh;
  background-image: url(${Background});
  /* background-size: cover; */
  display: flex;
  align-items: center;
  background-size: contain;
  justify-content: center;
`

export const Body = styled.div `
  min-height: 70vh;
`
export const LogoHeader = styled.img`
  height: 15vh;
  border-radius: 10%;
  box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px;    
  `

export const Footer = styled.footer`
  background-image: url(${Background});
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  word-wrap: break-word;
  h3 {
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 12px;
    word-wrap: break-word;
  }
}
`
export const DivFooter = styled.div `
  display: flex;
  column-gap: 20px;

`
export const ImagemFooter = styled.img`
  width: 50px;
  border-radius: 50%;
  box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px;  
  margin-top: 7px;  
  :hover{ 
    width: 55px;
  }
  :active{
    width: 55px;
    box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px;

  }
`