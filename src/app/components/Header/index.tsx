import { ReactElement } from "react";
import LogoComponent from "./LogoComponent";
import NavigationBar from "./NavigationBar";
import CartComponent from "./CartComponent";
import "./styles.css"

export default function Header():ReactElement{
    return(
        <header className="header">
            <LogoComponent/>
            <NavigationBar/>
            <CartComponent/>
        </header>
    )
}
