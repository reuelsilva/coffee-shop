"use client"
import { ReactElement } from "react";
import useProducts from "@/app/hooks/useProducts";
import Image from "next/image";
import ButtonPrimary from "../../ButtonPrimary";
import "./styles.css"

export default function MenuGrid():ReactElement{
    const {data, isSuccess} = useProducts()
    return(
        <div className="menu-container">            
            {
                isSuccess && (
                    data?.map((product, key) => {
                        return(
                            <div key={key} className="menu-item">
                                <Image src={product.image_path} alt="" width={100} height={100}/>
                                <h4>{product.name}</h4>
                                <p>$15,99 <span>24,99</span></p>
                                <ButtonPrimary>Add to Cart</ButtonPrimary>
                            </div>
                        )
                    })
                )
            }
                
            </div>
    )
}
