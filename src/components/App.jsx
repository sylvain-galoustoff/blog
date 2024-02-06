import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import { useState } from "react";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div id="app">
      <AnimatePresence mode="wait">
        <MenuButton
          menuIsOpen={menuIsOpen}
          setMenuIsOpen={() => setMenuIsOpen(!menuIsOpen)}
        />
        <Menu menuIsOpen={menuIsOpen} />
        <Outlet />
      </AnimatePresence>
    </div>
  );
}

export default App;
