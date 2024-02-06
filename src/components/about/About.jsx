import { useState, useEffect } from "react";
import { apiUrl } from "../../config";
import { motion } from "framer-motion";
import Loader from "../Loader";

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

  if (data) {
    return <h1>About</h1>;
  } else {
    return <Loader />;
  }
}

export default About;
