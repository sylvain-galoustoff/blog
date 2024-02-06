/* eslint-disable react/prop-types */
import {
  IoLogoReact,
  IoLogoLaravel,
  IoLogoFirebase,
  IoLogoWordpress,
} from "react-icons/io5";

function DemoCard(props) {
  const logos = {
    Firebase: <IoLogoFirebase key={"firebase-" + props.data.id} />,
    React: <IoLogoReact key={"react-" + props.data.id} />,
    Laravel: <IoLogoLaravel key={"laravel-" + props.data.id} />,
    WordPress: <IoLogoWordpress key={"wordpress-" + props.data.id} />,
  };

  const techIcons = Object.keys(props.data.tags).map(
    (key) => logos[props.data.tags[key]]
  );

  return <h2>Demo card</h2>;
}

export default DemoCard;
