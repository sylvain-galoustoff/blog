/* eslint-disable react/prop-types */
import { IoMenu, IoClose } from "react-icons/io5";

function MenuButton({ menuIsOpen, setMenuIsOpen }) {
  return (
    <div id="menu-button" onClick={setMenuIsOpen}>
      <div className={menuIsOpen && "close"} id="menu-button-icons">
        <IoClose className={!menuIsOpen && "fade-out"} />
        <IoMenu className={menuIsOpen && "fade-out"} />
      </div>
    </div>
  );
}

export default MenuButton;
