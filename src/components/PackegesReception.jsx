import "../styles/PackegesReception.css"
import { Header } from "./Header";

export const PackegesReception = () => {
    return (
        <>
            <Header> </Header>
            <div className="Container">
                <div className="title">
                    <h1> Recepción de paquetes</h1>
                </div>
                <div className="labels">
                    <label>Dimensiones (cm): </label>
                    <label> Peso (kg) </label>
                    <label> Valor declarado </label>
                    <label> Ciudad de destino </label>
                    <label> Dirección de envío </label>
                    <label> Nombre de quien recibe</label>
                    <label> Costo de envío </label>
                    <label> Valor de seguro </label>
                    <label> Asegurado </label>
                    <label> Total a pagar </label>
                    <label>Descripción del contenido</label>
                </div>
                <div className="information">
                    <div>
                        <label> Ancho </label>  <input type="text" id="PackageDimensionsAncho" name="PackageDimensionsAncho" className="inputDimensiones"></input>
                        <label> Alto </label>  <input type="text" id="PackageDimensionsAlto" name="PackageDimensionsAlto" className="inputDimensiones"></input>
                        <label> Largo </label> <input type="text" id="PackageDimensionsLargo" name="PackageDimensionsLargo" className="inputDimensiones"></input>
                    </div>
                    <input type="text" id="weightP" name="weightP" />
                    <input type="text" id="ValorDeclarado" name="ValorDeclarado" />
                    <input type="text" id="CiudadDestino" name="CiudadDestino" />
                    <input type="text" id="DireccionEnvio" name="DireccionEnvio" />
                    <input type="text" id="NombreRecibe" name="NombreRecibe" />
                    <input type="text" id="ValorDeEnvio" name="ValorDeEnvio" disabled />
                    <input type="text" id="ValorDeSeguro" name="ValorDeSeguro" disabled />
                    
                    <div className="AseguradoSN">
                        <p>
                            <label> Sí </label>
                            <input type="radio" id="btnAseguradoYes" name="btnAsegurado" className="btnbtnAsegurado" value="Yes" ></input>
                            <label> No </label>
                            <input type="radio" id="btnAseguradoNo" name="btnAsegurado" className="btnbtnAsegurado" value="No" ></input>
                        </p>
                    </div>

                    <input type="text" id="TotalPago" name="TotalPago" disabled />
                    <input type="text" id="PackageDescription" name="PackageDescription" className="InputDescription" />
                    <button id="GenerarGuia" name="GenerarGuia" className="btnGenerarGuia"> Generar guía </button>
                </div>
            </div>
        </>
    )

}