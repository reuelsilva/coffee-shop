import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

export default function LogoComponent():ReactElement{
    return(
        <Link href={"/"}>
            <Image src={"https://i.ibb.co/yp84LgK/logo.png"} alt="Logo Coffee Shop" width={95} height={78}/>
        </Link>
    )
}
