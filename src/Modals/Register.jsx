import ReactDOM from "react-dom";
import "./Modal.css"
const Register = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="Modal-background">
      {children}
    </div>,
    document.getElementById('Modal_register')
  )
};
export { Register };
