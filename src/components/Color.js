import React, { useState } from "react";
import { css } from "@emotion/core";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Color = ({ col }) => {
  // extraer las propiedades
  const { year, name, color, pantone_value } = col;

  const [copy, setCopy] = useState(false);

  const copyColour = () => {
    setCopy(true);
    setTimeout(() => setCopy(false), 1500);
  };

  return (
    <CopyToClipboard text={color} onCopy={() => copyColour()}>
      <div className="entrada" style={{ backgroundColor: color }}>
        <div className="contenido">
          <h2>{year}</h2>
          {copy ? (
            <h1>Copiado!</h1>
          ) : (
            <div className=".text-flex">
              <h1>{name}</h1>
              <h1>{color}</h1>
            </div>
          )}
          <p>{pantone_value}</p>
          </div>
      </div>
    </CopyToClipboard>
  );
};

export default Color;
