import { Filtros } from "./Filtros";
import { Loader } from "../components/common/Loader";
import { Categorias } from "../components/pages/Shop/Categorias";
import { useEffect, useState } from "react";
import { productosServicios } from "./products";
import { useParams } from "react-router-dom";


export const FiltrosBox = () => {
  //funciones

  const [ productos, setProductos ] = useState([]);
  const [ loading, setLoading ] = useState(true);


    return (
      
      <div className="filtrosBox">
          <Filtros productos={ productos } /> 
          {/* //onClick={handleClick(orden)}                */}
      </div>
    
    )
  }
  
  // useEffect(()=>{
  //   if (orden == "alfabeticamente"){
  //     setTimeout(()=>{
  //       productosServicios.getAll()
  //       .then(res => {setProductos(res.sort(producto => producto.categoria === categoria))})
  //       .finally(setLoading(false))
  //     }, 2000)
      
  //   } else if (orden == "deMenorAmayor"){
  //     setTimeout(()=>{
  //       productosServicios.getAll()
  //       .then(res => {setProductos(res.sort(producto => producto.categoria === categoria))})
  //       .finally(setLoading(false))
  //     }, 2000)
  
  //     } else if (orden == "deMayorAmenor"){
  //       setTimeout(()=>{
  //         productosServicios.getAll()
  //         .then(res => {setProductos(res.console.log("hola"))})
  //         .finally(setLoading(false))
  //       }, 2000)
  //       }         
  // }, [orden]);