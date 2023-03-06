import { useState } from "react";
import { useContext, useEffect } from "react";
import { createContext } from "react";
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const agregarCarrito = (newProducto) => {
        const id = cartList.findIndex(
            (producto) => producto.id === newProducto.id
        );
        if (id !== -1) {
            cartList[id].cantidad += newProducto.cantidad;
            setCartList([...cartList]);
            return;
        }

        setCartList([...cartList, newProducto]);
    };

    // cantidad total

    const cantidadTotal = () =>
        cartList.reduce((count, producto) => (count += producto.cantidad), 0);

    // precio total

    const precioTotal = () =>
        cartList.reduce(
            (count, producto) => (count += producto.cantidad * producto.price),
            0
        );

    // eliminar item por id

    const eliminarProducto = (e, id) => {
        e.stopPropagation();
        setCartList(cartList.filter((producto) => producto.id != id));
        console.log(cartList);
    };

    //vaciar carrito
    const clearCart = () => setCartList([]);

    return (
        <CartContext.Provider
            value={{
                cartList,
                agregarCarrito,
                clearCart,
                cantidadTotal,
                precioTotal,
                eliminarProducto,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
