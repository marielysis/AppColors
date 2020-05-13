import React from 'react';
import Color from './Color';

const ListColors = ({colors}) => {
  return ( 
    <div className="col-12 p-5 row">
      {colors.map(color => (
        <div>
          <ul>
            <li><h1>{color.year}</h1></li>
          <li><h2>{color.name}</h2></li>
          <li><h1>{color.color}</h1></li>   
          
          </ul>
        </div>
      ))}
    </div>
   );
}
 
export default ListColors;