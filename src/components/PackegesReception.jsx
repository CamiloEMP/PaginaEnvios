import "../styles/PackegesReception.css"
import { Header } from "./Header";
import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import { useState } from "react";


export const PackegesReception = () => {
    const [guiaGenerada, setLimpiarForm] = useState(false);

    return (
        <>
            <Header> </Header>
            <div className="Container">
                <div className="title">
                    <h1> Recepción de paquetes</h1>
                </div>
                <div className="labels">
                    <label >Dimensiones (cm): </label>
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
                <Formik
                    initialValues={{
                        PackageDimensionsAncho: '',
                        PackageDimensionsAlto: '',
                        PackageDimensionsLargo: '',
                        weightP: '',
                        valorDeclarado: '',
                        CiudadDestino: '',
                        DireccionEnvio: '',
                        NombreRecibe: '',
                        CostoEnvio: '',
                        ValorSeguro: '',
                        btnAsegurado: '',
                        TotalPagar: '',
                        PackageDescription: '',

                    }}

                    validate={(values) => {
                        let errores = {};
                        


                        //Validacion dimensiones del paquete

                        if (!values.PackageDimensionsAncho) {
                            errores.PackageDimensionsAncho = "Ingrese el ancho del paquete"
                        } else if (!/^([0-9])*$/.test(values.PackageDimensionsAncho)) {
                            errores.PackageDimensionsAncho = "Solo se admiten valores numéricos"

                        } else if (!values.PackageDimensionsAlto) {
                            errores.PackageDimensionsAlto = "Ingrese el alto del paquete"
                        } else if (!/^([0-9])*$/.test(values.PackageDimensionsAlto)) {
                            errores.PackageDimensionsAlto = "Solo se admiten valores numéricos"

                        } else if (!values.PackageDimensionsLargo) {
                            errores.PackageDimensionsLargo = "Ingrese el largo del paquete"
                        } else if (!/^([0-9])*$/.test(values.PackageDimensionsLargo)) {
                            errores.PackageDimensionsLargo = "Solo se admiten valores numéricos"
                        }


                        //Validación peso del paquete
                        if ((!values.weightP)) {
                            errores.weightP = "Ingrese el peso del paquete"
                        } else if (!/^([0-9])*$/.test(values.weightP)) {
                            errores.weightP = "Solo se admiten valores numéricos"
                        }



                        //Validación del valor declarado
                        if ((!values.valorDeclarado)) {
                            errores.valorDeclarado = "Ingrese el valor declarado"
                        } else if (!/^([0-9])*$/.test(values.valorDeclarado)) {
                            errores.valorDeclarado = "Solo se admiten valores numéricos"
                        }

                        //Validación del precio de envío respecto a la ciudad
                        //Validación del precio de envío respecto a la ciudad
                        //Validación del precio de envío respecto a la ciudad

                        //Validación ciudad de destino
                        if ((!values.DireccionEnvio)) {
                            errores.DireccionEnvio = "Ingrese una dirección de envío"
                        }

                        //Validación nombre de la persona que recibe
                        if (!values.NombreRecibe) {
                            errores.NombreRecibe = "Ingrese el nombre de la persona que recibe el paquete "
                        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.NombreRecibe)) {
                            errores.NombreRecibe = "Solo se admite texto"
                        }

                        //
                        //Costo de envío
                        //Y
                        //Validación asegurado
                        let peso = parseInt(values.weightP)
                        let ancho = parseInt(values.PackageDimensionsAncho)
                        let alto = parseInt(values.PackageDimensionsAlto)
                        let largo = parseInt(values.PackageDimensionsLargo)
                        let volumen = ancho * alto * largo
                        if (values.weightP && values.PackageDimensionsAncho
                            && values.PackageDimensionsAlto && values.PackageDimensionsLargo
                            && values.valorDeclarado) {
                            if (volumen > 216000 && peso > 3) {
                                values.CostoEnvio = Math.round(8500 + volumen * .02 + peso * .7)
                                values.ValorSeguro = Math.round(values.CostoEnvio * .10 + values.valorDeclarado*.05) 
                            } else {
                                values.CostoEnvio = 8500
                                values.ValorSeguro = Math.round(values.CostoEnvio * .10)
                            }

                        }



                        //Total pagar 
                        if (values.btnAsegurado === "Yes") {
                            values.TotalPagar = values.ValorSeguro + values.CostoEnvio
                        } else if (values.btnAsegurado === "No") {
                            values.TotalPagar = values.CostoEnvio
                        }

                        return errores;
                    }}

                    //Valor Seguro


                    onSubmit={(values, { resetForm }) => {
                        setLimpiarForm(true);
                        console.log(values);
                        resetForm();
                        console.log("formulario enviado");
                        setTimeout(() => setLimpiarForm(false), 5000);
                    }}

                >
                    {({ errors, values }) => (

                        <Form className="information">

                            <div>
                                <label> Ancho </label>  <Field type="text" id="PackageDimensionsAncho" name="PackageDimensionsAncho" className="inputDimensiones"></Field>
                                <label> Alto </label>  <Field type="text" id="PackageDimensionsAlto" name="PackageDimensionsAlto" className="inputDimensiones"></Field>
                                <label> Largo </label> <Field type="text" id="PackageDimensionsLargo" name="PackageDimensionsLargo" className="inputDimensiones"></Field>

                                <ErrorMessage name="PackageDimensionsAncho" component={() => (<p className="ErrorPR">)
                                    {errors.PackageDimensionsAncho}</p>)} />
                                <ErrorMessage name="PackageDimensionsAlto" component={() => (<p className="ErrorPR">)
                                    {errors.PackageDimensionsAlto}</p>)} />
                                <ErrorMessage name="PackageDimensionsLargo" component={() => (<p className="ErrorPR">)
                                    {errors.PackageDimensionsLargo}</p>)} />
                            </div>

                            <div>
                                <Field type="text" id="weightP" name="weightP"></Field>
                                <ErrorMessage name="weightP" component={() => (<p className="ErrorPR">)
                                    {errors.weightP}</p>)} />
                            </div>

                            <div>
                                <Field type="text" id="valorDeclarado" name="valorDeclarado" placeholder="$"></Field>
                                <ErrorMessage name="valorDeclarado" component={() => (<p className="ErrorPR">)
                                    {errors.valorDeclarado}</p>)} />
                            </div>

                            <div>
                                <Field type="text" id="CiudadDestino" name="CiudadDestino" as="select" className="CiudadDestino">
                                    <option value="Arauca">Arauca</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Barranquilla ">Barranquilla </option>
                                    <option value="Bogota">Bogotá</option>
                                    <option value="Bucaramanga ">Bucaramanga</option>
                                    <option value="Cali">Cali</option>
                                    <option value="Cartagena">Cartagena</option>
                                    <option value="Cucuta">Cúcuta </option>
                                    <option value="Florencia">Florencia</option>
                                    <option value="Ibague">Ibagué</option>
                                    <option value="Leticia">Leticia </option>
                                    <option value="Manizales">Manizales</option>
                                    <option value="Medellin">Medellín</option>
                                    <option value="Mitu">Mitú</option>
                                    <option value="Mocoa">Mocoa</option>
                                    <option value="Monteria">Montería</option>
                                    <option value="Neiva">Neiva</option>
                                    <option value="Pasto">Pasto</option>
                                    <option value="Pereira">Pereira</option>
                                    <option value="Popayan">Popayán</option>
                                    <option value="PuertoCarreno">Puerto Carreño</option>
                                    <option value="PuertoInirida">Puerto Inírida</option>
                                    <option value="Quibdo">Quibdó </option>
                                    <option value="Riohacha">Riohacha </option>
                                    <option value="SanAndres ">San Andrés</option>
                                    <option value="SanJosedelGuaviare">San José del Guaviare</option>
                                    <option value="SantaMarta">Santa Marta </option>
                                    <option value="Sincelejo">Sincelejo</option>
                                    <option value="Tunja">Tunja</option>
                                    <option value="Valledupar">Valledupar</option>
                                    <option value="Villavicencio">Villavicencio</option>
                                    <option value="Yopal">Yopal</option>
                                </Field>
                            </div>

                            <div>
                                <Field type="text" id="DireccionEnvio" name="DireccionEnvio"></Field>
                                <ErrorMessage name="DireccionEnvio" component={() => (<p className="ErrorPR">)
                                    {errors.DireccionEnvio}</p>)} />
                            </div>

                            <div>
                                <Field type="text" id="NombreRecibe" name="NombreRecibe"></Field>
                                <ErrorMessage name="NombreRecibe" component={() => (<p className="ErrorPR">)
                                    {errors.NombreRecibe}</p>)} />

                            </div>


                            <div>
                                <input type="text" id="ValorDeEnvio" name="ValorDeEnvio"
                                    disabled placeholder={"$"+values.CostoEnvio} />
                            </div>

                            <div>
                                <input type="text" id="ValorDeSeguro" name="ValorDeSeguro" disabled
                                    placeholder={"$"+values.ValorSeguro} />
                            </div>


                            <div className="AseguradoSN" role="group">
                                <p>
                                    <label> Sí </label>
                                    <Field
                                        type="radio"
                                        id="btnAseguradoYes"
                                        name="btnAsegurado"
                                        className="btnbtnAsegurado"
                                        value="Yes">
                                    </Field>

                                    <label> No </label>
                                    <Field
                                        type="radio"
                                        id="btnAseguradoNo"
                                        name="btnAsegurado"
                                        className="btnbtnAsegurado"
                                        value="No" >
                                    </Field>
                                </p>
                            </div>

                            <div>
                                <input type="text" id="TotalPago" name="TotalPago" disabled 
                                 placeholder={"$"+values.TotalPagar}/>
                            </div>

                            <div>
                                <Field as="textarea" id="PackageDescription" name="PackageDescription"
                                    className="InputDescription" placeholder="Ingrese una breve descripción del contenido del paquete (Opcional)"></Field>
                            </div>

                            <button type="submit" id="GenerarGuia" name="GenerarGuia" className="btnGenerarGuia"> Generar guía </button>
                            {guiaGenerada && <p className="exitoPR">Tu paquete ahora será trasnportado por uno de nuestros operadores Delivery Xpress</p>}
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )

}