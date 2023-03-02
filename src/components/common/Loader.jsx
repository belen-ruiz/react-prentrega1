
import "./loader.css"



export const Loader =(loading)=>{
    return(
      <div className="spinnerBox">
        <div className="spinner-border text-success" role="status">
        </div>
          
        <div className="sr-only">Cargando...</div>
      </div>        
    )

}