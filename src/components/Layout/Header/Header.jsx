
import { CartContainer } from "../Cart/CartContainer"
import { Logo } from "./Logo"
import {NavBar} from "./NavBar"
import {LogIn} from "./LogIn"

export const Header = () => {

    return(

        <header className="header">
            <Logo />
            <NavBar />
            <LogIn />
            <CartContainer />
        </header>


    )

}