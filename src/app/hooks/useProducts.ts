import { useQuery } from "@tanstack/react-query";
import getProducts from "../utils/get-products";

export default function useProducts(){
    const query = useQuery({
        queryFn: getProducts,
        queryKey: ["products"]
    })

    return{
        ...query,
        data: query.data
    }
}
