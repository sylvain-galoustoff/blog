/* eslint-disable react/prop-types */
import { IoMenu, IoClose } from "react-icons/io5";

function MenuButton({ menuIsOpen, setMenuIsOpen }) {
  return (
    <div id="menu-button" onClick={setMenuIsOpen}>
      <div className={menuIsOpen ? "close" : undefined} id="menu-button-icons">
        <IoClose className={!menuIsOpen ? "fade-out" : undefined} />
        <IoMenu className={menuIsOpen ? "fade-out" : undefined} />
      </div>
    </div>
  );
}

export default MenuButton;
