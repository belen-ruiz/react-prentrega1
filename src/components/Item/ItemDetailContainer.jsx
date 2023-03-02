
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { getFetch } from "../../utils/getFetch";
import { useParams } from "react-router-dom";
import { Loader } from "../common/Loader";
import { ItemDetail } from "./ItemDetail";
import { productosServicios } from "../../utils/products";

export const ItemDetailContainer = () => {

  const [ producto, setProducto ] =  useState()
  const { id } = useParams()

  useEffect(()=>{
    productosServicios.get(id).then((data)=>setProducto(data));
      }, [id]);

  return (

        producto && (
      <>
        <ItemDetail producto ={ producto }/> 
      </>
      ));  
}



// export const ItemDetailContainer = () => {

//       const [ producto, setProducto ] =  useState({})
//       const [ loading, setLoading ] =  useState({})

//       const { id } = useParams()

//       useEffect(()=>{
//             if (id) {
//               getFetch()
//               .then(res => {      
//                 setProducto(res.find(producto => producto.id === id))
//               })
              
//               .catch(error => console.log(error))
//               .finally(setLoading(false))
//             }
//           }, [id])

//       return (
//             <ItemDetail producto ={ producto }/> 
//           )

// }
