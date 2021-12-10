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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, GlobalContext };
