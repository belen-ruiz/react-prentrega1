import { useState } from "react";
import { Cart } from "./Cart";
import {CartWidget} from "./CartWidget"


export const CartContainer = () =>{
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