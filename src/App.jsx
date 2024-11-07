import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Aviso from "./components/Aviso";

function App() {
  const [count, setCount] = useState(0);

  const [usuario, setUsuario] = useState({
    apellido: "",
    curso: "",
  });

  const [mostrarAvisoConfirmacion, setMostrarAvisoConfirmacion] =
    useState(false);

  const [error, setError] = useState("");
  const apellidoRegex = /^[A-Za-z]{3,}$/;
  const cursoRegex = /^[A-Za-z0-9]{6,}$/;

  const eventHandler = (event) => {
    event.preventDefault();

    if (!apellidoRegex.test(usuario.apellido)) {
      setError("El Campo de apellido es erroneo");
      setMostrarAvisoConfirmacion(false);
    } else if (!cursoRegex.test(usuario.curso)) {
      setError("El Campo de curso es erroneo");
      setMostrarAvisoConfirmacion(false);
      return;
    } else {
      setMostrarAvisoConfirmacion(true);
      setError("");
      return;
    }
  };

  return (
    <>
      <div className="App">
        <h1>Registro del ingreso a cursos</h1>
        <Aviso mensaje={error} />
        <form onSubmit={eventHandler}>
          <label>Ingresa tu Apellido</label>
          <input
            type="text"
            onChange={(event) => {
              setUsuario({ ...usuario, apellido: event.target.value });
            }}
          ></input>
          <label>Ingresa nombre del curso</label>
          <input
            type="text"
            onChange={(event) => {
              setUsuario({ ...usuario, curso: event.target.value });
            }}
          ></input>

          <button type="submit">Enviar</button>
        </form>
        {mostrarAvisoConfirmacion ? <Card datos={usuario} /> : null}
      </div>
    </>
  );
}

export default App;
