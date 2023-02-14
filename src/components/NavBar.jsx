import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../logo.jpg"
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import { ItemDetailContainer , ItemListContainer, CartWidget } from "./index";
import { Home, About, Shop } from "./pages";

function NavBar (){

    return(
        <BrowserRouter>
<<<<<<< HEAD
=======

>>>>>>> entrega2
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
                                <NavLink to="/shop" className="nav-link" >shop</NavLink>

                            </li>


                            <li className="nav-item">
                                

                                <NavLink to="/shop/categoria" className="nav-link" >Categorias</NavLink>

                            </li>

                            <li className="nav-item">
<<<<<<< HEAD
                                <a className="nav-link active text-success" aria-current="page">Home</a>

                                

=======
                                

                                <NavLink to="/shop/categoria/exterior" className="nav-link" >exterior</NavLink>


>>>>>>> entrega2
                            </li>

                            <li className="nav-item">

                                <NavLink to="/shop/categoria/interior" className="nav-link" >interior</NavLink>

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

<<<<<<< HEAD
=======
            <Routes>


                <Route path={"/home"} element={ <Home />} />
                <Route path={"/about"} element={ <About />} />
                <Route path={"/shop"} element={ <ItemListContainer />} />
                <Route path={"shop/categoria"} element={ <ItemListContainer />} />
                <Route path={"shop/categoria/:categoria"} element={ <ItemListContainer />} />

                <Route path={"/item/:id"} element={ <ItemDetailContainer />} />
                

            </Routes>

>>>>>>> entrega2
        </BrowserRouter>
        
    )
}

export default NavBar;

