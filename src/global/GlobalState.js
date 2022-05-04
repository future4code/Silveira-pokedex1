import React, { useState } from "react";
import GlobalStateContext from "../global/GlobalStateContext"
import { useRequestData } from "../hooks/useRequestData";
import { useRequestDataPokemon } from "../hooks/useRequestDataPokemon";
import { BASE_URL } from "../constants/Constants";

export const GlobalState = (props) => {
    const  [details, setDetails] = useState({});
    const [pokemons, setPokemons] = useState();
    const [pokedex, setPokedex] = useState();

    const states = { details, pokemons, pokedex }
    const setters = { setDetails, setPokemons, setPokedex }
    const requests = {};

    return (
        <GlobalStateContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalStateContext.Provider>
    );
}