import "./header.css"
import { Logo } from "./Logo"
import {NavBar} from "./NavBar"
import {CartContainer} from "../../Cart/CartContainer"
import Message from "./Message"
import { SearchContainer } from "./SearchContainer"
import { productosServicios } from "../../../utils/products";
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"


export const Header = () => {
    // const [productos, setProductos] = useState({});
    // const [criteria, setCriteria] = useState();
    // const [searchParams, setSearchParams] = useSearchParams({
    //     name: "",
  
    //   });

    //   useEffect(() => {
    //     const productos = productosServicios.getByName()
    //         .then((data)=> setProductos(data))
    //         console.log(productos)

    //     let newArray = productos.filter(
    //       (prod) =>
    //       prod.name.includes(searchParams.get("name")) ||
    //         searchParams.get("name") === ""
    //     );
    
        
    //     setProductos(newArray);
    //   }, [searchParams]);
    

    //   useEffect(() => {
    //     setSearchParams(criteria);
    //   }, [criteria, setSearchParams]);
    

    return(
        <>
            <Message />

            <header className="header">
                <Logo />
                <NavBar />
                <SearchContainer />
                <CartContainer />
            </header>
        </>

    )

}