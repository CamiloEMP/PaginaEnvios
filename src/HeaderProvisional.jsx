
import { Prueba } from "./Prueba";

const HeaderProvisional = () => {
  
  
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
