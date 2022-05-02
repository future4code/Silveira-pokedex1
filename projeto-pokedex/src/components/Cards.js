import React from "react";
import axios from "axios";
import styled from "styled-components";

const DivCards = styled.div`
  box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px;
  border-radius: 5px;
  height: 50vh;
  width: 20vw;
  padding: 20px;
  // border-radius: 3px;
`
const DivContainer = styled.div`
margin: 40px;
`


export default function Cards() {
  return (
    <DivContainer>

    <DivCards>
      Poke Card
    </DivCards>

    </DivContainer>
  )
}

