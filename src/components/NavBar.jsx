import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../logo.jpg"
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import { ItemDetailContainer , ItemListContainer, CartWidget } from "./index";
import { Home, About, Shop } from "./pages";

function NavBar (){

    return(
        <BrowserRouter>

            <nav className="navbar navbar-expand-lg bg-body-white border-bottom border-success border-4 px-5">
                <div className="container-fluid">
                    <a className="navbar-brand logoContenedor" href="#"> 
                        <img src={ Logo } alt="img logo" width={150} />
                    </a>
        
                    <div className=" navbar" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/home" className="nav-link" >Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/cat/remeras" className="nav-link" >shop</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link" >about</NavLink>
                            </li>

                        
                        </ul>
                    </div>

                    <div>
                        <Link to="cart">

                            <CartWidget />
                        
                        </Link>
                    </div>
                </div>

            </nav>

            <Routes>
                <Route path={"/"} element={ <ItemListContainer />} />
                <Route path={"/cat/:id"} element={ <ItemListContainer />} />
                <Route path={"/item/:id"} element={ <ItemDetailContainer />} />


                <Route path={"/home"} element={ <Home />} />
                <Route path={"/about"} element={ <About />} />
                <Route path={"/shop"} element={ <Shop />} />
            </Routes>

        </BrowserRouter>
        
    )
}

export default NavBar;

