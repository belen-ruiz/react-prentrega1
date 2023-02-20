import React,{ useState, useEffect } from "react"
import { getFetch } from "../../utils/getFetch";

export const ItemCount = ({ stock, initial,  onAdd }) => {
    
    const [count, setCount] = useState(0);

    const suma =()=>{ setCount(count + 1)}
    const resta =()=>{ setCount(count - 1)}


    return(
        <div className="box">
            <div className="counter">
                <div className="counterItems op" onClick={suma}> + </div>
                <div className="counterItems" > {count} </div>
                <div className="counterItems op" onClick={resta} > - </div>
            </div>

            <div className="addToCart">
                <button >Agregar al Carrito</button>
            </div>

        </div>
    )

}
