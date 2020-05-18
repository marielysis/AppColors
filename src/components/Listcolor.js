import React from "react";
import Color from "./Color";



const ListColors = ({ colors }) => {
  return (
    <div className="contenido-principal">
      {colors.map(col => (
        <Color 
          key={col.id}
          col={col}
        />
      ))}
    </div>
  );
};

export default ListColors;