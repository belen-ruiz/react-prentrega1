
import { LinearProgress } from "@mui/material"
import "./loader.css"



export const Loader =(loading)=>{
    return(
      <div className="spinnerBox">

        <LinearProgress color="success" />
          
        <div className="sr-only">Cargando...</div>
      </div>        
    )

}