import { Header } from "./Header"
import { IoSearchOutline } from "react-icons/io5";
import { Context } from "../context/Context";
import { useContext } from "react";
import { UIExternShipping } from "./UIExternShipping";

export const UExternPackages = () => {
  const { searchValue, searchedValue, SearchNameDestinatary } =
    useContext(Context);
  return (
    <>
      <Header />
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
            <UIExternShipping props={item} key={item.code} />
          ))}
        </section>
      </main>
    </>
  )
}
