import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getFetch } from "../../utils/getFetch";
import { Loader } from "../common/Loader";
import { ItemCount } from "./ItemCount";
import { ItemList } from "./ItemList"

export const ItemListContainer = () => {

  const [ productos, setProductos ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const { categoria } = useParams();

  useEffect(()=>{
    if (categoria) {
      getFetch()
        .then(res => {      
          setProductos(res.filter(producto => producto.categoria === categoria))
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))      
    } else {
      getFetch()
        .then(res => {      
          setProductos(res)
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
      
    }
  }, [categoria])

 

  return (

    loading 
            ? 
              <Loader />
            : 
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap'
            }} >
             { productos.map(producto =>   (
                  <div key={producto.id} className='card w-25 mt-2' >
                    <Link to={`/item/${producto.id}`}>
                      <div className='card-header'>
                        Nombre: {producto.name}
                      </div>
                      <div className='card-body'>
                        <img src={producto.foto} alt= {producto.name} className="w-100"/>
                        Categoria: {producto.categoria}<br/>
                        Precio: {producto.price}
                      </div>
                      <div className='card-footer'>
                      <button>Ver detalle</button> 
                      {/* //item detail */}
                      </div>
                    </Link>
  
                  </div>
                )
              )}
  
              
            </div>

  )
}





// import { useEffect, useState } from "react"
// import { Link, useParams } from "react-router-dom"
// import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'
// import { gFetch } from "../../utils/gFetch"
// import ItemList from "../ItemList/ItemList"
// import { Loading } from "../Loading/Loading"



// export const ItemListContainer = ({ saludo }) => {
//   const [ productos, setProductos ] = useState([])
//   const [ producto, setProducto ] = useState({})
// //   const [ producto, setProducto ] = useState()
//   const [ loading, setLoading ] = useState(true)
//   const [ bool, setBool ] = useState(false) 

//   const { idCategoria } = useParams()


//   useEffect(()=>{
//     setLoading(true)
//     const db = getFirestore() 
//     const queryCollections = collection(db, 'items')

//     if (idCategoria) {
//         const queryFilter = query(
//             queryCollections, 
//             where('categoria','==', idCategoria)            
//         )
//         getDocs(queryFilter)
//         .then(resp => {        
//             setProductos( resp.docs.map(product => ({ id: product.id, ...product.data() } ) ))
//         })
//         .catch(err => console.error(err))
//         .finally(() => setLoading(false))
//     } else {
//         getDocs(queryCollections)
//         .then(resp => setProductos( resp.docs.map(product => ({ id: product.id, ...product.data() }) ) ))
//         .catch(err => console.error(err))
//         .finally(() => setLoading(false))      
//     }
//   }, [idCategoria])

//   const handleBool = () => {
//     setBool(!bool)
//   }
//   const hanldeAgregar = () => {
//         setProductos([...productos, { id: productos.length + 1, categoria: 'remeras', name: 'prod', price: 1800  }])
//   }

//   console.log(productos)
//   return (
        
//             loading 
//             ? 
//                 <Loading />
//             : 
//                 <>
//                     <button onClick={handleBool}>cambio de estado</button>
//                     <button onClick={ hanldeAgregar }>Agregar productos</button>
//                     <div style={{
//                         display: 'flex',
//                         flexDirection: 'row',
//                         flexWrap: 'wrap'
//                     }} >

//                         <ItemList productos={productos} />                    
//                     </div>
//                 </>
//   )
// }
