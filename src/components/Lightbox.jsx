/* eslint-disable react/prop-types */
import { IoClose } from 'react-icons/io5'

function Lightbox(props) {

    const closeLightbox = () => {
        props.closeLightbox()
    }

    return (
        <div id="lightbox" onClick={closeLightbox}>

            <IoClose />

            <img src={props.src} style={{ maxWidth: '100%' }} />

        </div>
    );
}

export default Lightbox