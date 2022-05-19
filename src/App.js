import "./App.css";
import fccLogo from "./imagenes/freecodecamp-logo.png";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";

function App() {
  const manejarClick = () => {
    console.log("Click!");
  };
  const reiniciarContador = () => {
    console.log("Reiniciar!");
  };

  return (
    <div className="App">
      <div className="fcc-logo-contenedor">
        <img src={fccLogo} alt="Free Code Camp Logo" className="fcc-logo" />
      </div>

      <div className="contenedor-principal">
        <Contador numclicks={5} />
        <Boton
          texto="click"
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
