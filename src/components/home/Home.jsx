import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { apiUrl } from '../../config'
import Loader from '../Loader';

function Home() {

    const [data, setData] = useState()

    useEffect( () => {

        async function loadData() {

            const response = await fetch(apiUrl + 'page/accueil')

            if ( !response.ok ) {
                console.error('Erreur de requête vers la route ' + apiUrl + 'page/accueil');
            } else {
                const home = await response.json()
                setData( home )
            }

        }

        loadData()

    }, [] )

    if ( data ) {

        return (
            <motion.div 
                className="page"
                key="home"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: "tween", duration: .5 }}
            >
               
                <div id="home-content" dangerouslySetInnerHTML={{ __html: data.content }} />
               
            </motion.div>
        );

    } else {
        return (
            <Loader />
        ) 
    }

}

export default Home