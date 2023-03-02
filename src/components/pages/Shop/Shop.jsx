import "./shop.css"
import { NavLink } from "react-router-dom";
import { ItemListContainer } from "../../Item/ItemListContainer";
import { Loader } from "../../common/Loader";
import { useState } from "react";


export const Shop = ()=>{

    const [ loading, setLoading ] = useState(true);


    return(
        
            loading 
            ? 
            <Loader />
            : 
            <ItemListContainer /> 
        
    )
}

