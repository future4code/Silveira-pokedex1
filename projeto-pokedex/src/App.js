import React from "react";
import Router from './routes/Router';
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Logo from "./img/Logo.png"
import Background from "./img/nuvens.jpg"
import HomePage from "./pages/HomePage";
import Cards from "./components/Cards";
import Christian from "./img/foto1.png"
import Karen from "./img/foto2.png"
import Duda from "./img/foto3.png"


const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
`
const Header = styled.header`
  height: 20vh;
  background-image: url(${Background});
  /* background-size: cover; */
  display: flex;
  align-items: center;
  background-size: contain;
  justify-content: center;
`
const LogoHeader = styled.img`
  height: 15vh;
  border-radius: 10%;
  box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px;    
  `

const Footer = styled.footer`
  background-image: url(${Background});
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const DivFooter = styled.div `
  display: flex;
  column-gap: 20px;
`
const ImagemFooter = styled.img`
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

const App = () => {
  return (
    <div>
      <GlobalStyle />

      <Header>
        <LogoHeader src={Logo} alt="logo de Chris, Karen e Duda" title="logo de Chris, Karen e Duda" />
      </Header>

      <Router />

      <Footer>
        <h3>Copyright, 2022. Developed by Christian Cardeal, Karen Kubo e Maria Eduarda Lopes.</h3>
        <DivFooter>
          <a href="mailto:christian-cardeal@hotmail.com"><ImagemFooter src={Christian} alt="Link para e-mail - Christian" /></a>
          <a href="mailto:karennckubo@gmail.com"><ImagemFooter src={Karen} alt="Link para e-mail - Karen" /></a>
          <a href="mailto:eduardaloopes2011@hotmail.com"><ImagemFooter src={Duda} alt="Link para e-mail - Maria Eduarda" /></a>
        </DivFooter>
      </Footer>

    </div>
  );
}

export default App;
