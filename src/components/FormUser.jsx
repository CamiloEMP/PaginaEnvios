import { Formik, Form, Field } from "formik";

export const FormUser = () => {
  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          id: "",
          direccion: "",
          departamento: "",
          ciudad: "",
          barrio: "",

          dia: "",
          desde: "",
          hasta: "",
          alto: "",
          ancho: "",
          largo: "",
          peso: "",

          nombre2: "",
          id2: "",
          direccion2: "",
          departamento2: "",
          ciudad2: "",
          barrio2: "",
        }}
        validate={(values) => {}}
        OnSubmit={(values) => {
          console.log(values);
          console.log("Submit");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <Form clasNamme="Formulario_Usuario">
            <div>
              <div>
                <p>Datos del remitente</p>
              </div>
              <div>
                <label htmlFor="nombre">Nombre completo</label>
                <Field type="text" id="nombre" name="nombre" />
              </div>
              <div>
                <label htmlFor="identificacion">N. Identificación</label>
                <Field type="text" id="id" name="id" />
              </div>
              <div>
                <label htmlFor="direccion">Dirección</label>
                <Field type="text" id="direccion" name="direccion" />
              </div>
              <div>
                <label htmlFor="departamento">Departamento</label>
                <select id="departamento" name="departamento">
                  <option value="Antioquia">Antioquia</option>
                  <option value="Cundinamarca">Cundinamarca</option>
                  <option value="Bogota">Bogota</option>
                </select>
              </div>
              <div>
                <label htmlFor="ciudad">Ciudad</label>
                <select id="ciudad" name="ciudad">
                  <option value="Medellin">Medellin</option>
                  <option value="Bogota">Bogota</option>
                </select>
              </div>
              <div>
                <label htmlFor="direccion">Barrio</label>
                <Field type="text" id="Barrio" name="Barrio" />
              </div>
            </div>

            <div>
              <div>
                <p>Fecha para recojer tu paquete</p>
              </div>
              <div>
                <p>Franja horaria</p>
              </div>
              <div>
                <label htmlFor="fecha">Dia</label>
                <Field type="date" id="fecha" name="fecha" />
              </div>

              <div>
                <label htmlFor="hora">Desde</label>
                <Field type="time" id="desde" name="desde" />
              </div>
              <div>
                <label htmlFor="hora">Hasta</label>
                <Field type="time" id="hasta" name="hasta" />
              </div>
              <div>
                <p>Dimensiones dle paquete</p>
              </div>
              <div>
                <label htmlFor="dimensiones">Alto (cm)</label>
                <Field type="text" id="alto" name="alto" />
              </div>
              <div>
                <label htmlFor="dimensiones">Largo (cm)</label>
                <Field type="text" id="largo" name="largo" />
              </div>
              <div>
                <label htmlFor="dimensiones">Ancho (cm)</label>
                <Field type="text" id="ancho" name="ancho" />
              </div>
              <div>
                <label htmlFor="Peso">Peso (Kg)</label>
                <Field type="text" id="Peso" name="Peso" />
              </div>

              <div>
                <p>¿El paquete es fragil?</p>
                <label>
                  <Field type="radio" name="fragil" value="yes" /> si
                </label>
                <label>
                  <Field type="radio" name="fragil" value="no" /> no
                </label>
              </div>
            </div>

            <div>
              <div>
                <p>Datos del destinatario</p>
              </div>
              <div>
                <label htmlFor="nombre">Nombre completo</label>
                <Field type="text" id="nombre2" name="nombre2" />
              </div>
              <div>
                <label htmlFor="identificacion">N. Identificación</label>
                <Field type="text" id="id2" name="id2" />
              </div>
              <div>
                <label htmlFor="direccion">Dirección</label>
                <Field type="text" id="direccion2" name="direccion2" />
              </div>
              <div>
                <label htmlFor="departamento">Departamento</label>
                <select id="departamento2" name="departamento2">
                  <option value="Antioquia">Antioquia</option>
                  <option value="Cundinamarca">Cundinamarca</option>
                  <option value="Bogota">Bogota</option>
                </select>
              </div>
              <div>
                <label htmlFor="ciudad">Ciudad</label>
                <select id="ciudad2" name="ciudad2">
                  <option value="Medellin">Medellin</option>
                  <option value="Bogota">Bogota</option>
                </select>
              </div>
              <div>
                <label htmlFor="direccion">Barrio</label>
                <inFieldput type="text" id="Barrio2" name="Barrio2" />
              </div>
            </div>

            <button type="submit">Generar guía</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
