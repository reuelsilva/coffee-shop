import { ReactElement } from "react";
import CartIcon from "./CartIcon";
import "./styles.css"

export default function CartComponent():ReactElement{
    return(
        <button className="cart-button">
            <CartIcon/>
        </button>
    )
}
