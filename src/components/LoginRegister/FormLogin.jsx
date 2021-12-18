import "./FormLog_Reg.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from 'react-router';
import axios from "axios"
const FormLogin = () => {
  const navigate = useNavigate();
  const { closeLogin, expresionesRegulares, setUserError } =
    useContext(Context);
  return (
    <Formik
      initialValues={{
        emailLogin: "",
        passwordLogin: "",
      }}
      validate={(values) => {
        let errores = {};
        if (!values.emailLogin) errores.emailLogin = "Ingresa un correo";
        else if (!expresionesRegulares.correo.test(values.emailLogin))
          errores.emailLogin =
            "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo";

        if (!values.passwordLogin)
          errores.passwordLogin = "Ingresa una contraseña";
        else if (!expresionesRegulares.password.test(values.passwordLogin))
          errores.passwordLogin = "La contraseña debe tener mas de 6 digitos";

        return errores;
      }}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        const { emailLogin, passwordLogin } = values;
        axios
          .post("http://localhost:8080/api/login", {
            emailLogin,
            passwordLogin,
          })
          .then((res) => {
            if (res.data && res.data.tipoUser === "normal") {
              navigate("/home-user-extern")
            }
          }).catch(() => {
            setUserError(true);
            closeLogin();
          });
      }}
    >
      {({ errors }) => (
        <Form className="Form">
          <button onClick={closeLogin} className="Form-close">
            <IoCloseCircleOutline className="icon-close" />
          </button>
          <h3>DeliveryXpress</h3>
          <div className="Flogin-img-user"></div>
          <label htmlFor="email" className="Form-label">
            Email
          </label>
          <Field
            type="email"
            id="emailLogin"
            name="emailLogin"
            className="Form-input"
          />
          <ErrorMessage
            name="emailLogin"
            component={() => (
              <span className="Form-error-input">{errors.emailLogin}</span>
            )}
          />
          <label htmlFor="passwordLogin" className="Form-label">
            Password
          </label>
          <Field
            type="password"
            id="passwordLogin"
            name="passwordLogin"
            className="Form-input"
          />
          <ErrorMessage
            name="passwordLogin"
            component={() => (
              <span className="Form-error-input">{errors.passwordLogin}</span>
            )}
          />
          <div className="Form-container-btn">
            <button className="Form-btn" type="submit">
              Sign in
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export { FormLogin };
