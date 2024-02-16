import { useEffect, useState } from "react";
import {
  IoLogoReact,
  IoLogoLaravel,
  IoLogoFirebase,
  IoLogoWordpress,
  IoLogoFigma,
} from "react-icons/io5";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../config";
import Loader from "../Loader";

function Demo() {
  const { slug } = useParams();
  const [data, setData] = useState();
  const [pageLoaded, setPageLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);

  const logos = {
    Firebase: <IoLogoFirebase key={"firebase"} />,
    React: <IoLogoReact key={"react"} />,
    Laravel: <IoLogoLaravel key={"laravel"} />,
    WordPress: <IoLogoWordpress key={"wordpress"} />,
  };

  const stack = {
    Firebase: <span key={"stack-firebase-" + slug}>Back-end</span>,
    React: <span key={"stack-react-" + slug}>Front-end</span>,
    Laravel: <span key={"stack-laravel-" + slug}>Back-end</span>,
    WordPress: <span key={"stack-wordpress-" + slug}>Back-end</span>,
  };

  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 4500);
  });

  useEffect(() => {
    import(`../../assets/${slug}.png`).then((image) => {
      setImgSrc(image.default);
    });
  }, [slug]);

  useEffect(() => {
    async function loadData() {
      const response = await fetch(apiUrl + "demos/" + slug);

      if (!response.ok) {
        console.error("Erreur de requête vers la route " + apiUrl + "demos");
      } else {
        const result = await response.json();
        setData(result);
      }
    }

    loadData();
  }, [slug]);

  let techIcons;
  if (data) {
    techIcons = Object.keys(data.tags).map((key) => (
      <p key={key} className="techno">
        {logos[data.tags[key]]}
        {stack[data.tags[key]]}
      </p>
    ));
  }

  const Article = () => {
    return (
      <div id="article">
        <h1>{data.title}</h1>

        <div className="demo-card-thumbnail">
          <img src={imgSrc} alt={`screenshot de la démo ${data.title}`} />
          <div className="demo-card-technos">
            <p className="techno">
              <IoLogoFigma />
              <span>Design</span>
            </p>
            {techIcons}
          </div>
        </div>

        <div
          id="article-content"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    );
  };

  return (
    <div className="page" id="demo">
      {pageLoaded && data ? <Article /> : <Loader />}
    </div>
  );
}

export default Demo;
