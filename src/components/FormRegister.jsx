import { IoCloseCircleOutline } from "react-icons/io5";
import { Context } from "../context/Context";
import { useContext, useState } from "react";
import "../styles/FormLog_Reg.css";
import { Link } from "react-router-dom";
const FormRegister = () => {
  const {
    closeRegister,
    expresionesRegulares,
    inputPass,
    setInputPass,
    inputEmail,
    setInputEmail,
  } = useContext(Context);

  const [inputName, setInputName] = useState({ value: "", state: null });
  const [confirmPass, setConfirmPass] = useState({ value: "", state: null });

  const onSubmitSignUp = (event) => {
    event.preventDefault();
    console.log("input name ", inputName);
    console.log("input Email ", inputEmail);
    console.log("input password ", inputPass);
    console.log("input confirm password ", confirmPass);
    <Link to="/home-user-intern"></Link>
  };

  const validacionNombre = () => {
    if (expresionesRegulares) {
      if (expresionesRegulares.nombre.test(inputName.value)) {
        console.log("Todo bien");
      } else {
        console.log("Mal pa");
      }
    }
  };

  return (
    <form onSubmit={onSubmitSignUp} className="Form">
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
        value={inputName.value}
        onChange={(e) => setInputName({ ...inputName, value: e.target.value })}
        onKeyUp={validacionNombre}
      />
      <label htmlFor="FRegister-email" className="Form-label">
        Email
      </label>
      <input
        type="email"
        id="FRegister-email"
        name="FRegister-email"
        className="Form-input"
        value={inputEmail.value}
        onChange={(e) =>
          setInputEmail({ ...inputEmail, value: e.target.value })
        }
      />
      <label htmlFor="FRegister-password" className="Form-label">
        Contraseña
      </label>
      <input
        type="password"
        id="FRegister-password"
        name="FRegister-password"
        className="Form-input"
        value={inputPass.value}
        onChange={(e) => setInputPass({ ...inputPass, value: e.target.value })}
      />
      <label htmlFor="FRegister-confirmPass" className="Form-label">
        Confirmar contraseña
      </label>
      <input
        type="password"
        id="FRegister-confirmPass"
        name="FRegister-confirmPass"
        className="Form-input"
        value={confirmPass.value}
        onChange={(e) =>
          setConfirmPass({ ...confirmPass, value: e.target.value })
        }
      />
      <div className="Form-container-btn">
      <button className="Form-btn">
          Sign up    
        </button>
      </div>
    </form>
  );
};

export { FormRegister };
