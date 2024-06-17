"use client"
import { ReactElement } from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import MenuSection from "./MenuSection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Main():ReactElement{
    const client = new QueryClient()
    return(
        <main>
            <HeroSection/>
            <AboutSection/>
            <QueryClientProvider client={client}>
                <MenuSection/>
            </QueryClientProvider>
        </main>
    )
}
