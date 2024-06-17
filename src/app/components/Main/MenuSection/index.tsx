import { ReactElement } from "react";
import MenuGrid from "./MenuGrid";
import "./styles.css"

export default function MenuSection():ReactElement{
    return(
        <section id="menu" className="menu-section">
            <h2>Nosso <span>Menu</span></h2>
            <MenuGrid/>
        </section>
    )
}
