import { Link } from "react-router-dom";
import { Header } from "./Header";
import Group169 from "../img/Group169.png";
import "../styles/Entregados2.css";

export const Entregas2 = () => {
    return (
        <>
        <Header />
            <div className="container1-2">
            <div className="contenedor-Entregas-2">
                <div className="contenedor-titulo-Entregas-2">
                    <p className ="titulo-Entregas-2">Envio entregado</p>
                </div>
                    <div className="contenedor-tarjetas-Entrega-2">
                    <img src= {Group169} alt="Imagen"/>
                    <div className="Descripcion-Entregas-2">
                        <p>Número de guía: 12455QJE</p>
                        <p>Dirección de envío: Transversak 17 # 66 - 87</p>
                        <p>Ciudad: Cali, Valle del Cauca</p>	
                        <p>Barrio: Ciudad Bosque</p>
                        <p>Valor declarado: 200.000 COP</p>
                        
                        <div className="Descripcion-Recibe-Entregas-2">
                            <p className="propietario-2">Persona quién recibe:</p>
                            <p>Nombre: Sussan López</p>
                            <p>Número de identificación: 982448679</p>

                        </div>
                    </div>
                    <div className="contenedor-boton-Entregas-2">
                        <Link to="/Entregas">
                            <button className = "boton-Entregas-2">
                                Ver todos los envios
                            </button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
