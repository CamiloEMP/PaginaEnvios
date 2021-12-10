import { Link } from "react-router-dom";
import Group169 from "src/img/Group 169.png";
import "src/styles/Entregados1.css";
export const Entregas = () => {
    return (
      <>
        <div className="container1">
            <div className="container-e">
                <div className="titulo">
                    <p>Envios entregados</p>
                </div>
                <div className="grande">
                    <div ClasName="contenedor-t">
                        <div className="imagen-e">
                            <img src= {Group169} alt="#"/> 
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
                            <img src="/Group 169.png" alt="imagen-e" />
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