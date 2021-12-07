import "./Header.css"
import logo from "../../img/Logo.png";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { OpenMenuMobile } from "../../Modals/OpenMenuMobile";
import { Context } from "../../context/ModalContext";
import { useContext } from "react";

export const Header = () => {
  const {openMenu, onOpenMenu} = useContext(Context)  
  return (
      <header className="header-UIP">
        <img src={logo} alt="" />
        <div className="IoMenu-container">
          <IoMenu className="IoMenu" onClick={onOpenMenu}/>
          {!!openMenu && (
            <OpenMenuMobile />
          )}
        </div>
        <div className="UserMenu-UIP">
          <Link to="/" className="path-UIP">
            Home
          </Link>
          <Link to="/" className="path-UIP">
            Username
          </Link>
          <button>Log Out</button>
        </div>
      </header>
  )
}
