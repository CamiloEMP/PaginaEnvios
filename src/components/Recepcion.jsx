import "../styles/R.css";
import { Header } from "./Header"

export const Recepcion = ({ props }) => {
    return (
        <>
        <Header> </Header>
        <div class="C-P">
            <div class="Title">
                <h1> Recepcion de paquetes </h1>
            </div>
            <div class= "Labels">
                <p>Dimensiones (cm) </p>
                <p> Valor declarado </p>
                <p>Valor del seguro </p>
                <p>Costo de envío</p>
                <p> Asegurado</p>
                <p> Total a pagar </p>
                <p> Descripción del paquete </p>
            </div>
            <div class="Information">
            <label> Ancho </label>
                <input type="text" id="PackageDimensionsAncho" name="PackageDimensionsAncho" class="Dimensiones"></input>
                <label> Alto </label>
                <input type="text" id="PackageDimensionsAlto" name="PackageDimensionsAlto" class="Dimensiones"/> 
                <label> Largo </label>
                <input type="text" id="PackageDimensionsLargo" name="PackageDimensionsLargo" class="Dimensiones"/>
                <p> </p>
                <input type="text" id="weightP" name="weightP" />
                <p> </p>
                <input type="text" id="ValorDeclarado" name="ValorDeclarado" />
                <p> </p>
                <input type="text" id="ValorDeSeguro" name="ValorDeSeguro" />
                <p> </p>
                <input type="text" id="ValorDeEnvio" name="ValorDeEnvio" /> 
                <p> </p>
                <input type="text" id="Asegurado" name="Asegurado" /> 
                <p> </p>
                <input type="text" id="TotalPago" name="TotalPago" />
                <p> </p>
                <input type="text" id="PackageDescription" name="PackageDescription" class = "InputDescription"/>
            </div>
        </div>
        </>

    )}