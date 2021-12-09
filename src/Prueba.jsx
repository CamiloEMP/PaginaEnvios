import { useContext } from "react";
import { Context } from "./context/Context";

const Prueba = () => {
  const { onClickBtn } = useContext(Context)
  return (
    <div>
      <button className="btn-outline-primary" onClick={onClickBtn}>
        Login
      </button>
      <button className="btn-outline-primary" onClick={onClickBtn}>
        Sign up
      </button>
    </div>
  );
};

export { Prueba };
