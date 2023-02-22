
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Header } from "./components/Layout/Header/Header"
import {Footer } from "./components/Layout/Footer/Footer"
import {Home} from "../src/components/pages/Home/Home"
import { Shop } from "./components/pages/Shop/Shop"
import {ItemDetailContainer} from "./components/Item/ItemDetailContainer"
import {ItemListContainer} from "./components/Item/ItemListContainer"
import "./app.css"
import { CartProvider } from "./context/CartContext"


function App() {



  return (

        <BrowserRouter> 
        <CartProvider>

          <Header/>
          
          
          <Routes>
            <Route path={"/"} element={ <Shop />} />
            <Route path={"/home"} element={ <Home />} />
            <Route path={"/shop"} element={ <Shop />} />
            <Route path={"shop/categoria"} element={<ItemListContainer />} />
            <Route path={"shop/categoria/:categoria"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          </Routes>

          
        
        
          <Footer />

        </CartProvider>
        </BrowserRouter>
      
  );
}

export default App;


