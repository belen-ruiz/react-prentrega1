import { useState } from "react"
import { useEffect } from "react";
import { useContext } from "react"
import { CartProvider } from "../../../context/CartContext"
import { productos } from "../../../utils/products";
import { useCartContext } from "../../../context/CartContext";


const Cart = () => {

    const { cartList, clearCart } = useCartContext() 

    const [formData, setFormData] = useState( {
            name: '',
            phone: '',
            email:'',
            repetirEmail: ''
        } )        
    const insertarOrder = (evt) => {
            evt.preventDefault()
            const order = {}
            // validar formData
            order.buyer = formData
            order.isActive = true
            order.items = cartList.map( ({id, name, price}) => ({id, name, price}))
            order.total = 6500
    
    
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
    
    const handleOnChange = (evt) => {
            // console.log(evt.target.name) // nombre del input 
            // console.log(evt.target.value) // valor del input
    
            setFormData({
                ...formData,
                [evt.target.name]: evt.target.value
            })
        }
    
    console.log(cartList)


        return (
            <div>
                { cartList.map(producto => (
                    <div key={producto.id}>
                        <img src={producto.foto} style={{width: 100}} />
                        Nombre: {producto.name} - Cantidad: {producto.cantidad} - Precio: {producto.price}
                    </div>
                      
                ))}
    
                <form onSubmit={insertarOrder} >
                    <input 
                        type="text" 
                        name="name"          
                        placeholder = "Ingrese el nombre"   
                        onChange={handleOnChange} 
                        value={formData.name}
    
                    /><br />
                    <input 
                        type="text" 
                        name="phone"         
                        placeholder = "Ingrese el teléfono" 
                        onChange={handleOnChange} 
                        value={formData.phone}
    
                    /><br />
                    <input 
                        type="text" 
                        name="email"         
                        placeholder = "Ingrese el email"    
                        onChange={handleOnChange} 
                        value={formData.email}
    
                    /><br />
                    <input 
                        type="text" 
                        name="repetirEmail"  
                        placeholder = "Repetir el email"    
                        onChange={handleOnChange} 
                        value={formData.repetirEmail}
    
                    /><br />
    
                    <button className="btn btn-outline-success" type="submit">Generar la orden</button>
                </form>
    
                <button className="btn btn-outline-danger" onClick={clearCart}>Vaciar Carrito</button>
            </div>
        )
    }
    
    export {Cart}
    

