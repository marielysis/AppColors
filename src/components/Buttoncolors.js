import React, { useState } from 'react';
import ListColors from './Listcolors';


const ButtonColors = ({ colors, setColors}) => {

  const [ color, setColor ] = useState(false);
   
  const showColors = e => {
    setColor(true);
    return;
  }


  return ( 
    <div>
      <button 
        onClick={showColors} 
        type="button" 
        className="boton"
        >Colores
        </button>
    
    
      {color ? <ListColors colors={colors} /> : null}
    </div>
  
   );
}
 
export default ButtonColors;