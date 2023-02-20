import { memo } from "react"
import { Item } from "./Item"
// memo(componente) - memo(componente, fn evaluar condición)


export const ItemList = memo(  ( { productos } ) => {
        console.log('Render ItemList')
        return (
            productos.map(producto =>   <Item key={producto.id}   producto={producto}/> )
        )
    }
// , 
    // ( oldProp, newProp )=> oldProp.productos.length === newProp.productos.length
)


