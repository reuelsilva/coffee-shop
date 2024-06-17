import { ReactElement } from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";

export default function Main():ReactElement{
    return(
        <main>
            <HeroSection/>
            <AboutSection/>
        </main>
    )
}
