
export const Filtros = ({ productos }) => {
//renderiza diseño

  return (

    <div>
        <ul>
            <li onClick={alfabeticamente()}>alfabeticamente</li>
            <li>deMenorAmayor</li>
            <li>deMAyorAmenor</li>
        </ul>
    </div>
        
  )
}
