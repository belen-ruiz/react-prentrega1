
import { Logo } from "./Logo"
import {NavBar} from "./NavBar"
import {LogIn} from "./LogIn"
import {CartContainer} from "../../Cart/CartContainer"

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