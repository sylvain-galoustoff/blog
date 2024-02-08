import { useLocation, useOutlet } from "react-router-dom";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedOutlet = () => {
  const o = useOutlet();
  const [outlet] = useState(o);

  return <>{outlet}</>;
};

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <div id="app">
      <MenuButton
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={() => setMenuIsOpen(!menuIsOpen)}
      />
      <Menu menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
      <div id="viewport">
        <AnimatePresence>
          <motion.div
            key={location.key}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className={`route-animation-wrapper ${
              location.pathname.split("/")[1]
            }`}
          >
            <AnimatedOutlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
