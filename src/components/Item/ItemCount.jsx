import React,{ useState, useEffect } from "react"
import { getFetch } from "../../utils/getFetch";


export const ItemCount = ({ stock=10, initial=0, onAdd }) => {
    
    const [count, setCount] = useState(initial);
    

    const suma =()=>{
        if (count < stock)
        {setCount(prevState =>{ return prevState +1 })}
    }

    const resta =()=>{
        if (count > initial)
        {setCount(prevState =>{ return prevState -1 })}
    }
    

    const handleOnAdd =()=>{
        onAdd(count)
    }

    return(
        <div className="box">
            <div className="counter">
                <div className="counterItems op" onClick={suma}> + </div>
                <div className="counterItems"> {count} </div>
                 <div className="counterItems op" onClick={resta} > - </div>                            <button onClick={handleOnAdd}>Agregar al Carrito itemcount</button> 
                
                

            </div>
        </div>
    )

}