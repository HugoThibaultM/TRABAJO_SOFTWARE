import { useState } from "preact/hooks";

const Verificar = () => {
  const [respuesta, setRespuesta] = useState(""); 

  const verificarRespuesta = () => {

      window.location.href = "/sesion";

  };
  

  return (
    <div>
      <input id="input"
        type="text"
        placeholder="Tu respuesta"
        value={respuesta}
        onInput={(e) => setRespuesta((e.target as HTMLInputElement).value)} 
      />
      <button class="button" onClick={verificarRespuesta}>Enviar</button>  {}
    </div>
  );
};

export default Verificar;