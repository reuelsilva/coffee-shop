import Link from "next/link";
import { ReactElement } from "react";
import "./styles.css"

export default function NavigationBar():ReactElement{
    return(
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-list-item"><Link href={"/"}>Home</Link></li>
                <li className="navbar-list-item"><Link href={"#about"}>Sobre</Link></li>
                <li className="navbar-list-item"><Link href={"#menu"}>Menu</Link></li>
            </ul>
        </nav>
    )
}
