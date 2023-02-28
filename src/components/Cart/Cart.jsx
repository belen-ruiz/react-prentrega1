import { useState } from "react"
import { useEffect } from "react";
import { useContext } from "react"
import { CartProvider } from "../../context/CartContext"
import { productos } from "../../utils/products";
import { useCartContext } from "../../context/CartContext";

            

const Cart = () => {

    const { cartList, clearCart, precioTotal, eliminarProducto } = useCartContext() 

    const [formData, setFormData] = useState( {
            name: "",
            phone: "",
            email:"",
            repetirEmail: ""
        } )   
        
    const insertarOrder = (e) => {
            e.preventDefault()
            const order = {}
            // validar formData
            order.buyer = formData
            order.isActive = true
            order.items = cartList.map( ({id, name, price}) => ({id, name, price}))
            order.total = 6500
            return
            (console.log(order))
    
            //Firestore
            // const db = getFirestore()
            // const ordersCollection = collection(db, 'orders')
            
            // insertar en firestores - create
            // addDoc(ordersCollection, order)
            // .then(resp => console.log(resp))
            // .catch(err => console.log(err))
            // .finally(() => {
            //     vaciarCarrito()
            //     setFormData({
            //         name: '',
            //         phone: '',
            //         email:'',
            //         repetirEmail: ''
            //     })
            // })
    
            // actualizar update 
            // const productUpdate = doc(db, 'items', 'XlyMZ9OuSq1FvTmHEoSE')
            // updateDoc(productUpdate, {
            //     stock: 100
            // })
            // .then(() => console.log('producto actualizado'))
    
    
            // console.log(order)
        }
    
    const handleOnChange = (e) => {
            // console.log(e.target.name) // nombre del input (phone)
            //console.log(e.target.value) // valor del input  (123455)
    
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
        }


    const handleOnClick = (id)=>{
        eliminarProducto(id)
    }
    
        return (
            <div>
                { cartList.map(producto => (
                
                   <div key={producto.id}>
                        <img src={producto.foto} style={{width: 100}} />
                        Nombre: {producto.name} - x{producto.cantidad}u. - Precio: ${producto.price}
                        {/* <button onClick={handleOnClick(producto.id)}>Eliminar producto</button> */}
                        
                    </div>
                
                ))}
                <div>
                            Total: ${precioTotal()}

                </div>
    
                <form onSubmit={insertarOrder} >
                    <input 
                        type="text" 
                        name="name"          
                        placeholder = "Ingrese el nombre"   
                        onChange={handleOnChange} 
                        value={formData.name}
    
                    />
                    <input 
                        type="text" 
                        name="phone"         
                        placeholder = "Ingrese el teléfono" 
                        onChange={handleOnChange} 
                        value={formData.phone}
    
                    />
                    <input 
                        type="text" 
                        name="email"         
                        placeholder = "Ingrese el email"    
                        onChange={handleOnChange} 
                        value={formData.email}
    
                    />
                    <input 
                        type="text" 
                        name="repetirEmail"  
                        placeholder = "Repetir el email"    
                        onChange={handleOnChange} 
                        value={formData.repetirEmail}
    
                    />
    
                    <button className="btn btn-outline-success" type="submit">Generar la orden</button>
                </form>
    
                <button className="btn btn-outline-danger" onClick={clearCart}>Vaciar Carrito</button>
            </div>
        )
    }
    
    export { Cart }
    

