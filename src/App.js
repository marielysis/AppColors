import React, { useState, useEffect } from "react";
import Colores from "./components/Colores";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const pag = 2;
  // state de la app
  const [colors, setColors] = useState([]);
  const [paginaactual, guardarPaginaActual] = useState(1);

  const apiColors = async () => {
    const url = `https://reqres.in/api/colors?page=${paginaactual}`;
    const resApi = await fetch(url);
    const result = await resApi.json();
    setColors(result.data);
  };

  useEffect(() => {
    apiColors();
  }, [colors, paginaactual]);

  // paginación
  // definir pagina anterior

  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual - 1;
    if (nuevaPaginaActual === 0) return;
    guardarPaginaActual(nuevaPaginaActual);
  };
  // definir pagina siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactual + 1;
    if (nuevaPaginaActual > pag) return;
    guardarPaginaActual(nuevaPaginaActual);
  };

  return (
    <div className="contenedor">
      <Header />
      <div className="contenido-principal">
        <Colores setColors={setColors} colors={colors} />
      </div>
      <Footer
          paginaactual={paginaactual}
          paginaAnterior={paginaAnterior}
          paginaSiguiente={paginaSiguiente}
          pag={pag}
        />
    </div>
  );
}

export default App;
