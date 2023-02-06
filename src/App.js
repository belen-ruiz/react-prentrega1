import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";



function App() {
  return (
    
      <header className="header">
        
          <NavBar/>
          <ItemListContainer greeting={"Bienvenido a nuestra tienda!"}/>
        
      </header>
      
  );
}

export default App;
