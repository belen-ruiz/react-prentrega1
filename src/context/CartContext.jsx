import { useState } from "react"
import { useContext, useEffect } from "react"
import { createContext } from "react"
import { useParams } from "react-router-dom"
import { getFetch } from "../utils/getFetch"


const CartContext = createContext([])

export const useCartContext =()=> useContext(CartContext)


export const CartProvider = ({children})=>{


    const [ cartList, setCartList] = useState([]);
    // const { id } = useParams();
    
    // const agregarCarrito = ( newProducto ) =>{

    //     //newproducto es el PROD, CANT
    //     if (id) {
    //         getFetch()
    //           .then(res => {      
    //             setCartList(res.find(producto => producto.id === id))
    //           })              
    //     };
        
    //     setCartList([
    //         ...cartList, 
    //         newProducto
    //     ]);
        
    // };

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

    // cantidad total

    const cantidadTotal = () => cartList.reduce( (count, producto) => count += producto.cantidad, 0)

    console.log(cantidadTotal)

    // precio total 

    const precioTotal = () => cartList.reduce( (count, producto) => count += (producto.cantidad*producto.price), 0)

    console.log(precioTotal)

    // eliminar item por id

    const eliminarProducto = (id) => setCartList(cartList.filter(prod => prod.id !== id))


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

