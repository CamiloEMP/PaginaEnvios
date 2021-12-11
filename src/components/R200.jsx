import "../styles/R200.css"
import { Header } from "./Header";

export const R200 = () => {
    return (
        <>
        <Header> </Header>
        <div class = "Container"> 
            <div class = "title"> 
                <h1> Recepción de paquetes</h1>
            </div>
            <div class = "labels"> 
                <label>Dimensiones (cm): </label>
                <label> Peso (kg) </label>
                <label> Valor declarado </label>
                <label> Valor de seguro </label>
                <label> Costo de envío </label>
                <label> Asegurado </label>
                <label> Total a pagar </label>
                <label>Descripción del contenido</label>
            </div>
            <div class = "information">
                <div>  
                    <label> Ancho </label>  <input type="text" id="PackageDimensionsAncho"name="PackageDimensionsAncho" class="inputDimensiones"></input> 
                    <label> Alto </label>  <input type="text" id="PackageDimensionsAlto"name="PackageDimensionsAlto" class="inputDimensiones"></input> 
                    <label> Largo </label> <input type="text" id="PackageDimensionsLargo"name="PackageDimensionsLargo" class="inputDimensiones"></input> 
                </div>
                <input type="text" id="weightP" name="weightP" />
                <input type="text" id="ValorDeclarado" name="ValorDeclarado" />
                <input type="text" id="ValorDeSeguro" name="ValorDeSeguro" />
                <input type="text" id="ValorDeEnvio" name="ValorDeEnvio" />
                <div> 
                    <label> Sí </label>
                    <input type="radio" id="btnAseguradoYes"name="btnAseguradoYes" class="btnbtnAsegurado"></input>
                    <label> No </label>
                    <input type="radio" id="btnAseguradoNo"name="btnAseguradoNo" class="btnbtnAsegurado"></input> 
                </div>
                
                <input type="text" id="TotalPago" name="TotalPago" />
                <input type="text" id="PackageDescription" name="PackageDescription" class="InputDescription"/>
                <button id="GenerarGuia" name="GenerarGuia" class="btnGenerarGuia"> Generar guía </button>
            </div>
        </div>
        </>
    )

}