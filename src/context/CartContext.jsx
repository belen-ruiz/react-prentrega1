import { useState } from "react"
import { useContext } from "react"
import { createContext } from "react"
import { useParams } from "react-router-dom"
import { getFetch } from "../utils/getFetch"


const CartContext = createContext([])

export const useCartContext =()=> useContext(CartContext)


export const CartProvider = ({children})=>{

    const [ cartList, setCartList] = useState([1]);
    const { id } = useParams();
    
    const agregarCarrito = (newProducto) =>{
        
        if (id) {
            getFetch()
              .then(res => {      
                setCartList(res.find(producto => producto.id === id))
              })              
        };

        console.log(newProducto );


        setCartList([
            ...cartList, 
            newProducto
        ]);
        console.log(cartList );
    };


    // cantidad total
    // precio total 

    // eliminar item por id


    const clearCart = ()=> setCartList ([]);


    return(
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

