import React, { useState, Fragment } from 'react';
import styled from '@emotion/styled';
import ListColors from "./Listcolor";


const Boton = styled.button`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #EF540E;
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  border-radius: 10px;
  font-size: 20px;
`


const Colores = ({ colors, setColors}) => {

  const [ color, setColor ] = useState(false);
   
  const showColors = e => {
    setColor(true);
    return;
  }


  return ( 
    <Fragment>
      <Boton 
        onClick={showColors} 
        type="button" 
        className="boton"
        >Colores
        </Boton>


      {color ? <ListColors colors={colors} /> : null}
      </Fragment>
   );
}
 
export default Colores;