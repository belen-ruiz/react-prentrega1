import { Filtros } from "./Filtros";


export const FiltrosBox = () => {
 

  const [ productos, setProductos ] = useState([]);
  const [ loading, setLoading ] = useState(true);


    return (
      
      <div className="filtrosBox">
          <Filtros productos={ productos } /> 
      </div>
    
    )
  }
  