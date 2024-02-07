import { useSetRecoilState } from "recoil";
import loadedState from "../../recoil/loadedState";
import { useEffect } from "react";

function Home() {
  const setDataLoaded = useSetRecoilState(loadedState);

  useEffect(() => {
    setTimeout(() => {
      setDataLoaded(true);
    }, 2000);
  });

  return <div className="page" id="home"></div>;
}

export default Home;
