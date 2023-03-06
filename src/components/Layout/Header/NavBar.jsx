import { NavLink } from "react-router-dom";

export const NavBar = () =>{

    return(
            <div className="pagesBox">
                <ul className="pages">
                    <li>
                        <NavLink to="/home" className={({ isActive })=> isActive  ? 'page page-active' : ' page'} >Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/shop" className={({ isActive })=> isActive  ? 'page page-active' : 'page'} >Store</NavLink>
                    </li>
                </ul>
            </div>               
    )
}


