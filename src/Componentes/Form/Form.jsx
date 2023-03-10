import { useState } from "react";
import Card from "../Card/Card";
import "./Form.css";

/*  datos */
const Form = () => {
  const [datos, setdatos] = useState({
    nombreCompleto: "",
    universidad: "",
    nivelDeEstudio: "",
  });

  /*  validacion  */

  const handleChange = (e, propiedad) => {
    setdatos({ ...datos, [propiedad]: e.target.value });
  };
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombreinvalido = datos.nombreCompleto.length > 3;
    const univerdidaInvalida = datos.universidad.length > 6;

    if (!nombreinvalido || !univerdidaInvalida) {
      setError(true);
      if (!nombreinvalido && !univerdidaInvalida) {
      } else {
        setErrorMessage("POR FAVOR CHEQUEAR QUE LA INFORMACION SEA CORRECTA");
      }
      return;
    }
    setIsLogged(true);
    console.log("data: ", datos);
  };
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        
        <input
          type="text"
          name="nombreCompleto"
          onChange={(e) => handleChange(e, "nombreCompleto")}
          placeholder="Escribe tu nombre completo"
        />
        <input
          type="text"
          name="universidad"
          placeholder="Escribe tu Universidad"
          onChange={(e) => handleChange(e, "universidad")}
        />
        <select
          style={{
            width: "100%",
            height: "34px",
            fontSize: "0.9rem",
          }}
          onChange={(e) => handleChange(e, "nivelDeEstudio")}
        >
          <option className="estudios" value="" default>
            Seleccionar nivel de estudio
          </option>
          <option className="estudios" value="Graduado">
            Graduado
          </option>
          <option className="estudios" value="en Curso">
            en curso
          </option>
        </select>
        <button className="enviardatos" type="submit">
          Enviar Datos{" "}
        </button>
        {error &&
          errorMessage.includes(
            "POR FAVOR CHEQUEAR QUE LA INFORMACION SEA CORRECTA"
          ) && (
            <span
              style={{
                color: "white",
                fontSize: "1.0rem",
                textAlign: "center",
              }}
            >
              {errorMessage}
            </span>
          )}
      </form>

      {isLogged && (
        <Card
          nivelDeEstudio={datos.nivelDeEstudio}
          universidad={datos.universidad}
          nombreCompleto={datos.nombreCompleto} 
          
        />
      )}
    </div>
  );
};

export default Form;
