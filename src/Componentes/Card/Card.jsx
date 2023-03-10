import React from "react";
import "./Card.css";
import { TiMortarBoard } from "react-icons/ti";
import { AiOutlineLike } from "react-icons/ai";

const Card = ({ nivelDeEstudio, universidad, nombreCompleto }) => {
  return (
    <div className="respuesta">
      <h2 className="respuesta1"> Hola, {nombreCompleto}! </h2>
      <h2 className="respuesta1">
        {" "}
        Has estudiado en la Universidad de {universidad}. <TiMortarBoard />{" "}
      </h2>
      <h2 className="respuesta1">
        {" "}
        Con un nivel de estudio {nivelDeEstudio} <AiOutlineLike />{" "}
      </h2>
    </div>
  );
};

export default Card;
