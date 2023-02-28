
import {productosServicios} from "./products"
  
  export const getFetch = () => {
    return new Promise(( res, rej )=>{    
      setTimeout(()=>{
        res( productosServicios )
      }, 1000) 
   })
  
  } 


