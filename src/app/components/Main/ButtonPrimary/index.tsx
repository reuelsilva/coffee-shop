import { ReactElement } from "react";
import "./styles.css"

interface ButtonPrimaryProps{
    children: string
}

export default function ButtonPrimary({children}: ButtonPrimaryProps):ReactElement{
    return(
        <a href="#" className="button-primary">{children}</a>
    )
}
