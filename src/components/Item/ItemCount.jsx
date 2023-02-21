import React,{ useState, useEffect } from "react"
import { getFetch } from "../../utils/getFetch";


export const ItemCount = ({ stock, initial,  onAdd  }) => {
    
    const [count, setCount] = useState(0);

    const suma =()=>{
        setCount(prevState =>{ return prevState +1 })
    }

    const resta =()=>{
        setCount(prevState =>{ return prevState -1 })
    }
    

    // onAdd =()=>{

    //     const prodAgregado = productos.find((producto)=>{producto.id == producto.id})

    //     console.log(prodAgregado)


    //     //logica para agregar items al cart
    //     // const itemQ = count
    //     // return itemQ
    // }

    return(
        <div className="box">
            <div className="counter">
                <div className="counterItems op" onClick={suma}> + </div>
                <div className="counterItems" value="itemsOnCart"> {count} </div>
                <div className="counterItems op" onClick={resta} > - </div>
            </div>
        </div>
    )

}
