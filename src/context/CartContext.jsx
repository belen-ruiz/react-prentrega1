import { useState } from "react"
import { useContext, useEffect } from "react"
import { createContext } from "react"

const CartContext = createContext([])


export const useCartContext =()=> useContext(CartContext)

export const CartProvider = ({children})=>{


    const [ cartList, setCartList] = useState([]);

    const agregarCarrito = (newProducto) =>{
        const id = cartList.findIndex(producto => producto.id === newProducto.id)
        if(id!==-1){
            cartList[id].cantidad += newProducto.cantidad
            setCartList([...cartList])
            return 
        }

        setCartList( [
            ...cartList,
            newProducto
        ] )

    }


    // console.log(cartList);
    useEffect(() => {

        console.log(cartList);
        
    }, [cartList]);

    //is in cart

    // cantidad total

    const cantidadTotal = () => cartList.reduce( (count, producto) => count += producto.cantidad, 0)

    // precio total 

    const precioTotal = () => cartList.reduce( (count, producto) => count += (producto.cantidad*producto.price), 0)


    // eliminar item por id

    // const eliminarProducto = ()=>(console.log("eliminar"))
    const eliminarProducto = (e, id) => {
        e.stopPropagation()
        setCartList(cartList.filter(producto => producto.id != id))
        console.log(cartList)
    }


    const clearCart = ()=> setCartList ([]);


    return(
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            clearCart,
            cantidadTotal,
            precioTotal,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}

