import "./items.css"
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Loader } from "../common/Loader";
import { ItemList } from "./ItemList"
import { productosServicios } from "../../utils/products";
import { Categorias } from "../pages/Shop/Categorias"




export const ItemListContainer = () => {

  const [ productos, setProductos ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const { categoria } = useParams();


  useEffect(()=>{
    if (categoria){
      setTimeout(()=>{
        productosServicios.getAll()
        .then(res => {setProductos(res.filter(producto => producto.categoria === categoria))})
        .finally(setLoading(false))
      }, 2000)
      
    }else{
      setTimeout(()=>{

        productosServicios.getAll()
        .then((data)=> setProductos(data))
        .finally(setLoading(false))

      }, 2000)
      }
          
  }, [categoria]);

  
  return (

              loading 
            ? 
              <Loader />
            : 

            <>
              <Categorias />

              <div className="itemListContainer">
                  <ItemList productos={productos}/>               
              </div>
            </>
              

  )
}


