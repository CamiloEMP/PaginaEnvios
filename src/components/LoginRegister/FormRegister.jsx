import "./FormLog_Reg.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
const FormRegister = () => {
  const navigate = useNavigate();
  const { closeRegister, validationForm } = useContext(Context);
  return (
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPass: "",
        }}
        validate={(values) => {
          let errores = {};
          validationForm(values, errores);
          return errores;
        }}
        onSubmit={(values, {resetForm}) => {
          resetForm();
          navigate('/home-user-intern')
        }}
      >
        {({ errors }) => (
          <Form className="Form">
            <button onClick={closeRegister} className="Form-close">
              <IoCloseCircleOutline className="icon-close" />
            </button>
            <h3 className="FRegistro-title">DeliveryXpress</h3>
            <label htmlFor="name" className="Form-label">
              Nombre
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="Form-input"
            />
            <ErrorMessage
              name="name"
              component={() => (
                <span className="Form-error-input">{errors.name}</span>
              )}
            />
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
              Contraseña
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className={`Form-input`}
            />
            <ErrorMessage
              name="password"
              component={() => (
                <span className="Form-error-input">{errors.password}</span>
              )}
            />
            <label htmlFor="confirmPass" className="Form-label">
              Confirmar contraseña
            </label>
            <Field
              type="password"
              id="confirmPass"
              name="confirmPass"
              className={`Form-input`}
            />
            <ErrorMessage
              name="confirmPass"
              component={() => (
                <span className="Form-error-input">{errors.confirmPass}</span>
              )}
            />
            <div className="Form-container-btn">
              <button className="Form-btn" type="submit">
                Sign up
              </button>
            </div>
          </Form>
        )}
      </Formik>
  );
};

export { FormRegister };
