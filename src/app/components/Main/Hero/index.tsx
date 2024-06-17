import { ReactElement } from "react";
import ButtonPrimary from "../ButtonPrimary";
import "./styles.css"

export default function Hero():ReactElement{
    return(
        <section className="hero-section">
            <div className="hero-content">
                <h1>Code com o melhor café da região</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est mollitia tempore incidunt voluptas sunt quam, blanditiis quo modi laudantium alias ab, itaque nam autem consequatur aspernatur a rem dolorum quis.</p>
                <ButtonPrimary>Pegue o seu AGORA</ButtonPrimary>
            </div>
        </section>
    )
}