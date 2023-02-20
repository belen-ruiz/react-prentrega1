import { memo } from "react"
import { Link } from "react-router-dom"

export const Item =  memo(  ({producto}) => {
    console.log('Render ITEM')
    return (
      <div className='card w-25 mt-2' >
                    <Link to={`/detalle/${producto.id}`}>
                      <div className='card-header'>
                        Nombre: {producto.name}
                      </div>
                      <div className='card-body'>
                        <img src={producto.foto} alt='foto' className="w-100"/>
                        Categoria: {producto.categoria}<br/>
                        Precio: {producto.price}
                      </div>
                      <div className='card-footer'>
                          {/* <button className="btn btn-outline-primary w-100">Detalle</button> */}
                      </div>
                    </Link>
  
                  </div>
    )
  }

)

