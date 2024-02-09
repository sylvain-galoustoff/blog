import { useEffect, useState } from "react";
import { apiUrl } from "../../config";
import DemoCard from "./DemoCard";
import DemoCardPlaceholder from "./DemoCardPlaceholder";

function Demos() {
  const [data, setData] = useState([]);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 1000);
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
      <h1>Démos</h1>
      {pageLoaded && data ? demoList : <DemoCardPlaceholder />}
    </div>
  );
}

export default Demos;
