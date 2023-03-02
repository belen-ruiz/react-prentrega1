import "./home.css"
import { Link } from "react-router-dom";

const Home = ()=>{

    return(

        <div className="homeContainer">
            <h1>El Botanico<span>.</span></h1> 
            <h2>Te ayudamos a elegir tú próxima planta. En nuestra tienda online vas a encontrar una amplia variedad de plantas y macetas. </h2>
            <Link to="/shop">
                <div className="buttonGreen">Ir a la tienda <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
                </div>
            </Link>
        </div>
    )
}

export { Home } ;