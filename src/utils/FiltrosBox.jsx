import { Filtros } from "./Filtros";





export const FiltrosBox = () => {
//funciones
const [ productos, setProductos ] = useState("deMenorAmayor");


useEffect(()=>{
  if (orden == "alfabeticamente"){
    setTimeout(()=>{
      productosServicios.getAll()
      .then(res => {setProductos(res.sort(producto => producto.categoria === categoria))})
      .finally(setLoading(false))
    }, 2000)
    
  } else if (orden == "deMenorAmayor"){
    setTimeout(()=>{
      productosServicios.getAll()
      .then(res => {setProductos(res.sort(producto => producto.categoria === categoria))})
      .finally(setLoading(false))
    }, 2000)

    } else if (orden == "deMayorAmenor"){
      setTimeout(()=>{
        productosServicios.getAll()
        .then(res => {setProductos(res.console.log("hola"))})
        .finally(setLoading(false))
      }, 2000)
      }         
}, [orden]);

const handleClick = (orden)=>{

}

  return (
    
    loading 
    ? 
      <Loader />
    : 
      <div className="filtrosBox">
          <Categorias/>
          <Filtros productos={productos} /> 
          {/* //onClick={handleClick(orden)}                */}
      </div>
    


  )
}
