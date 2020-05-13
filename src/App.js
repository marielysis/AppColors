import React, { useState, useEffect } from 'react';
import Listcolors from './components/Listcolors';


function App() {

  // state de la app
  const [ colors, setColors ] = useState([]);

  const apiColors = async () =>{
    const pag=1;
    const url = `https://reqres.in/api/colors?page=${pag}`
    const resApi = await fetch(url);
    const result = await resApi.json();
    setColors(result.data);
  }

  useEffect(() => {
    apiColors()
  }, [])

  return (
  <div className="container">
      <p className="lead text-center">Copia un Color</p>
      <button 
        onClick={apiColors} 
        type="button" 
        className="btn btn-danger btn-lg btn-block"
        >Colores
        </button>

        <Listcolors
          colors={colors}
        />
     
  </div>
  );
}

export default App;
