import { Link } from "react-router-dom";
import Group169 from "src/img/Group 169.png";
import "src/styles/Entregados2.css";
export const Entregas2 = () => {
    return (
        <>
            <div className="container1">
            <div className="container-e">
                <div className="titulo">
                    <p className ="titulo1">Envio entregado</p>
                    <p className ="subtitulo">12455QJE </p>
                </div>
                    <div className="contenedor-t">
                    <img src= {Group169} alt="#"/> 
                    <div className="Descripcion-e">
                        <p>Número de guía: 12455QJE</p>
                        <p>Dirección de envío: Transversak 17 # 66 - 87</p>
                        <p>Ciudad: Cali, Valle del Cauca</p>	
                        <p>Barrio: Ciudad Bosque</p>
                        <p>Valor declarado: 200.000 COP</p>
                        
                        <p className="propietario">Persona quién recibe:</p>
                        <p>Nombre: Sussan López</p>
                        <p>Número de identificación: 982448679</p>
                    </div>  
                    <button><Link to="/home-user-intern">Ver todos los envios</Link></button>
                    </div>
                </div>
        </div>
        </>
    )
}