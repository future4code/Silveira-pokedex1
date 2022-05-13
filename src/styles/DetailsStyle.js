import styled from 'styled-components';


export const CardsList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 50px;
    column-gap: 50px;
    margin: 50px;
`

export const H1 = styled.h1`
    display: flex;
    justify-content: center;
    margin: 10px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #1abc9c 50%,#3498db 50%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-transform: uppercase;
    :hover { 
    background-color: green; 

    transition: 1.0s;

    opacity: 0.8;

    }
`

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // APAGAR DEPOIS E VOLTAR PRO CARD
export const DivCards = styled.div`
  box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px;
  border-radius: 5px;
  background-color: #FEF0DB;
  min-height: 55vh;
  width:  600px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  span, p {
    text-align: center;
  }

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 12px;
    width:  320px;
}
`  

export const Imagem = styled.img `
    width: 200px;
    object-fit: contaIn;
    -webkit-transition: -webkit-transform .5s ease;
   transition: transform .5s ease;
   :hover {
   -webkit-transform: scale(1.1);
   transform: scale(1.2);}
   @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    height: 50vw;
  }
`

export const Button = styled.button`
  background-color: white;
  border: 2px solid lightblue;
  border-radius: 30px;
  box-shadow: lightpink 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 40px;
  width: 230px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-bottom: 8px;

  :hover {
  background-color: lightpink ;
  box-shadow: #FF6314 0 -6px 8px inset;
  transform: scale(1.125);
  } 
  :active {    
  transform: scale(1.025);
}
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
}
@media screen and (min-device-width : 1200px) {
}
`
export const TextoBotao = styled.p `
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  font-size: 100%;
}
`
export const P = styled.div `
  word-wrap: break-word;
  line-height: 20.0px;
`
export const H3 = styled.h3`
  display: flex;
  justify-content: center;
  padding: 7px;
  font-size: 25px;
  
`
export const Pokebola = styled.img `
  width: 20px;
  align-self: center;
`

export const DivContain = styled.div`
margin: 50px;
display: flex;
justify-content: space-evenly;
flex-direction: column;
align-items: center;

`

export const DivHome = styled.div` 
margin-bottom: 20px;
margin-top: -25px;
`

export const PGreen = styled.span `
  color: green;
`
export const PRed = styled.span `
  color: red;
`
export const PBlue = styled.span `
  color: blue;
`

export const BoxInfoBlue = styled.div `
  box-shadow: inset 0 0 5px 5px lightblue;
  background-color: #C8F2D7;
  border-radius: 2px;
  width: 400px;
  display: flex;
  flex-direction: column;
  span, p {
    text-align: center;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 12px;
    width:  320px;
  }
`
export const BoxInfoGreen = styled.div `
  box-shadow: inset 0 0 5px 5px lightgreen;
  background-color: #B0E5C6;
  border-radius: 2px;
  width: 400px;
  display: flex;
  flex-direction: column;
  span, p {
    text-align: center;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 12px;
    width:  320px;
  }
`
export const BoxInfoRed = styled.div `
  box-shadow: inset 0 0 5px 5px lightsalmon;
  background-color: #F7D7C4;
  border-radius: 2px;
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  span, p {
    text-align: center;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 12px;
    width:  320px;
  }
`