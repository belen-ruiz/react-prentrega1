import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../logo.jpg"
import CartWidget from "./CartWidget";

function NavBar (){

    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-white border-bottom border-success border-4 px-5">
                <div className="container-fluid">
                    <a className="navbar-brand logoContenedor" href="#"> 
                        <img src={ Logo } alt="img logo" width={150} />
                    </a>
        
                    <div className=" navbar" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link active text-success" aria-current="page" href="#">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Shop</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <CartWidget/>
                    </div>
                </div>

            </nav>

        </div>
        
    )
}

export default NavBar

