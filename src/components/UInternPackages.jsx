import "../styles/UInternPackages.css";
import { Context } from "../context/Context";
import { useContext, useEffect, useState } from "react";
import { Header } from "./Header/index";
import { IoSearchOutline } from "react-icons/io5";
import { UInternShipping } from "./UInternShipping";
import axios from "axios";
export const UInternPackages = () => {
  const { searchValue, searchedValue, SearchNameDestinatary } =
    useContext(Context);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/pedido")
      .then((res) => {
        setData(res.data);
        console.log(data)
      })
      .catch((e) => console.log("Error"));
  }, []);
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
            <UInternShipping props={item} key={item.code} />
          ))}
        </section>
      </main>
    </>
  );
};
