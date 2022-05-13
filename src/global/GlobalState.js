import React, { useState, useEffect } from "react";
import axios from "axios";
import GlobalStateContext from "../global/GlobalStateContext"
import { useRequestData } from "../hooks/useRequestData";
import { useRequestDataPokemon } from "../hooks/useRequestDataPokemon";
import { BASE_URL } from "../constants/Constants";

export const GlobalState = (props) => {
    const [details, setDetails] = useState({});
    const [page, setPage] = useState(1)
    const [pokedex, setPokedex] = useState([]);
    const [getPokemons, setGetPokemons] = useRequestData([], `${BASE_URL}?limit=15&offset=${15*(page-1)}`)
    const [pokemons, setPokemons] = useState([]);


    const gettingPokemonsDetails = () => {
        const namePoke = {}
        pokedex.forEach((pokemon) => {
            namePoke[pokemon.name] = true
                })        
        const gettingPokemons = [];
        console.log(`GetPokemons`, getPokemons)
             getPokemons && getPokemons.forEach((pokemon, i) => {
             if (!namePoke [pokemon.name]) {
            axios
            .get(`${pokemon.url}`)
            .then((res) => {
            gettingPokemons.push(res.data)
                if (i === 14 ) { 
                    gettingPokemons.sort((a, b) => a.id - b.id)
                    setPokemons(gettingPokemons)
                }
            })
            .catch((err) => {
                console.log(err)
            })} 
        }) 
    }

    useEffect(() => {
        gettingPokemonsDetails();
    },[getPokemons])

    
        const states = { details, pokemons, pokedex, getPokemons }
        const setters = { setDetails, setPokemons, setPokedex, setGetPokemons, setPage }
        const requests = {};

        return (
            <GlobalStateContext.Provider value={{ states, setters, requests }}>
                {props.children}
            </GlobalStateContext.Provider>
        );
    }