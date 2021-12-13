import ReactDOM from "react-dom";
import "./Modal.css";
export const Register = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="Modal-background">
        {children}
    </div>,
    document.getElementById("Modal_register")
  );
};
