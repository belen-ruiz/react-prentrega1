import "./header.css"
import { Search } from '@mui/icons-material';
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productosServicios } from "../../../utils/products";


export const SearchContainer = ({ onChange }) => {

  const [query, setQuery] = useState({
    name: "",
  });
 

  // useEffect(()=>{
  //   onChange({ query });
  // }, [onChange, query]);


  return (
    <div>
        <input 
        className='searchContainer'  
        type="text" 
        placeholder="Buscar producto..."
        // value={query.name}
        // onChange={(e) => setQuery((prevState) => ({...prevState, name: e.target.value}))} 
        />
        <Search className="searchIcon"/>
    </div>
  )
}




// export const SearchContainer = () => {

//   const [ productos, setProductos ] = useState([productosServicios.getAll()]);
//   const [query, setQuery] = useState("");
//   const [searchParams, setsearchParams] = useSearchParams({

//     name: "",

//   });

//   // useEffect(()=>{
//   //   setSearch({ q: query });
//   // }, [query, setSearch]);

//   useEffect(() => {
//     let newArray = productos.filter(
//       (prod) =>
//       prod.name.includes(searchParams.get("name")) ||
//         searchParams.get("name") === ""
//     );

//     setProductos(newArray);
//   }, [searchParams]);

//   useEffect(() => {
//     setsearchParams(criteria);
//   }, [criteria, setsearchParams]);

//   return (
//     <div>
//         <input 
//         className='searchContainer'  
//         type="text" 
//         placeholder="Buscar producto..."
//         value={query.name}
//         onChange={(e) => setQuery(e.target.value)} />
//         <Search className="searchIcon"/>
//     </div>
//   )
// }
