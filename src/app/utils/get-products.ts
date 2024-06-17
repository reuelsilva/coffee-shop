import axios from "axios";

type ProductsType = {
    "image_path": string,
    "name": string,
    "new_price": string,
    "old_price": string
}

export default async function getProducts(){
    const data = await axios.get<{results: ProductsType[]}>("http://localhost:3001/products")
    .then( res => res.data.results)

    return data
}
