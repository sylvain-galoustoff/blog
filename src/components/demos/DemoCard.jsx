/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  IoLogoReact,
  IoLogoLaravel,
  IoLogoFirebase,
  IoLogoWordpress,
  IoLogoFigma,
  IoAddCircle,
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
    <div
      className="demo-card no-fake"
      style={{ animationDelay: `${delay / 10}s` }}
    >
      <h2 className="demo-card-title">
        <Link to={`/demos/${data.slug}`}>{data.title}</Link>
      </h2>
      <a className="demo-card-thumbnail" href={data.demo_link} target="_blanck">
        <div className="demo-card-voir-demo">
          <IoDesktopOutline />
          <p>Voir la démo</p>
        </div>

        <img src={imgSrc} alt={`screenshot de la démo de ${data.title}`} />
        <div className="demo-card-technos">
          <p className="techno">
            <IoLogoFigma />
            <span>Design</span>
          </p>
          {techIcons}
        </div>
      </a>
    </div>
  );
}

export default DemoCard;
