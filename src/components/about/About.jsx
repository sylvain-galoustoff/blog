import { useState, useEffect } from "react";
import { apiUrl } from "../../config";

function About() {
  const [data, setData] = useState();

  useEffect(() => {
    async function loadData() {
      const response = await fetch(apiUrl + "page/about");

      if (!response.ok) {
        console.error(
          "Erreur de requête vers la route " + apiUrl + "page/about"
        );
      } else {
        const about = await response.json();
        setData(about);
      }
    }

    loadData();
  }, []);

  return (
    <div className="page">
      <h1>ABOUT</h1>
    </div>
  );
}

export default About;
