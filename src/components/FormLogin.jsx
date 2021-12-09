import { useContext } from "react";
import { Context } from "../context/Context";
import { IoCloseCircleOutline } from "react-icons/io5";
import "../styles/FormLog_Reg.css";

const FormLogin = () => {
  const onSubmitLogin = (event) => {
    event.preventDefault();
  };

  const {closeLogin} = useContext(Context)

  return (
    <form onClick={onSubmitLogin} className="Form">
      <button onClick={closeLogin} className="Form-close">
        <IoCloseCircleOutline className="icon-close" />
      </button>
      <h3>DeliveryXpress</h3>
      <div className="Flogin-img-user"></div>
      <label htmlFor="FLogin-email" className="Form-label">
        Email
      </label>
      <input
        type="email"
        id="FLogin-email"
        name="FLogin-email"
        className="Form-input"
      />
      <label htmlFor="FLogin-password" className="Form-label">
        Password
      </label>
      <input
        type="password"
        id="FLogin-password"
        name="FLogin-password"
        className="Form-input"
      />
      <div className="Form-container-btn">
        <button className="Form-btn">Sign in</button>
      </div>
    </form>
  );
};

export { FormLogin };
