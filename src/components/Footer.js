import React from 'react';

const Footer = ({pag, paginaactual, paginaAnterior, paginaSiguiente}) => {
  return ( 
    <div className="footer">
          <button className="boton">
            {paginaactual === 1 ? null : (
              <a onClick={paginaAnterior}>Anterior</a>
            )}

            {paginaactual === pag ? null : (
              <a onClick={paginaSiguiente}>Siguiente</a>
            )}
          </button>
        </div>
   );
}
 
export default Footer;