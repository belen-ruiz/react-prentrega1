import { useState } from "react";
import { Cart } from "./Cart";
import {CartWidget} from "./CartWidget"
import {useCartContext} from "../../../context/CartContext"


export const CartContainer = () =>{

    const { cartList } = useCartContext() 
 
    return (

        <>
            { <CartWidget />}
        </>
    )
}


// export const Loader =(loading)=>{
//     return(
//         <>
//           {loading && <h1>loading...........</h1>}
//         </>
        
//     )

// }