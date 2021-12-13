import { Link } from "react-router-dom";
/* import Group169 from "../img/Group169"; */
import "../styles/Entregados2.css";
export const Entregas2 = () => {
  return (
    <>
      <div className="container1-2">
        <div className="container-e-2">
          <div className="titulo-2">
            <p className="titulo1-2">Envio entregado</p>
            <p className="subtitulo-2">12455QJE </p>
          </div>
          <div className="contenedor-t-2">
            {/*  <img src= {Group169} alt="#"/>  */}
            <div className="Descripcion-e-2">
              <p>Número de guía: 12455QJE</p>
              <p>Dirección de envío: Transversak 17 # 66 - 87</p>
              <p>Ciudad: Cali, Valle del Cauca</p>
              <p>Barrio: Ciudad Bosque</p>
              <p>Valor declarado: 200.000 COP</p>

              <p className="propietario-2">Persona quién recibe:</p>
              <p>Nombre: Sussan López</p>
              <p>Número de identificación: 982448679</p>
            </div>
            <button className="button-entregas">
              <Link to="/home-user-intern">Ver todos los envios</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
