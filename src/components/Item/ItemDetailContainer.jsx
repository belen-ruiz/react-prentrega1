
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { productosServicios } from "../../utils/products";

export const ItemDetailContainer = () => {

  const [ loading, setLoading ] = useState(true);
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

