import React from "react";
import {css} from '@emotion/core';

const Color = ({col}) => {

  // extraer las propiedades
  const { year, name, color, pantone_value } = col;

  return (
    <div style={{ backgroundColor: color }} > 
        <h1 
         css={css`
         text-align: center;
         font-size: 4rem;
         margin-top: 4rem;
     `}
        
        >{year}</h1>
        <h2 >{name}</h2>
        <h1 >{color}</h1>
        <h2 >{pantone_value}</h2>
    </div>
  );
};

export default Color;
