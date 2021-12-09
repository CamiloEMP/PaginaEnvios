import "../styles/Home.css";
import { Header } from "./Header"
import img1 from "../img/box-home.png";
import img2 from "../img/Tabla.png";

export const Home = ({ props }) => {
    return (
        <>
        <Header> </Header>
        <div class="Contenedor-P">
            <div class = "Contenedor-1">
                <img src={img1}/> 
                <p> Recepción de paquetes </p>
            </div>
            <div class = "Contenedor-2">
                <img src={img1}/> 
                <p> Asignar recogidas programadas </p>
            </div>
            <div class = "Contenedor-3">
                <img src={img1}/> 
                <p> Modificar estado del envio </p>
            </div>
            <div class = "Contenedor-4">
                <img src={img2}/> 
                <p> Reporte de envios programados </p>
            </div>
            <div class = "Contenedor-5">
                <img src={img2}/> 
                <p> Reporte de envios programados </p>
            </div>
    </div>
    </>
)
};

