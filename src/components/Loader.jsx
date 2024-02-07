import { useRecoilValue } from "recoil";
import loadedState from "../recoil/loadedState";

function Loader() {
  const dataLoaded = useRecoilValue(loadedState);

  return (
    <div className={dataLoaded ? "out" : undefined} id="loader-container"></div>
  );
}

export default Loader;
