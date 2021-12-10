import { Header } from "./Header"
import img1 from "../img/Tabla.png"

export const ScheduledShipments1 = ({ props }) => {
    return (
        <>
        <Header> </Header>
        <div className="C-P">
            <div className="Title">
                <h1> Envios programados </h1>
            </div>
            <div className= "Labels">
                <img src={img1} alt="" />
            </div>
            <div className="Information">
                <p> Número de guía: 89765QWE </p>
                <p> Dirección de envío: Calle 55 # 11 - 22  Este </p>
                </div>
            </div>
        </>

    )}