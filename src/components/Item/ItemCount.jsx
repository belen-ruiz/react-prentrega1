import React,{ useState, useEffect } from "react"
import { getFetch } from "../../utils/getFetch";

export const ItemCount = ({ stock, initial,  onAdd }) => {
    
    const [number, setNumber] = useState(initial="1");

    return(
        <div className="box">
            <div className="counter">
                <div className="counterItems op" onClick={() => setNumber (number + 1)}> + </div>
                <div className="counterItems" > {number} </div>
                <div className="counterItems op" onClick={() => setNumber (number - 1)}> - </div>
            </div>

            <div className="addToCart">
                <button >Agregar al Carrito</button>
            </div>

        </div>
    )

}
