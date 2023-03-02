import "./items.css"
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getFetch } from "../../utils/getFetch";
import { Loader } from "../common/Loader";
import { ItemCount } from "./ItemCount";
import { ItemList } from "./ItemList"
import { productosServicios } from "../../utils/products";
import { Categorias } from "../pages/Shop/Categorias";


export const ItemListContainer = () => {

  const [ productos, setProductos ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const { categoria } = useParams();


  useEffect(()=>{
    if (categoria){
      setTimeout(()=>{
        productosServicios.getAll()
        .then(res => {setProductos(res.filter(producto => producto.categoria === categoria))})
        .finally(setLoading(false))
      }, 1000)
      
    }else{
      setTimeout(()=>{

        productosServicios.getAll()
        .then((data)=> setProductos(data))
        .finally(setLoading(false))

      }, 1000)
      }
          
  }, [categoria]);

  
  return (

              loading 
            ? 
              <Loader />
            : 
              <div className="itemListContainer">
                  <Categorias/>
                  <ItemList productos={productos}/>               
              </div>
              

  )
}



// import "bootstrap/dist/css/bootstrap.min.css";
// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getFetch } from "../../utils/getFetch";
// import { Loader } from "../common/Loader";
// import { ItemCount } from "./ItemCount";
// import { ItemList } from "./ItemList"
// import { productosServicios } from "../../utils/products";





// export const ItemListContainer = () => {

//   const [ productos, setProductos ] = useState([]);
//   const [ loading, setLoading ] = useState(true);

//   const { categoria } = useParams();

//   useEffect(()=>{
//     if (categoria){
//       setTimeout(()=>{
//       productosServicios.getAll()
//       .then(res => {setProductos(res.filter(producto => producto.categoria === categoria))})
//       .finally(setLoading(false))
//       }, 2000)
      
//     }else{
//       productosServicios.getAll()
//       .then((data)=> setProductos(data))
//       .finally(setLoading(false))
//       }
          
//   }, [categoria]);

  
//   return (

//               loading 
//             ? 
//               <Loader />
//             : 
//               <div style={{
//               display: 'flex',
//               flexDirection: 'row',
//               flexWrap: 'wrap'
//               }} >
//                   <ItemList productos={productos}/>               
//               </div>

//   )
// }



// import "bootstrap/dist/css/bootstrap.min.css";
// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getFetch } from "../../utils/getFetch";
// import { Loader } from "../common/Loader";
// import { ItemCount } from "./ItemCount";
// import { ItemList } from "./ItemList"

// export const ItemListContainer = () => {

//   const [ productos, setProductos ] = useState([]);
//   const [ loading, setLoading ] = useState(true);

//   const { categoria } = useParams();

//   useEffect(()=>{
//     if (categoria) {
//       getFetch()
//         .then(res => {      
//           setProductos(res.filter(producto => producto.categoria === categoria))
//         })
//         .catch(error => console.log(error))
//         .finally(()=> setLoading(false))      
//     } else {
//       getFetch()
//         .then(res => {      
//           setProductos(res)
//         })
//         .catch(error => console.log(error))
//         .finally(()=> setLoading(false))
      
//     }
//   }, [categoria])

//   return (

//               loading 
//             ? 
//               <Loader />
//             : 
//               <div style={{
//               display: 'flex',
//               flexDirection: 'row',
//               flexWrap: 'wrap'
//               }} >
//                   <ItemList productos={productos}/>               
//               </div>

//   )
// }




//////////////////
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getFetch } from "../../utils/getFetch";
// import { Loader } from "../common/Loader";
// import { ItemCount } from "./ItemCount";
// import { ItemList } from "./ItemList"
// import { productosServicios } from "../../utils/products";


// export const getFetch = () => {
//   return new Promise(( res, rej )=>{    
//     setTimeout(()=>{
//       res( productosServicios )
//     }, 1000) 
//  })

// } 

// export const ItemListContainer = () => {

//   const [ productos, setProductos ] = useState([]);
//   const [ loading, setLoading ] = useState(true);

//   const { categoria } = useParams();

//   useEffect(()=>{
//     if (categoria){
//       productosServicios.getAll()
//       .then(res => {setProductos(res.filter(producto => producto.categoria === categoria))})
//       .finally(setLoading(false))
      
//     }else{
//       productosServicios.getAll()
//       .then((data)=> setProductos(data))
//       .finally(setLoading(false))
//       }
          
//   }, [categoria]);

  
//   return (

//               loading 
//             ? 
//               <Loader />
//             : 
//               <div style={{
//               display: 'flex',
//               flexDirection: 'row',
//               flexWrap: 'wrap'
//               }} >
//                   <ItemList productos={productos}/>               
//               </div>

//   )
// }
