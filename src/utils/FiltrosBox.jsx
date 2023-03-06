import { Filtros } from "./Filtros";
import { useState } from "react";



export const FiltrosBox = () => {
 
  const [ productos, setProductos ] = useState([]);
  const [ loading, setLoading ] = useState(true);


    return (
      
      <div className="filtrosBox">
          <Filtros productos={ productos } /> 
      </div>
    
    )
  }
  