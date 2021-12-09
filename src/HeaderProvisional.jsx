import { useContext } from "react";
import { FormLogin } from "./components/FormLogin";
import { FormRegister } from "./components/FormRegister";
import { Context } from "./context/Context";
import { Login } from "./Modals/Login";
import { Register } from "./Modals/Register";
import { Prueba } from "./Prueba";

const HeaderProvisional = () => {
  const { openModal } = useContext(Context)
  
  return (
    <>
      <Prueba />
      {!!openModal.login && (
        <Login>
          <FormLogin />
        </Login>
      )}
      {!!openModal.signUp && (
        <Register>
          <FormRegister />
        </Register>
      )}
    </>
  );
};

export { HeaderProvisional };
