
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useParams, NavLink, BrowserRouter, Route, Routes } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { getFetch } from "../../utils/getFetch";
import { Loader } from "../common/Loader";
import { Cart } from "../Layout/Cart/Cart";
import { ItemCount } from "./ItemCount";
import { ItemListContainer } from "./ItemListContainer";


export const ItemDetail = ({ producto }) => {

  const [isCount, setIsCount] = useState(true)
  const { agregarCarrito } = useCartContext()


  const onAdd = (cant)=>{
    agregarCarrito( { ...producto, cantidad: cant } )
    
  }  

  return (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap'
          }} >
           
                <div className='card w-25 mt-2' >
                  
                    <div className='card-header'>
                      Nombreee: {producto.name}
                    </div>
                    <div className='card-body'>
                      <img src={producto.foto} alt='foto' className="w-100"/>
                      Categoria: {producto.categoria}<br/>
                      Mas Info: {producto.info}<br/>
                      Precio: {producto.price}
                    </div>
                    <div className='card-footer addToCart'>
                      <ItemCount onAdd={ onAdd }  initial={1} stock={producto.stock}  />
                      <NavLink to="/cart" className="nav-link" >VER CARRITO</NavLink>
                    </div>  
                </div>    

          </div>
          

  )
}