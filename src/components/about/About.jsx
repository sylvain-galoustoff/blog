import { useState, useEffect } from "react";
import Loader from "../Loader";
import { getAboutPage } from "../../services/wpRestApi";

function About() {
  const [data, setData] = useState();
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const about = await getAboutPage();
      setData(about);
    };
    fetchData();
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

        <div id="article-content" dangerouslySetInnerHTML={{ __html: data.content }} />
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
