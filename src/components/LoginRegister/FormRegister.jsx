import "./FormLog_Reg.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { Formik } from "formik";
const FormRegister = () => {
  const { closeRegister, expresionesRegulares, validationEmail } = useContext(Context);
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPass: "",
        }}
        validate={(values) => {
          let errores = {};
          if (!values.name) {
            errores.name = "Ingresa un nombre";
          } else if (!expresionesRegulares.nombre.test(values.name)) {
            errores.name = "El nombre solo puede tener letras y espacios";
          }
          validationEmail(values, errores)
          return errores;
        }}
        onSubmit={(values) => {
          console.log(values);
          console.log("formulario enviado");
        }}
      >
        {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
          <form className="Form" onSubmit={handleSubmit}>
            <button onClick={closeRegister} className="Form-close">
              <IoCloseCircleOutline className="icon-close" />
            </button>
            <h3 className="FRegistro-title">DeliveryXpress</h3>
            <label htmlFor="name" className="Form-label">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="Form-input"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="Form-error-input">{(touched.name && errors.name) || ""}</span>
            <label htmlFor="email" className="Form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="Form-input"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="Form-error-input">{(touched.email && errors.email) || ""}</span>
            <label htmlFor="password" className="Form-label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="Form-input"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="Form-error-input">{(touched.password && errors.password) || ""}</span>
            <label htmlFor="confirmPass" className="Form-label">
              Confirmar contraseña
            </label>
            <input
              type="password"
              id="confirmPass"
              name="confirmPass"
              className="Form-input"
              value={values.confirmPass}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="Form-error-input">{(touched.confirmPass && errors.confirmPass) || ""}</span>
            <div className="Form-container-btn">
              <button className="Form-btn" type="submit">
                Sign up
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export { FormRegister };
