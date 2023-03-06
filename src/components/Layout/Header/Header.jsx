import "./header.css"
import { Logo } from "./Logo"
import {NavBar} from "./NavBar"
import {CartContainer} from "../../Cart/CartContainer"
import { SearchContainer } from "./SearchContainer"
import Message from "./Message"



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