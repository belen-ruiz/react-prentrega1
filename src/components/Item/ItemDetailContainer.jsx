
import "bootstrap/dist/css/bootstrap.min.css";
import { Loader } from "../common/Loader";
import { ItemDetail } from "./ItemDetail";


export const ItemDetailContainer = () => {

      
      return (
            <ItemDetail /> 
          )

}
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getFetch } from "../../utils/getFetch";
// import { ItemCount } from "./ItemCount";



// export const ItemDetailContainer = () => {

//   const [ producto, setProducto ] = useState([])
//   const [ loading, setLoading ] = useState(true);


//   const { id } = useParams()

//   useEffect(()=>{
//     if (id) {
//       getFetch()
//         .then(res => {      
//           setProducto(res.find(producto => producto.id === id))
           
//         })
//         .catch(error => console.log(error))   
//         .finally(()=> setLoading(false))      
  
//     }
//      //else {
//     //   getFetch()
//     //     .then(res => {      
//     //       setProductos(res)
          
//     //     })
//     //     .catch(error => console.log(error))   
//     //     .finally(()=> setLoading(false))      
   
//     // }
//   }, [id])

 

//   return (
//           loading 
//           ? 
//             <h2>Cargando...</h2> 
//           : 

//           <div style={{
//             display: 'flex',
//             justifyContent: 'center',
//             flexDirection: 'row',
//             flexWrap: 'wrap'
//           }} >
           
//                 <div key={producto.id} className='card w-25 mt-2' >
//                   <Link to={`/item/${producto.id}`}>
//                     <div className='card-header'>
//                       Nombre: {producto.name}
//                     </div>
//                     <div className='card-body'>
//                       <img src={producto.foto} alt='foto' className="w-100"/>
//                       Categoria: {producto.categoria}<br/>
//                       Mas Info: {producto.info}<br/>
//                       Precio: {producto.price}
//                     </div>
//                     <div className='card-footer'>
//                       <ItemCount />

//                     <button>eliminar</button>
//                     <button>comprar</button>
//                     </div>
//                   </Link>

//                 </div>            
//           </div>
          

//   )
// }