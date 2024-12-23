import {z} from "zod";

const cartSchema = z.array(z.object({
    id:z.number(),
    quantity: z.number().int().positive()
}))

export default function getCart(){
    const cart: unknown = JSON.parse(localStorage.get("cart") || "[]");

    const validateCart = cartSchema.safeParse(cart);

    if(!validateCart.success){
        localStorage.removeItem("get")
        return;
    }

    return validateCart.data;
}