import { createContext, useState } from "react";

const Context = createContext({});

const ModalContext = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const onOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <Context.Provider value={{ openMenu, setOpenMenu, onOpenMenu }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ModalContext }