import "./header.css"
import { Logo } from "./Logo"
import {NavBar} from "./NavBar"
import {CartContainer} from "../../Cart/CartContainer"

export const Header = () => {

    return(

        <header className="header">
            <Logo />
            <NavBar />
            <CartContainer />
        </header>


    )

}