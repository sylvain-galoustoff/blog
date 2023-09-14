import { useState, useEffect } from "react";
import { apiUrl } from "../../config";
import { motion } from "framer-motion";
import Loader from "../Loader";

function About() {

    const [data, setData] = useState()

    useEffect( () => {

        async function loadData() {

            const response = await fetch(apiUrl + 'page/about')

            if ( !response.ok ) {
                console.error('Erreur de requête vers la route ' + apiUrl + 'page/about');
            } else {
                const about = await response.json()
                setData( about )
            }

        }

        loadData()

    }, [] )

    if ( data ) {

        return (
            <motion.div 
                className="page" 
                id="wp-content"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: "tween", duration: .5 }}
            >
                { data && <div id="about-content" dangerouslySetInnerHTML={{ __html: data.content }} /> }
            </motion.div>
        );
        
    } else {
        return <Loader />
    }

}

export default About