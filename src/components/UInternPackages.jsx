import { IoMenu } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { UInternShipping } from "./UInternShipping";
import { Link } from "react-router-dom";
import logo from "../img/Logo.png"
import "../styles/UInternPackages.css"
const UInternPackages = () => {
  const dataF = [
    {
      nameDestinatary: "Pepito Joselito",
      destiny: "Bogota",
      direction: "calle 40 sur 11-79 este",
      code: 848484851,
      state: "Cancelar"
    },
    {
      nameDestinatary: "Pepito Joselito",
      destiny: "Bogota",
      direction: "calle 41 sur 11-79 este",
      code: 748484851,
      state: "Cancelado"
    },
    {
      nameDestinatary: "Pepito Joselito",
      destiny: "Bogota",
      direction: "calle 42 sur 11-79 este",
      code: 8484841287,
      state: "Entregado"
    },
    {
      nameDestinatary: "Pepito Joselito",
      destiny: "Bogota",
      direction: "calle 44 sur 11-79 este",
      code: 8484903141,
      state: "Entregado"
    },
    {
      nameDestinatary: "Pepito Joselito",
      destiny: "Bogota",
      direction: "calle 44 sur 11-79 este",
      code: 82052141,
      state: "Entregado"
    },
    {
      nameDestinatary: "Pepito Joselito",
      destiny: "Bogota",
      direction: "calle 44 sur 11-79 este",
      code: 8484875403141,
      state: "Entregado"
    },
    {
      nameDestinatary: "Pepito Joselito",
      destiny: "Bogota",
      direction: "calle 44 sur 11-79 este",
      code: 848495141,
      state: "Entregado"
    },
  ];
  return (
    <>
      <header className="header-UIP">
        <img src={logo} alt="" />
        <div className="">
          <IoMenu className="IoMenu" />
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
          <input type="text" />
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
          {dataF.map(item => <UInternShipping props={item} key={item.code} />)}
        </section>
      </main>
    </>
  );
};

export { UInternPackages };
