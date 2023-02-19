import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import { ItemDetailContainer , ItemListContainer, CartWidget } from "../index";
import { Home, About, Shop } from "../pages";

function NavBar (){

    return(
        <BrowserRouter>

            <nav>
                <div>
                    <a className="logoContenedor"> 
                        <img alt="img logo" width={150} />
                    </a>
        
                    <div>
                        <ul>
                            <li>
                                <NavLink to="/home" className="" >Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/shop" className="" >shop</NavLink>

                            </li>


                            <li className="nav-item">
                                

                                <NavLink to="/shop/categoria" className="nav-link" >Categorias</NavLink>

                            </li>

                            <li className="nav-item">
                                

                                <NavLink to="/shop/categoria/exterior" className="nav-link" >exterior</NavLink>


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

            <Routes>


                <Route path={"/home"} element={ <Home />} />
                <Route path={"/about"} element={ <About />} />
                <Route path={"/shop"} element={ <ItemListContainer />} />
                <Route path={"shop/categoria"} element={ <ItemListContainer />} />
                <Route path={"shop/categoria/:categoria"} element={ <ItemListContainer />} />

                <Route path={"/item/:id"} element={ <ItemDetailContainer />} />
                

            </Routes>

        </BrowserRouter>
        
    )
}


