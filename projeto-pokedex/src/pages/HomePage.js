import React from "react";
import axios from "axios";
import Cards from "../components/Cards";
import styled from "styled-components"


const H1 = styled.h1`
display: flex;
justify-content: center;
margin: 10px;
// display: inline-block;
font-weight: bold;
font-family: Arial, Helvetica, sans-serif;
background: linear-gradient(to bottom, #1abc9c 50%,#3498db 50%);
background-clip: text;
-webkit-background-clip: text;
color: transparent;

:hover { 
background-color: green; 

transition: 1.0s;

opacity: 0.8;

}
`


const HomePage = () => {
    return (

        <div>
            <H1>Lista de pokemons</H1>
            <Cards />
        </div>
    )
}

export default HomePage;
