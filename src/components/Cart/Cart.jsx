import { useState } from "react"
import { useEffect } from "react";
import { useCartContext } from "../../context/CartContext";
import { productosServicios } from "../../utils/products";
import { getFirestore, doc, getDoc, getDocs, addDoc, collection } from "firebase/firestore";




const Cart = () => {

    const { cartList, clearCart, precioTotal, eliminarProducto } = useCartContext() 
    const {orderId, setOrderId} = useState()

    const [formData, setFormData] = useState( {
            name: "",
            phone: "",
            email:"",
    } )   
    
    const sendOrder = () => {
            
        const order = {

        buyer: {name: "belen", phone: 11111, email: "belen@gmail.com"},
        items: [{id: 3, name: "potus", price: 3000 }],
        total: 3000
        };

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
    



    // const sendOrder = () => {
            
    //     const order = {}

    //     order.buyer = formData
    //     order.items = cartList.map( ({id, name, price}) => ({id, name, price}))
    //     order.total = precioTotal()
            
    //     console.log(order)
    //     return
    // }
        
    //     useEffect(()=>{
    //         const add = async () =>{
    //         const db = getFirestore()
    //         const ordersCollection = collection(db, 'orders')
                
    //         await addDoc(ordersCollection)
                
    //         .then(resp => console.log(resp))
    //         .catch(err => console.log(err))
    //         .finally(() => {
    //             clearCart()
    //             setFormData({
    //                 name:"",
    //                 phone:"",
    //                 email:"",
    //             })
    //         }
    //         )
    //         }
            
    // }, []);
