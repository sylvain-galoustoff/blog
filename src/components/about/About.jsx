import { useState, useEffect } from "react";
import { apiUrl } from "../../config";
import Loader from "../Loader";

function About() {
  const [data, setData] = useState();
  const [pageLoaded, setPageLoaded] = useState(false);

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

  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 4500);
  });

  const Article = () => {
    return (
      <div id="article">
        <h1>{data.title}</h1>

        <div
          id="article-content"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    );
  };

  return (
    <div className="page" id="about">
      {pageLoaded && data ? <Article /> : <Loader />}
    </div>
  );
}

export default About;
