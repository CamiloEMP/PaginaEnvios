import { IoCloseCircleOutline } from "react-icons/io5";
import { Context } from "../context/Context";
import { useContext } from "react";
import "../styles/FormLog_Reg.css";

const FormRegister = () => {
  const onSubmitSignUp = (event) => {
    event.preventDefault();
  };

  const { closeRegister } = useContext(Context);

  return (
    <form onClick={onSubmitSignUp} className="Form">
      <button onClick={closeRegister} className="Form-close">
        <IoCloseCircleOutline className="icon-close" />
      </button>
      <h3 className="FRegistro-title">DeliveryXpress</h3>
      <label htmlFor="FRegister-name" className="Form-label">
        Nombre
      </label>
      <input
        type="text"
        id="FRegister-name"
        name="FRegister-name"
        className="Form-input"
      />
      <label htmlFor="FRegister-email" className="Form-label">
        Email
      </label>
      <input
        type="email"
        id="FRegister-email"
        name="FRegister-email"
        className="Form-input"
      />
      <label htmlFor="FRegister-password" className="Form-label">
        Contraseña
      </label>
      <input
        type="password"
        id="FRegister-password"
        name="FRegister-password"
        className="Form-input"
      />
      <label htmlFor="FRegister-confirmPass" className="Form-label">
        Confirmar contraseña
      </label>
      <input
        type="password"
        id="FRegister-confirmPass"
        name="FRegister-confirmPass"
        className="Form-input"
      />
      <div className="Form-container-btn">
        <button className="Form-btn">Sign up</button>
      </div>
    </form>
  );
};

export { FormRegister };
