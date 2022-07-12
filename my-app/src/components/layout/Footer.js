import { FaFacebook, FaInstagram, FaWhatsapp,  } from "react-icons/fa";
import styles from './Footer.css'

function Footer(){
    return(
        <div className="footer">
            <FaFacebook className="icon"/>
            <FaInstagram className="icon"/>
            <FaWhatsapp className="icon"/>
        </div>
    )
}

export default Footer