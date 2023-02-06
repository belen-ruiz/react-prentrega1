import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const ItemListContainer = ()=>{

    return(
        <div>
            <h1 className="text-success text-center"> Lista de productos </h1>


        </div>
    )
}

export { ItemListContainer };

    // const [items, setItems] = useState ([]);
    // const { id } = useParams ();

    // useEffect(()=>{
    //     const promesa = new Promise ((res)=>{
    //         setTimeout(()=>{
    //             res (id ? arrayProductos.filter(item => item.cat === id) : arrayProductos);
    //         }, 2000)
    //     });
    //     promesa.then ((data)=>{
    //         setItems(data);
    //     })
    // }, [id]
    // );


// const ItemListContainer = ({greeting})=>{

//     return(
//         <div>
//             <h1 className="text-success text-center"> hola list container </h1>
//         </div>
//     )
// }

// export { ItemListContainer };