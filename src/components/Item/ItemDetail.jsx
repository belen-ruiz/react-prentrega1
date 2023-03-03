

import { useState } from "react";
import { useParams, NavLink, BrowserRouter, Route, Routes } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { Loader } from "../common/Loader";
import { Cart } from "../Cart/Cart";
import { ItemCount } from "./ItemCount";
import { ItemListContainer } from "./ItemListContainer";



export const ItemDetail = ({ producto }) => {

  const [isCount, setIsCount] = useState(true)
  const { agregarCarrito } = useCartContext()


  const onAdd = (cant)=>{
    agregarCarrito( { ...producto, cantidad: cant } )

  }  
 

  return (

          <div className="product">
                <div className='productCardDetail' >

                    <div className='productCard-header'>
                      {producto.name}
                    </div>

                    <div className='productCard-body'>
                      <img src={producto.foto} alt='foto' className="imagenDetail"/>

                      <div className='productCard-description'>
                        <div className='productCard-text'>
                          <p>Categoria: {producto.categoria}</p>
                          <p>Descripcion: {producto.description}</p>
                          <p>Precio: <span> ${producto.price} </span> </p>
                        </div> 

                        <div className='addToCart'>
                          <ItemCount onAdd={ onAdd }  initial={1} stock={producto.stock}  />
                        </div>
                      </div>
                    </div>
                    
                    <div className="btnEliminar"> 
                      <NavLink to="/cart" className="buttonGreenOutline" >Terminar mi compra</NavLink>
                    </div>  
                </div>    

          </div>
          

  )
}