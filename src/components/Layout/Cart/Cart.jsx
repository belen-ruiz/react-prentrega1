import { useState } from "react"
import { useEffect } from "react";
import { useContext } from "react"
import { CartProvider } from "../../../context/CartContext"

export const Cart =(productos)=>{

    const {itemsOnCart, removeItem, clearCart} = useContext(CartProvider);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        let newTotal = 0;
        productos.map((item) => {
            newTotal += item.price * item.count;
        });
        setTotal(newTotal);

    }, [itemsOnCart]);


    return(
        <>
        
        <div>
            cart
        </div>
        
        </>
    )

}