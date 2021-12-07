import "../styles/UInternPackages.css";
import { dataF } from "../DataProvisional";
import { useState } from "react";
import { Header } from "./Header/index";
import { IoSearchOutline } from "react-icons/io5";
import { UInternShipping } from "./UInternShipping";
import { ModalContext } from "../context/ModalContext";
export const UInternPackages = () => {
  
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
    <>
      <ModalContext>
        <Header/>
      </ModalContext>
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
