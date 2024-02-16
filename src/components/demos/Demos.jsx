import { useEffect, useState } from "react";
import { apiUrl } from "../../config";
import DemoCard from "./DemoCard";
import Loader from "../Loader";

function Demos() {
  const [data, setData] = useState([]);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 4500);
  });

  useEffect(() => {
    async function loadData() {
      const response = await fetch(apiUrl + "demos");

      if (!response.ok) {
        console.error("Erreur de requête vers la route " + apiUrl + "demos");
      } else {
        const result = await response.json();
        setData(result);
      }
    }

    loadData();
  });

  const demoList = Object.keys(data).map((key) => (
    <DemoCard key={key} data={data[key]} delay={key} />
  ));

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
