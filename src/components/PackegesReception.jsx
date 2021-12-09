import "../styles/PackegesReception.css"
import { Header } from "./Header"


export const PackegesReception = () => {
    return (
        <>
            <Header> </Header>
            <div class="C-P">
                <h1> Recepción de paquetes</h1>
                <div class="Datos">
                <div> 
                    <label>Dimensiones (cm): </label>
                    <label> Ancho </label>
                    <input type="text" id="PackageDimensionsAncho" name="PackageDimensionsAncho" class="Dimensiones"></input>
                    <label> Alto </label>
                    <input type="text" id="PackageDimensionsAlto" name="PackageDimensionsAlto" class="Dimensiones"/>
                    <label> Largo </label>
                    <input type="text" id="PackageDimensionsLargo" name="PackageDimensionsLargo" class="Dimensiones"/>
                </div>
                <div>
                    <label> Peso (kg) </label>
                    <input type="text" id="weightP" name="weightP" />
                </div>
                <div>
                    <label> Valor declarado </label>
                    <input type="text" id="ValorDeclarado" name="ValorDeclarado" />
                </div>
                <div>
                    <label> Valor de seguro </label>
                    <input type="text" id="ValorDeSeguro" name="ValorDeSeguro" />
                </div>
                <div>
                    <label> Costo de envío </label>
                    <input type="text" id="ValorDeSeguro" name="ValorDeSeguro" />
                </div>
                <div>
                    <label> Asegurado </label>
                    <input type="text" id="Asegurado" name="Asegurado" />
                </div>
                <div>
                    <label> Total a pagar </label>
                    <input type="text" id="TotalPago" name="TotalPago" />
                </div>
                <div>
                    <label>Descripción del paquete</label>
                    <input type="text" id="PackageDescription" name="PackageDescription" class = "InputDescription"/>
                </div>
                <div>
                    <button id="GenerarGuia" name="GenerarGuia" class="btnGenerarGuia"> Generar guía</button>
                </div>
                </div>
            </div>
        </>
    )
}
