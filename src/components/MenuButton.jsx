import { IoMenu, IoClose } from "react-icons/io5";

function MenuButton() {
  return (
    <div id="menu-button">
      <div className="close" id="menu-button-icons">
        <IoMenu />
        <IoClose />
      </div>
    </div>
  );
}

export default MenuButton;
