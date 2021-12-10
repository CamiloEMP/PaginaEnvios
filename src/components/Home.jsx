import "../styles/Home.css";
import { Header } from "./Header";
import box_home from "../img/box-home.png";
import tabla from "../img/Tabla.png";
import c1 from "../img/C1.png";
import c2 from "../img/C2.png";
import c3 from "../img/C3.png";
import c4 from "../img/C4.png";
import c5 from "../img/C5.png";

export const Home = () => {
  return (
    <>
      <Header> </Header>
      <div className="container-home">
        <div class="Contenedor-P">
          <div class="Contenedor-1">
            <div className="container-img-box">
              <img src={c1} alt="" />
              <img src={box_home} />
            </div>
            <p> Recepción de paquetes </p>
          </div>
          <div class="Contenedor-2">
            <div className="container-img-box">
              <img src={c2} alt="" />
              <img src={box_home} />
            </div>
            <p> Asignar recogidas programadas </p>
          </div>
          <div class="Contenedor-3">
            <div className="container-img-box">
              <img src={c3} alt="" />
              <img src={box_home} />
            </div>
            <p> Modificar estado del envio </p>
          </div>
          <div class="Contenedor-4">
            <div className="tabla-img">
              <img src={c4} alt="" />
              <img src={tabla} />
            </div>
            <p> Reporte de envios programados </p>
          </div>
          <div class="Contenedor-5">
            <div className="tabla-img">
              <img src={c5} alt="" />
              <img src={tabla} />
            </div>
            <p> Reporte de envios programados </p>
          </div>
        </div>
      </div>
    </>
  );
};
