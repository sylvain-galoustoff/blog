import { useEffect, useState } from "react";
import { IoLogoReact, IoLogoLaravel, IoLogoFirebase, IoLogoWordpress } from 'react-icons/io5'
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { apiUrl } from "../../config";
import Lightbox from "../Lightbox";
import Loader from "../Loader";

function Demo() {

    const params = useParams()
    const [data, setData] = useState()
    const [lightbox, setLightbox] = useState(null)

    const logos = {
        "Firebase": <IoLogoFirebase key={"firebase"} />,
        "React" : <IoLogoReact key={"react"} />,
        "Laravel" : <IoLogoLaravel key={"laravel"} />,
        "WordPress" : <IoLogoWordpress key={"wordpress"} />,
    }
    
    useEffect( () => {

        async function loadData() {

            const response = await fetch( apiUrl + 'demos/' + params.slug )

            if ( !response.ok ) {
                console.error('Erreur de requête vers la route ' + apiUrl + 'demos' );
            } else {
                const result = await response.json()
                setData( result )
            }
            
        }
        
        loadData()
        
    }, [params] )

    useEffect( () => {

        const images = document.querySelectorAll('.wp-block-image img')
        images.forEach( el => {

            el.addEventListener('click', function() {

                const src = this.getAttribute('src')
                setLightbox( src );

            })

        } )

    } )

    let techIcons
    if ( data ) {
        techIcons = Object.keys( data.tags )
            .map( key => logos[data.tags[key]] )
    }

    const closeLightbox = () => {
        setLightbox(null)
    }

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
    
                <div id="single-aside">
                    { techIcons }
                </div>
    
                <div className="card-content">
    
                    <h1 className="card-header">{ data.title }</h1>
    
                    <div className="card-body" dangerouslySetInnerHTML={{ __html: data.content }} />
    
                </div>
    
                { lightbox && <Lightbox src={lightbox} closeLightbox={closeLightbox} /> }
    
            </motion.div>
        );

    } else {
        return <Loader />
    }

}

export default Demo