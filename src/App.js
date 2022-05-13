import React, { useState, useEffect, useNavigate, useParams } from "react";
import axios from "axios";
import Router from './routes/Router';
import Logo from "./img/Logo.png";
import HomePage from "./pages/HomePage";
import Cards from "./components/Cards";
import Christian from "./img/foto1.png"
import Karen from "./img/foto2.png";
import Duda from "./img/foto3.png";
import GlobalStateContext from "./global/GlobalStateContext"
import { GlobalState } from "./global/GlobalState";
import { GlobalStyle, Header, Body, LogoHeader, Footer, DivFooter, ImagemFooter } from "./styleApp";
import { useRequestData } from "./hooks/useRequestData";
import { BASE_URL } from "./constants/Constants";
import { useContext } from "react";
import './Styles.css'

// Para details: `url/${id}`

const App = () => {

  return (
    <>
      <GlobalStyle />

      <GlobalState>

        <Header>
          <LogoHeader src={Logo} alt="PokéCKM - Temos que programar" title="PokéCKM - Temos que programar" />
        </Header>
        <Body>
        <Router />
        </Body>
        <Footer>
          <h3>Copyright, 2022. Desenvolvido por: Christian Cardeal, Karen Kubo e Maria Eduarda Lopes.</h3>
          <DivFooter>
            <a href="mailto:christian-cardeal@hotmail.com"><ImagemFooter src={Christian} alt="Link para e-mail - Christian" /></a>
            <a href="mailto:karennckubo@gmail.com"><ImagemFooter src={Karen} alt="Link para e-mail - Karen" /></a>
            <a href="mailto:eduardaloopes2011@hotmail.com"><ImagemFooter src={Duda} alt="Link para e-mail - Maria Eduarda" /></a>
          </DivFooter>
        </Footer>

      </GlobalState>
    </>
  );
}

export default App;
