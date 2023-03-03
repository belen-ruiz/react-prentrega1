
export const Filtros = ({ productos }) => {

//renderiza diseño


// function ordenarAz(array) {
//   let alfabeticamente = array.slice()
//     alfabeticamente.sort((a,b) => {
//     if(a.cat < b.cat)return -1
//     if(a.cat > b.cat)return 1
//     return 0
//    })
//    mostrarCatalogo(alfabeticamente)
//   }
const alfabeticamente = () => console.log("alfabeticamente")

const deMenorAmayor = () => console.log("deMenorAmayor")

const deMAyorAmenor = () => console.log("deMAyorAmenor")

  // const alfabeticamente = () => cartList.reduce( (count, producto) => count += producto.cantidad, 0)


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
