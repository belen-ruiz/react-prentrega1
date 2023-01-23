import "bootstrap/dist/css/bootstrap.min.css";



const ItemListContainer = ({greeting})=>{

    return(
        <div>
            <h1 className="text-success text-center">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer