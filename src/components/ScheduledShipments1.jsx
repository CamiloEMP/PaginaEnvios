import { Header } from "./Header"
import img1 from "../img/Tabla.png"

export const ScheduledShipments1 = ({ props }) => {
    return (
        <>
        <Header> </Header>
        <div class="C-P">
            <div class="Title">
                <h1> Envios programados </h1>
            </div>
            <div class= "Labels">
                <img src={img1} />
            </div>
            <div class="Information">
                <p> Número de guía: 89765QWE </p>
                <p> Dirección de envío: Calle 55 # 11 - 22  Este </p>
                </div>
            </div>
        </>

    )}