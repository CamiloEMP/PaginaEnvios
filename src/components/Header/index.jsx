import "./Header.css";
import logo from "../../img/Logo.png";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { OpenMenuMobile } from "../../Modals/OpenMenuMobile";
import { Context } from "../../context/Context";
import { useContext } from "react";

export const Header = () => {
  const { openMenu, onOpenMenu } = useContext(Context);
  const userLS = window.localStorage.getItem("loggedUser");
  const user = JSON.parse(userLS)
  return (
    <header className="header-UIP">
      <img src={logo} alt="Logo" />
      <div className="IoMenu-container">
        <IoMenu className="IoMenu" onClick={onOpenMenu} />
        {!!openMenu && <OpenMenuMobile />}
      </div>
      <div className="UserMenu-UIP">
        <Link
          to={
            user.tipoUser === "trabajador"
              ? "/home-user-intern"
              : "/home-user-extern"
          }
          className="path-UIP"
        >
          Home
        </Link>
        <Link className="path-UIP" to={`/`} onClick={() => window.localStorage.clear()}>Log out</Link>
      </div>
    </header>
  );
};
