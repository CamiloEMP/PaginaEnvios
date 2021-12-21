import "../styles/Home.css";
import { Header } from "./Header";
import box_home from "../img/box-home.png";
import tabla from "../img/Tabla.png";
import { Link } from "react-router-dom";
import c1 from "../img/C1.png";
import c2 from "../img/C2.png";
import c3 from "../img/C3.png";
import c4 from "../img/C4.png";
import c5 from "../img/C5.png";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="container-home">
        <div className="Contenedor-P">
          <Link to="/user-intern">
            <div className="Contenedor-1">
              <div className="container-img-box">
                <img src={c1} alt="" />
                <img src={box_home} alt="" />
              </div>
              <p> Recepción de paquetes </p>
            </div>
          </Link>
          <div className="Contenedor-2">
            <div className="container-img-box">
              <img src={c2} alt="" />
              <img src={box_home} alt="" />
            </div>
            <p> Asignar recogidas programadas </p>
          </div>
          <div className="Contenedor-3">
            <div className="container-img-box">
              <img src={c3} alt="" />
              <img src={box_home} alt="" />
            </div>
            <p> Modificar estado del envio </p>
          </div>
          <div className="Contenedor-4">
            <div className="tabla-img">
              <img src={c4} alt="" />
              <img src={tabla} alt="" />
            </div>
            <p> Reporte de envios programados </p>
          </div>
          <div className="Contenedor-5">
            <div className="tabla-img">
              <img src={c5} alt="" />
              <img src={tabla} alt="" />
            </div>
            <p> Reporte de envios programados </p>
          </div>
        </div>
      </div>
    </>
  );
};
