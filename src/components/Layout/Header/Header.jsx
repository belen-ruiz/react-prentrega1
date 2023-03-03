import "./header.css"
import { Logo } from "./Logo"
import {NavBar} from "./NavBar"
import {CartContainer} from "../../Cart/CartContainer"
import Message from "./Message"
import { SearchContainer } from "./SearchContainer"

export const Header = () => {

    return(
        <>
            <Message />

            <header className="header">
                <Logo />
                <NavBar />
                <SearchContainer />
                <CartContainer />
            </header>
        </>

    )

}