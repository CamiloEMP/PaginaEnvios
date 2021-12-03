import "../styles/FormLogin.css";

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
        X
      </button>
      <h2>DeliveryXpress</h2>
      <p>IMAGEN</p>
      <label htmlFor="FLogin-email">
        Email
        <input type="email" id="FLogin-email" name="FLogin-email" />
      </label>
      <label htmlFor="FLogin-password">
        Password
        <input type="password" id="FLogin-password" name="FLogin-password" />
      </label>
      <button>Sign in</button>
    </form>
  );
};

export { FormLogin };
