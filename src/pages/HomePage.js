import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../components/Cards";
import styled from "styled-components"
import GlobalStateContext from "../global/GlobalStateContext"
import { GlobalState } from "../global/GlobalState";
import { useContext } from "react";
import { useNavigate,useSearchParams} from 'react-router-dom'
import { goToDetails, goToPage, goToPokedex, goToError } from "../routes/coordinator";
import { CardsList, H1, DivCards, P, H3, Imagem, Button, TextoBotao, Pokebola, DivButtonPokedex } from "../styles/HomePageStyle";
import { BASE_URL, PIC_URL } from "../constants/Constants";
import { useRequestData } from "../hooks/useRequestData";
import { useRequestDataPokemon } from "../hooks/useRequestDataPokemon";
import Poke_bola from "../img/pokebola.png"
import { findAllInRenderedTree } from "react-dom/test-utils";

// import Pagination from "../components/Pagination"; // TESTE
// import { useMemo } from "react"; // TESTE

// let PageSize = 30; // TESTE


const HomePage = () => {
const [query] = useSearchParams() 


// const [currentPage, setCurrentPage] = useState(1); // TESTE

// Teste
const { states, setters } = useContext(GlobalStateContext);
const { pokemons, pokedex, getPokemons } = states;
const { setPokemons, setPokedex, setGetPokemons, setPage } = setters;


//   const currentPoke = useMemo(() => {
//   const firstPageIndex = (currentPage - 1) * PageSize;
//   const lastPageIndex = firstPageIndex + PageSize;
//   return pokemons.slice(firstPageIndex, lastPageIndex);
// }, [currentPage]);

  const navigate = useNavigate();

  useEffect(() => {
    query.get("page") ? setPage(query.get("page")) : setPage(1)
  },[query])

  const addToPokedex = (poke) => {
    const pokeIndex = pokemons.findIndex((pokemon) => {
      return (
        poke.name === pokemon.name
      )
    })
    const newPokemons = [...pokemons]; // tirar
    newPokemons.splice(pokeIndex, 1);
    //sort
    setPokemons(newPokemons);

    const newPokedex = [...pokedex, poke];
    setPokedex(newPokedex);

    alert(`${poke.name} foi adicionado à pokedex!`)
  }


  const pokemonsMap = pokemons && pokemons.map((pokemon, index) => {

    return (
      <DivCards key={index}>
        <H3>{pokemon.name.toUpperCase()}</H3>
        
        <Imagem src={pokemon.sprites.front_default} alt={pokemon.name} />
        <Button onClick={() => { goToDetails(navigate, pokemon.name) }}><TextoBotao>Detalhes</TextoBotao></Button>
        <Button onClick={() => { addToPokedex(pokemon) }}><TextoBotao>Adicionar a Pokedex</TextoBotao><Pokebola src={Poke_bola} alt="Pokebola" /></Button>
      </DivCards>
    )
  })

  

  // const pokemonsMap = currentPoke && currentPoke.map((pokemon, index) => {
  //   return (
  //     <DivCards key={index}>
  //       <H3>{pokemon.name.toUpperCase()}</H3>
        
  //       <Imagem src={pokemon.sprites.front_default} alt={pokemon.name} />
  //       <Button onClick={() => { goToDetails(navigate, pokemon.name) }}><TextoBotao>Detalhes</TextoBotao></Button>
  //       <Button onClick={() => { addToPokedex(pokemon) }}><TextoBotao>Adicionar a Pokedex</TextoBotao><Pokebola src={Poke_bola} alt="Pokebola" /></Button>
  //     </DivCards>
  //   )
  // }) 
  
  return (
    <>

      {/* <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={pokemons.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      /> */}
      <H1>Lista de pokemons</H1>
      <Button onClick={() => setPage(1)}>Página 1</Button>
      <Button onClick={() => setPage(2)}>Página 2</Button>

      <DivButtonPokedex>
        <Button onClick={() => { goToPokedex(navigate) }}>Pokedex</Button>
      </DivButtonPokedex>

        <CardsList>
          {pokemons && pokemonsMap}
        </CardsList>
      </>
      )
}




      export default HomePage;
