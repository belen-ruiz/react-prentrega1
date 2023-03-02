import "./shop.css"
import { NavLink } from "react-router-dom";


export const Categorias = ()=>{

    return(

        <div className="categoriasContainer">
            <h1>Categorias</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/shop/categoria/exterior" className={({ isActive })=> isActive  ? 'nav-link navlink-active' : 'nav-link'} >Exterior</NavLink>
                    </li>

                    <li>
                        <NavLink to="/shop/categoria/interior" className={({ isActive })=> isActive  ? 'nav-link navlink-active' : 'nav-link'} >Interior</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}