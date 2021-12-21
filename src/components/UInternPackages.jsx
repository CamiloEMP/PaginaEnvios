import "../styles/UInternPackages.css";
import { Context } from "../context/Context";
import { useContext } from "react";
import { Header } from "./Header/index";
import { IoSearchOutline } from "react-icons/io5";
import { UInternShipping } from "./UInternShipping";
export const UInternPackages = () => {
  const {
    searchedValueTrabajador,
    SearchTrabajador,
    infoTrabajador,
  } = useContext(Context);
  return (
    <>
      <Header />
      <main className="main-UIP">
        <div>
          <input
            type="text"
            onChange={SearchTrabajador}
            value={infoTrabajador}
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
          {searchedValueTrabajador.map((item) => (
            <UInternShipping props={item} key={item.code} />
          ))}
        </section>
      </main>
    </>
  );
};
