/* eslint-disable react/prop-types */
import { IoLogoReact, IoLogoLaravel, IoLogoFirebase, IoLogoWordpress, IoAdd, IoDesktopOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function DemoCard(props) {

    const logos = {
        "Firebase": <IoLogoFirebase key={"firebase-" + props.data.id} />,
        "React" : <IoLogoReact key={"react-" + props.data.id} />,
        "Laravel" : <IoLogoLaravel key={"laravel-" + props.data.id} />,
        "WordPress" : <IoLogoWordpress key={"wordpress-" + props.data.id} />,
    }

    const techIcons = Object.keys( props.data.tags )
        .map( key => logos[props.data.tags[key]] )

    return (

        <motion.div 
            className="card demo-card"
            key={props.data.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y:0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: .5, delay: Number(props.delay) / 10 }}
        >

            <div className="card-aside">

                { techIcons }

            </div>

            <div className="card-content">

                <h2 className="card-header">{ props.data.title }</h2>

                <p className="card-body">
                    { props.data.excerpt }                    
                </p>

                <div className="card-footer">

                    <Link to={"/demos/" + props.data.slug} className="button icon-before">
                        <IoAdd /> Détails
                    </Link>
                    <a href={props.data.demo_link} className="button icon-before" rel='noreferrer' target='_blank'>
                        <IoDesktopOutline /> Voir la démo
                    </a>

                </div>

            </div>

        </motion.div>

    );
}

export default DemoCard