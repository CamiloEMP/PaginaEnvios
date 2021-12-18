import "./HomeUserExtern.css"
import box_home from "../../img/box-home.png";
import c1 from "../../img/C1.png";
import c2 from "../../img/C2.png";
import c3 from "../../img/C3.png";
import { Header } from "../Header/";
export const HomeUserExtern = () => {
  return (
    <>
      <Header />
      <section className="title-person-home">
         <h2>Bienvenido Nombre Persona ¿Que deseas hacer hoy?</h2> 
      </section>
      <main className="main-extern-container">
        <div className="container-card card1">
          <div className="container-img">
            <img src={c2} alt="" />
            <img src={box_home} alt="" />
          </div>
          <p> Programar envio </p>
        </div>
        <div className="container-card card2">
          <div className="container-img">
            <img src={c3} alt="" />
            <img src={box_home} alt="" />
          </div>
          <p> Cancelar envío </p>
        </div>
        <div className="container-card card3">
          <div className="container-img">
            <img src={c1} alt="" />
            <img src={box_home} alt="" />
          </div>
          <p> Historial de envíos </p>
        </div>
      </main>
    </>
  );
};
