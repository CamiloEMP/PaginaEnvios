import React from "react";

const FormRegister = ({ openModal, setOpenModal }) => {
  const onSubmitSignUp = (event) => {
    event.preventDefault();
  };

  const closeLogin = () => {
    setOpenModal({ ...openModal, signUp: false });
  };

  return (
    <form onClick={onSubmitSignUp}>
      <button onClick={closeLogin} className="FSignUp-close">
        X
      </button>
      <h2>DeliveryXpress</h2>
      <label htmlFor="FSignUp-name">
        name
        <input type="text" id="FSignUp-name" name="FSignUp-name" />
      </label>
      <label htmlFor="FSignUp-email">
        Email
        <input type="email" id="FSignUp-email" name="FSignUp-email" />
      </label>
      <label htmlFor="FSignUp-password">
        Password
        <input type="password" id="FSignUp-password" name="FSignUp-password" />
      </label>
      <label htmlFor="FSignUp-confirmPass">
        Password
        <input
          type="password"
          id="FSignUp-confirmPass"
          name="FSignUp-confirmPass"
        />
      </label>
      <button>Sign up</button>
    </form>
  );
};

export { FormRegister };
