
export const Filtros = ({ productos }) => {


const alfabeticamente = () => console.log("alfabeticamente")

const deMenorAmayor = () => console.log("deMenorAmayor")

const deMAyorAmenor = () => console.log("deMAyorAmenor")


  return (

    <div>
        <ul>
            <li onClick={alfabeticamente}> Alfabeticamente </li>
            <li onClick={deMenorAmayor}>deMenorAmayor</li>
            <li onClick={deMAyorAmenor}>deMAyorAmenor</li>
        </ul>
    </div>
        
  )
}
