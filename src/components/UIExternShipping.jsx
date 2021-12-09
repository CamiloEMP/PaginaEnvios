import "../styles/UInternShipping.css";
export const UIExternShipping = ({ props }) => {
  const { nameDestinatary, destiny, direction, code, state } = props;

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
          className={`state-UIS ${
            (state === "Cancelado" && "state-cancelled-UIS") ||
            (state === "Cancelar" && "state-cancel-UIS") ||
            (state === "Entregado" && "state-del-UIS")
          }`}
        >
          {state}
        </button>
      </div>
    </div>
  );
}
