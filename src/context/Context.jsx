import { createContext, useState } from "react";
import { dataF } from "../DataProvisional";
const Context = createContext();

const GlobalContext = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const onOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const [openModal, setOpenModal] = useState({
    login: false,
    signUp: false,
  });

  const closeLogin = () => {
    setOpenModal({ ...openModal, login: false });
  };

  const closeRegister = () => {
    setOpenModal({ ...openModal, signUp: false });
  };

  const onClickBtn = (event) => {
    event.target.textContent === "Login"
      ? setOpenModal({ ...openModal, login: true })
      : setOpenModal({ ...openModal, signUp: true });
  };

  const [searchValue, setSearchValue] = useState("");
  let searchedValue = [];
  if (!searchValue >= 1) {
    searchedValue = dataF;
  } else {
    searchedValue = dataF.filter((item) => {
      const nameDestinataryText = item.nameDestinatary.toLocaleLowerCase();
      const cityText = item.state.toLocaleLowerCase();
      const detinyText = item.destiny.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();

      if (detinyText.includes(searchText)) {
        return detinyText.includes(searchText);
      }

      if (cityText.includes(searchText)) {
        return cityText.includes(searchText);
      }

      return nameDestinataryText.includes(searchText);
    });
  }

  const SearchNameDestinatary = (e) => {
    setSearchValue(e.target.value);
  };

  const expresionesRegulares = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{6,12}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/,
  };

  const validationForm = (values, error) => {
    if (!values.name) error.name = "Ingresa un nombre";
    else if (!expresionesRegulares.nombre.test(values.name))
      error.name = "El nombre solo puede tener letras y espacios";

    if (!values.email) error.email = "Ingresa un correo";
    else if (!expresionesRegulares.correo.test(values.email))
      error.email =
        "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo";

    if (!values.password) error.password = "Ingresa una contraseña";
    else if (!expresionesRegulares.password.test(values.password))
      error.password = "La contraseña debe tener mas de 6 digitos";

    if (values.password !== "") {
      if (!values.confirmPass) error.confirmPass = "Ingresa una contraseña";
      else if (values.password !== values.confirmPass)
        error.confirmPass = "Las contraseñas deben ser iguales";
    }
  };

  return (
    <Context.Provider
      value={{
        openMenu,
        setOpenMenu,
        onOpenMenu,
        openModal,
        setOpenModal,
        closeLogin,
        onClickBtn,
        closeRegister,
        searchValue,
        searchedValue,
        SearchNameDestinatary,
        expresionesRegulares,
        validationForm,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, GlobalContext };
