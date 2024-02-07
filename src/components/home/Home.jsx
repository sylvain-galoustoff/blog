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

  return (
    <div className="page" id="home">
      <div id="title-wrapper">
        <h1>Sylvain Galoustoff</h1>
        <div id="site-title">
          <div id="ui">UI</div>
          <div id="definitions">
            <p>Developper</p>
            <p>Designer</p>
            <p>Lover</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
