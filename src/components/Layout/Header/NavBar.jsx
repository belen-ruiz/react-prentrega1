import { NavLink } from "react-router-dom";

export const NavBar = () =>{

    return(
            <div className="pagesBox">
                <ul className="pages">
                    <li>
                        <NavLink to="/home" className="page" >Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/shop" className="page" >shop</NavLink>
                    </li>
                </ul>
            </div>               
    )
}


