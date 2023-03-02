import { getFirestore, collection, addDoc } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"



const Cart = () => {

    const { cartList, clearCart, precioTotal, eliminarProducto } = useCartContext()

    const [formData, setFormData] = useState({
            name: "",
            phone: "",
            email:"",
    } )   
    
    const sendOrder = (evt) => {
            evt.preventDefault()
            const order = {}

            order.buyer = formData
            order.isActive = true
            order.items = cartList.map( ({id, name, price}) => ({id, name, price}))
            order.total = precioTotal()
    

        console.log(order)

        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order)
            .then (res => console.log(res))
            .catch(err => console.log(err))
            .finally(()=>{
                clearCart()
                setFormData({
                    name: "",
                    phone: "",
                    email:"",})
            })
        
    }


    const handleOnChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
    }

    return (
            <div>
                { cartList.map(producto => (
                
                   <div key={producto.id}>
                        <img src={producto.foto} style={{width: 100}} />
                        Nombre: {producto.name} - x{producto.cantidad}u. - Precio: ${producto.price}
                        <button>Eliminar producto</button> 
                        
                    </div>
                
                ))}
                <div>
                            Total: ${precioTotal()}

                </div>
    
                <form onSubmit={sendOrder} >
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

                    <div className="btn btn-outline-success" onClick={sendOrder}type="submit">Generar la orden</div>
                </form>
    
                <button className="btn btn-outline-danger" onClick={clearCart}>Vaciar Carrito</button>
            </div>
        )
    }
    
    export { Cart }
    
