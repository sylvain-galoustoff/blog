import { useEffect, useState } from "react";
import DemoCard from "./DemoCard";
import Loader from "../Loader";
import { getAllDemos } from "../../services/wpRestApi";

function Demos() {
  const [data, setData] = useState([]);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 4500);
  });

  useEffect(() => {
    const fetchData = async () => {
      const demos = await getAllDemos();
      setData(demos);
    };
    fetchData();
  }, []);

  const demoList = Object.keys(data).map((key) => <DemoCard key={key} data={data[key]} delay={key} />);

  return (
    <div className="page" id="demos">
      <div className="page-tiltle-wrapper">
        <h1>Démos</h1>
        {!pageLoaded && !data && <p className="chargement">Chargement...</p>}
      </div>
      {pageLoaded && data ? demoList : <Loader />}
    </div>
  );
}

export default Demos;
