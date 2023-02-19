import { BrowserRouter, NavLink } from "react-router-dom";

export const NavBar = () =>{

    return(
        <BrowserRouter>
            <div class="pages">
                <ul>
                    <li>
                        <NavLink to="/home" className="" >Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/shop" className="" >shop</NavLink>
                    </li>
                </ul>
            </div>       
        </BrowserRouter>
        
    )
}


