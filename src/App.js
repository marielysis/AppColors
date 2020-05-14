import React, { useState, useEffect } from 'react';
import ButtonColors from './components/Buttoncolors';


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
        <ButtonColors 
          setColors={setColors}
          colors={colors}
        /> 
  </div>
  );
}

export default App;
