import React from "react";

const Card = ({ datos }) => {
  console.log(datos);
  return (
    <div>
      Hola {datos.apellido} cursas el curso de {datos.curso}
    </div>
  );
};

export default Card;
