import { useEffect, useState } from "react";
import { apiUrl } from "../../config";
import DemoCard from "./DemoCard";

function Demos() {
  const [data, setData] = useState([]);

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

  return <h1>DEMOS</h1>;
}

export default Demos;
