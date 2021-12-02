import ReactDOM from "react-dom";
import "./Modal.css"
const Login = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="Modal-background">
      {children}
    </div>,
    document.getElementById('Modal_login')
  )
};
export { Login };
