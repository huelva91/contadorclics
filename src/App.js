import "./App.css";
import fccLogo from "./imagenes/freecodecamp-logo.png";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import { useState } from "react";

function App() {

  const [numclicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numclicks + 1); 
  };
  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="fcc-logo-contenedor">
        <img src={fccLogo} alt="Free Code Camp Logo" className="fcc-logo" />
      </div>

      <div className="contenedor-principal">
        <Contador numclicks={numclicks} />
        <Boton
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
