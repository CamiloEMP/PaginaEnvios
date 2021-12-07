import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./Modal.css";

export const OpenMenuMobile = () => {
  return ReactDOM.createPortal(
    <div className="Modal-background">
      <ul className="container-menu-mobile">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/">Username</Link></li>
        <li><Link to="/">Log out</Link></li>
      </ul>
    </div>,
    document.getElementById("Modal_icon_mobile")
  );
};

