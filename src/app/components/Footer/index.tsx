import { ReactElement } from "react";
import "./styles.css"
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer():ReactElement{
    return(
        <footer className="footer">
            <a href="#"><FacebookIcon/></a>
            <a href="#"><InstagramIcon/></a>
            <a href="#"><WhatsAppIcon/></a>
        </footer>
    )
}
