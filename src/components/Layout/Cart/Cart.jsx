import { useState } from "react"
import { useEffect } from "react";
import { useContext } from "react"
import { CartProvider } from "../../../context/CartContext"


// const Cart =(productos)=>{

//     const {cartList, removeItem, clearCart} = useContext(CartProvider);

//     const [total, setTotal] = useState(0);

//     useEffect(() => {
//         let newTotal = 0;
//         productos.map((producto) => {
//             newTotal += producto.price * producto.count;
//         });
//         setTotal(newTotal);

//     }, [cartList]);


//     return(
//         <>
        
//         <div>
//             cart
//         </div>
        
//         </>
//     )

// }