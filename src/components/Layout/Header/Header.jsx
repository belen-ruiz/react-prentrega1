import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartWidget } from "../Cart/CartWidget/CartWidget"

import { LogIn, Logo, NavBar } from "./header"

export const Header = () => {

    return(

        <BrowserRouter>

            <Logo />
            <NavBar />
            <LogIn />
            <CartWidget />

            <Routes>

                <Route path={"/"} element={ <Home />} />
                <Route path={"/home"} element={ <Home />} />
                <Route path={"/shop"} element={ <ItemListContainer />} />
                <Route path={"shop/categoria"} element={<ItemListContainer />} />
                <Route path={"shop/categoria/:categoria"} element={<ItemListContainer />} />
                <Route path={"/item/:id"} element={<ItemDetailContainer />} />
                        
            </Routes>
        </BrowserRouter>


    )

}