
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { getFetch } from "../../utils/getFetch";
import { Loader } from "../common/Loader";
import { ItemCount } from "./ItemCount";


export const ItemDetail = ({ producto }) => {

  const [isCount, setIsCount] = useState(true);
  // const [ producto, setProducto ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const { agregarCarrito } = useCartContext()


  const onAdd = (cant)=>{
    console.log( "este es el onadd + count:" + cant );
    agregarCarrito( { ...producto, cantidad: cant } )
    console.log("este es el agregarcarr + prod:" + producto)
    setIsCount(false)
}  

  return (
          loading 
          ? 
          <Loader /> 
          : 

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap'
          }} >
           
                <div key={producto.id} className='card w-25 mt-2' >
                  <Link to={`/item/${producto.id}`}>
                    <div className='card-header'>
                      Nombre: {producto.name}
                    </div>
                    <div className='card-body'>
                      <img src={producto.foto} alt='foto' className="w-100"/>
                      Categoria: {producto.categoria}<br/>
                      Mas Info: {producto.info}<br/>
                      Precio: {producto.price}
                    </div>
                    <div className='card-footer addToCart'>
                      <ItemCount onAdd={ onAdd }  initial={1} stock={producto.stock}  />
                      <button>eliminar</button>
                      <button>comprar</button>
                    </div>
                  </Link>

                </div>            
          </div>
          

  )
}