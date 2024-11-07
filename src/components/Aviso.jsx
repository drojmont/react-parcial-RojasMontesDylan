import React from "react";

const Aviso = (props) => {
  console.log(props.mensaje);
  return (
    <>
      <h2>{props.mensaje}</h2>
    </>
  );
};

export default Aviso;
