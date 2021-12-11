import { Link } from "react-router-dom";
import { Header } from "./Header";
import Group169 from "../img/Group169.png";
import "../styles/Entregados1.css";

export const Entregas = () => {
    return (
      <>
      <Header />
        <div className="container1">
            <div className="container-Entregas">
                <div className="titulo">
                    <p>Envios entregados</p>
                </div>
                <div className="grande">
                    <div ClasName="contenedor-tarjetas-Entrega">
                        <div className="imagen-e">
                            <img src= {Group169} alt="Imagen"/>
                        </div>
                        <div className="Descripcion-e">
                            <p>Número de guía: 12455QJE</p>
                            <p>Dirección de envío: Transversak 17 # 66 - 87</p>
                            <p>Nombre: Sussan López</p>
                            {/* <Link to="">Ver más...</Link> */}
                        </div>  
                    </div>
                    <div classNama="contenedor-t">
                        <div className="imagen-e">
                            <img src= {Group169} alt="Imagen"/>
                        </div>
                        <div className="Descripcion-e">
                            <p>Número de guía: 94321PRE</p>
                            <p>Dirección de envío: Calle  15 # 18 - 19  Sur</p>
                            <p>Nombre: Juanita Alimaña</p>
                           {/*  <Link to="/home-user-intern">Ver más...</Link> */}
                        </div>  
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }