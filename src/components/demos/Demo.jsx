import { useEffect, useState } from "react";
import {
  IoLogoReact,
  IoLogoLaravel,
  IoLogoFirebase,
  IoLogoWordpress,
} from "react-icons/io5";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { apiUrl } from "../../config";
import Lightbox from "../Lightbox";
import Loader from "../Loader";

function Demo() {
  const params = useParams();
  const [data, setData] = useState();

  const logos = {
    Firebase: <IoLogoFirebase key={"firebase"} />,
    React: <IoLogoReact key={"react"} />,
    Laravel: <IoLogoLaravel key={"laravel"} />,
    WordPress: <IoLogoWordpress key={"wordpress"} />,
  };

  useEffect(() => {
    async function loadData() {
      const response = await fetch(apiUrl + "demos/" + params.slug);

      if (!response.ok) {
        console.error("Erreur de requête vers la route " + apiUrl + "demos");
      } else {
        const result = await response.json();
        setData(result);
      }
    }

    loadData();
  }, [params]);

  let techIcons;
  if (data) {
    techIcons = Object.keys(data.tags).map((key) => logos[data.tags[key]]);
  }

  if (data) {
    return <h1>Single demo data loaded</h1>;
  } else {
    return <Loader />;
  }
}

export default Demo;
