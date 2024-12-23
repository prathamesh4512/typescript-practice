import { useEffect, useState } from "react"
import {z} from "zod";

// type Product = {
//     name : string;
//     price : number
// }

const productSchema = z.array(z.object({
    name : z.string(),
    price : z.number().positive()
}))

type Product = z.infer<typeof productSchema.element>


export default function Product(){

    const [products,setProducts] = useState<Product[]>([])

    const cart : {data:number} = JSON.parse(localStorage.get("abc"));
    cart.data

    useEffect(()=>{
        fetch("/api/products")
        .then(res=>res.json())
        .then((product : unknown) => {

            const validateProduct = productSchema.safeParse(product)

            if(!validateProduct.success){
                console.error(validateProduct.error)
                return;
            }

            // use the validatedProduct
            console.log(validateProduct.data) 
            setProducts(validateProduct.data); 
        })
    })
}