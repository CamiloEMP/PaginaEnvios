import { IoMenu } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { UInternShipping } from "./UInternShipping";
import { Link } from "react-router-dom";
import logo from "../img/Logo.png";
import "../styles/UInternPackages.css";
import { useState } from "react";
import { dataF } from "../DataProvisional";
import { OpenMenuMobile } from "../Modals/OpenMenuMobile";
const UInternPackages = ({openMenu, setOpenMenu}) => {
  
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

  const onOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <header className="header-UIP">
        <img src={logo} alt="" />
        <div className="IoMenu-container">
          <IoMenu className="IoMenu" onClick={onOpenMenu}/>
          {!!openMenu && (
            <OpenMenuMobile />
          )}
        </div>
        <div className="UserMenu-UIP">
          <Link to="/" className="path-UIP">
            Home
          </Link>
          <Link to="/" className="path-UIP">
            Username
          </Link>
          <button>Log Out</button>
        </div>
      </header>
      <main className="main-UIP">
        <div>
          <input
            type="text"
            onChange={SearchNameDestinatary}
            value={searchValue}
            placeholder="Filtra por: Nombre destinatario, Destino o Estado"
          />
          <IoSearchOutline />
        </div>
        <section className="container-lists-UIP">
          <ul className="title-lists-UIP">
            <li>Nombre destinatario</li>
            <li>Destino</li>
            <li>Dirección</li>
            <li>Código</li>
            <li>Estado</li>
          </ul>
          {searchedValue.map((item) => (
            <UInternShipping props={item} key={item.code} />
          ))}
        </section>
      </main>
    </>
  );
};

export { UInternPackages };
