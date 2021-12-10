import "../styles/ScheduledShipments2.css";
import { Header } from "./Header"
import img1 from "../img/Tabla.png"

export const ScheduledShipments2 = ({ props }) => {
    return (
        <>
        <Header> </Header>
        <div className="C-P">
            <div className="Title">
                <h1> Envio programado 89765QWE </h1>
            </div>
            <div className="Labels">
                <img src={img1} alt="" />
            </div>
            <div className="Information">
                <p> Número de guía: 89765QWE </p>
                <p> Dirección de envío: Calle 55 # 11 - 22  Este </p>
                <p> Ciudad: Medellín, Antioquia </p>
                <p> Barrio: Santa Elena </p>
                <p> Valor declarado: 800.000 COP </p>
                <div>
                    <p className="PersonaQueRecibe"> Persona que recibe </p>
                    <div>
                        <p> Nombre: Jorge Prieto </p>
                        <p> Número de identificación: 1122448899 </p>
                    </div>
                </div>
                <div> 
                    <button id="Tracking" name="Tracking" className="btnTrack"> Tracking</button> <p></p>
                    <button id="Envios" name="Envios" className="btnEnvios"> Ver todos los envíos </button>
                </div>
            </div>
        </div>
        </>

    )}