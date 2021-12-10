import "../styles/UInternShipping.css";
import { useState } from "react";

export const UInternShipping = ({ props }) => {
  const { nameDestinatary, destiny, direction, code, state } = props;
  const [stateUShipping, setStateUShipping] = useState(state)
  const changeStateShipping = (e) => {
    const value = e.target.innerHTML
    if ( value === "Cancelar") {
      e.target.classList.replace("state-cancel-UIS", "state-cancelled-UIS" )
      setStateUShipping("Cancelado")
    }
  }
  return (
    <div className="description-shipping-UIS">
      <span>Nombre Destinatario</span>
      <p>{nameDestinatary}</p>
      <span>Lugar de destino</span>
      <p>{destiny}</p>
      <span>Dirección de destino</span>
      <p>{direction}</p>
      <span>Código del envio</span>
      <p>{code}</p>
      <span>Estado</span>
      <div>
        <button
          onClick={changeStateShipping}
          className={`state-UIS ${
            (state === "Cancelado" && "state-cancelled-UIS") ||
            (state === "Cancelar" && "state-cancel-UIS") ||
            (state === "Entregado" && "state-del-UIS")
          }`}
        >
          {stateUShipping}
        </button>
      </div>
    </div>
  );
};
