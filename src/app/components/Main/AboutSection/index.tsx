import { ReactElement } from "react";
import Image from "next/image";
import ButtonPrimary from "../ButtonPrimary";
import "./styles.css"

export default function AboutSection():ReactElement{
    return(
        <section id="about" className="about-section">
            <h2><span>SOBRE</span> NÓS</h2>
            <div className="about-container">
                <div className="about-ilustration">
                    <Image src={"https://i.ibb.co/GRpcL8v/about-img.jpg"} alt="Imagem ilustrativa" width={500} height={500}/>
                </div>
                <div className="about-content">
                    <h3>O Que Faz Nosso Café Especial</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim omnis voluptatibus commodi. Velit sint magni neque vel, nobis suscipit. Illum minima laborum minus voluptatem beatae? Nulla vero harum aperiam.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas unde beatae impedit eum laboriosam, asperiores mollitia ratione incidunt et quo cupiditate debitis laudantium consectetur aperiam numquam itaque magni dolores natus.</p>
                    <ButtonPrimary>Saiba Mais</ButtonPrimary>
                </div>
            </div>
        </section>
    )
}
