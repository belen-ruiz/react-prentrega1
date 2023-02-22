import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getFetch } from "../../utils/getFetch";
import { Loader } from "../common/Loader";
import { ItemCount } from "./ItemCount";
import { ItemList } from "./ItemList"

export const ItemListContainer = () => {

  const [ productos, setProductos ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const { categoria } = useParams();

  useEffect(()=>{
    if (categoria) {
      getFetch()
        .then(res => {      
          setProductos(res.filter(producto => producto.categoria === categoria))
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))      
    } else {
      getFetch()
        .then(res => {      
          setProductos(res)
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
      
    }
  }, [categoria])

  return (

              loading 
            ? 
              <Loader />
            : 
              <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap'
              }} >
                  <ItemList productos={productos}/>               
              </div>

  )
}




