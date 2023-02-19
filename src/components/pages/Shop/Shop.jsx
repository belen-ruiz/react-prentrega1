import { NavLink } from "react-router-dom";


export const Shop = ()=>{

    return(

        <div>
            <h1>shopp</h1>

            <nav>
                <h2>Categorias</h2>
                <ul>
                    <li>
                        <NavLink to="/shop/categoria/exterior" className="nav-link" >exterior</NavLink>
                    </li>

                    <li>
                        <NavLink to="/shop/categoria/interior" className="nav-link" >interior</NavLink>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

