import { useContext } from "react";
import { Context } from "../../context/Context";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./FormLog_Reg.css";

const FormLogin = () => {
  const { closeLogin, validationForm } = useContext(Context);
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={(values) => {
        let errores = {};
        validationForm(values, errores);
        return errores;
      }}
      onSubmit={(values, {resetForm}) => {
        resetForm();
        console.log(values);
        console.log("formulario enviado");
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
            id="email"
            name="email"
            className="Form-input"
          />
          <ErrorMessage
              name="email"
              component={() => (
                <span className="Form-error-input">{errors.email}</span>
              )}
            />
          <label htmlFor="password" className="Form-label">
            Password
          </label>
          <Field
            type="password"
            id="password"
            name="password"
            className="Form-input"
          />
          <ErrorMessage
              name="password"
              component={() => (
                <span className="Form-error-input">{errors.password}</span>
              )}
            />
          <div className="Form-container-btn">
            <button className="Form-btn">Sign in</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export { FormLogin };
