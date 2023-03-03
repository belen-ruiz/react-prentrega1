import "./shop.css"
import { ItemListContainer } from "../../Item/ItemListContainer";
import { Loader } from "../../common/Loader";
import { useState } from "react";
import { Categorias } from "../Shop/Categorias";
import { FiltrosBox } from "../../../utils/FiltrosBox";


export const Shop = ()=>{

    const [ loading, setLoading ] = useState(false);


    return(
        
            loading 
            ? 
            <Loader />
            : 
            <>
                <Categorias/>
                <FiltrosBox />
                <ItemListContainer /> 
            </>
        
    )
}

