/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  IoLogoReact,
  IoLogoLaravel,
  IoLogoFirebase,
  IoLogoWordpress,
  IoLogoFigma,
  IoDesktopOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

function DemoCard({ data, delay }) {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    import(`../../assets/${data.slug}.png`).then((image) => {
      setImgSrc(image.default);
    });
  }, [data.slug]);

  const logos = {
    Firebase: <IoLogoFirebase key={"firebase-" + data.id} />,
    React: <IoLogoReact key={"react-" + data.id} />,
    Laravel: <IoLogoLaravel key={"laravel-" + data.id} />,
    WordPress: <IoLogoWordpress key={"wordpress-" + data.id} />,
  };

  const stack = {
    Firebase: <span key={"stack-firebase-" + data.id}>Back-end</span>,
    React: <span key={"stack-react-" + data.id}>Front-end</span>,
    Laravel: <span key={"stack-laravel-" + data.id}>Back-end</span>,
    WordPress: <span key={"stack-wordpress-" + data.id}>Back-end</span>,
  };

  const techIcons = Object.keys(data.tags).map((key) => (
    <p key={key} className="techno">
      {logos[data.tags[key]]}
      {stack[data.tags[key]]}
    </p>
  ));

  return (
    <Link
      to={`/demos/${data.slug}`}
      className="demo-card"
      style={{ animationDelay: `${delay / 10}s` }}
    >
      <h2 className="demo-card-title">{data.title}</h2>
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
    </Link>
  );
}

export default DemoCard;
