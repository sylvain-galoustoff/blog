import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import MenuButton from "./MenuButton";

function App() {
  return (
    <div id="app">
      <AnimatePresence mode="wait">
        <MenuButton />
        <Menu />
        <Outlet />
      </AnimatePresence>
    </div>
  );
}

export default App;
