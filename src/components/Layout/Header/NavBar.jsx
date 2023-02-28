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


// import { Link, NavLink } from 'react-router-dom';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// const categorias = [ 
//     {id: '1', nombre: 'Gorras', idCategoria: 'gorras', descripcion: 'Esto es gorras'},
//     {id: '2', nombre: 'Remeras', idCategoria: 'remeras', descripcion: 'Esto es remeras'},
//     {id: '3', nombre: 'Pantalones', idCategoria: 'pantalones,', descripcion: 'Esto es remeras'}
// ]

// const NavBar = () => {
//     return (
//         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//             <Container>
//                 {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
//                 <NavLink to='/' >React-Bootstrap</NavLink>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                 <Nav className="me-auto">
//                 { categorias.map(cate => <NavLink to={`/categoria/${cate.idCategoria}`} className={({ isActive })=> isActive  ? 'btn btn-primary':'btn btn-outline-primary' } >{cate.nombre}</NavLink>)}
                   
                    
//                 </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     )
// }


