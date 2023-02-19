import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getFetch } from "../../utils/getFetch";


export const ItemListContainer = ({ saludo }) => {

    const [ productos, setProductos ] = useState([]);
    const [ loading, setLoading ] = useState(true);
  
    const { categoria } = useParams();
  
    useEffect(()=>{
      if (categoria) {
        getFetch()
          .then(res => {      
            setProductos(res.filter(producto => producto.categoria === categoria))
            // ACCION debe hacer una sola cosa
          })
          .catch(error => console.log(error))
          .finally(()=> setLoading(false))      
      } else {
        getFetch()
          .then(res => {      
            setProductos(res)
            // debe hacer una sola cosa
          })
          .catch(error => console.log(error))
          .finally(()=> setLoading(false))
        
      }
    }, [categoria])
  
   
  
    return (
      
           loading 
            ? 
              <h2>Cargando...</h2> 
            : 
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap'
            }} >
             { productos.map(producto =>   (
                  <div key={producto.id} className='card w-25 mt-2' >
                    <Link to={`/item/${producto.id}`}>
                      <div className='card-header'>
                        Nombre: {producto.name}
                      </div>
                      <div className='card-body'>
                        <img src={producto.foto} alt= {producto.name} className="w-100"/>
                        Categoria: {producto.categoria}<br/>
                        Precio: {producto.price}
                      </div>
                      <div className='card-footer'>
                         
                      </div>
                    </Link>
  
                  </div>
                )
              )}
  
              
            </div>
            
  
    )
}
  
