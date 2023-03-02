import { memo } from "react"
import { Link } from "react-router-dom"

export const Item =  memo(  ({ producto }) => {

    
    return (
      <div className='productCard' >
        <Link to={`/item/${producto.id}`}>
          <div className='productCard-header'>
            {producto.name}
          </div>
          <div className='productCard-body'>
            <img src={producto.foto} alt='foto' className="imagen"/>
          </div>
        </Link>
      </div>
    )
  }

)

