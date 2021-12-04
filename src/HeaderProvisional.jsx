import { useState } from "react";
import { FormLogin } from "./components/FormLogin";
import { FormRegister } from "./components/FormRegister";
import { Login } from "./Modals/Login";
import { Register } from "./Modals/Register";
import { Prueba } from "./Prueba"; // ! Quitar simulacion
const HeaderProvisional = () => {
  const [openModal, setOpenModal] = useState({
    login: false,
    signUp: false,
  });
  return (
    <>
      <Prueba openModal={openModal} setOpenModal={setOpenModal} />
      {!!openModal.login && (
        <Login>
          <FormLogin openModal={openModal} setOpenModal={setOpenModal} />
        </Login>
      )}
      {!!openModal.signUp && (
        <Register>
          <FormRegister openModal={openModal} setOpenModal={setOpenModal} />
        </Register>
      )}
    </>
  );
};

export { HeaderProvisional };
