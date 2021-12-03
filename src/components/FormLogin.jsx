import "../styles/FormLogin.css";
import { IoCloseCircleOutline } from "react-icons/io5";
const FormLogin = ({ openModal, setOpenModal }) => {
  const onSubmitLogin = (event) => {
    event.preventDefault();
  };

  const closeLogin = () => {
    setOpenModal({ ...openModal, login: false });
  };

  return (
    <form onClick={onSubmitLogin} className="FLogin">
      <button onClick={closeLogin} className="FLogin-close">
        <IoCloseCircleOutline className="icon-close" />
      </button>
      <h3>DeliveryXpress</h3>
      <div className="Flogin-img-user"></div>
      <label htmlFor="FLogin-email" className="Flogin-label">Email</label>
      <input type="email" id="FLogin-email" name="FLogin-email" className="Flogin-input" />
      <label htmlFor="FLogin-password" className="Flogin-label">Password</label>
      <input type="password" id="FLogin-password" name="FLogin-password" className="Flogin-input" />
      <div className="Flogin-container-btn">
        <button className="Flogin-btn">Sign in</button>
      </div>
    </form>
  );
};

export { FormLogin };
