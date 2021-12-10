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
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, GlobalContext };
