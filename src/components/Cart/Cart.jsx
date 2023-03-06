import "./cart.css";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
    const { cartList, clearCart, precioTotal, eliminarProducto } =
        useCartContext();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const sendOrder = (e) => {
        e.preventDefault();
        const order = {};

        order.buyer = formData;
        order.isActive = true;
        order.items = cartList.map(({ id, name, price }) => ({
            id,
            name,
            price,
        }));
        order.total = precioTotal();

        console.log(order);
    
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
            .then(() => console.log("Orden cargada a Firestore"))
            .catch((err) => console.log(err))
            .finally(() => {
                clearCart();
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                });
            });        
    };

    return (
        <div className="cartView">
            {cartList.map((producto) => (
                <div className="dataView" key={producto.id}>
                    <img src={producto.foto} />

                    <p>
                        Nombre: {producto.name} - x{producto.cantidad}u. -
                        Precio: ${producto.price}
                    </p>

                    <button onClick={(e) => eliminarProducto(e, producto.id)}>
                        Eliminar producto
                    </button>
                </div>
            ))}

            {precioTotal > 0 && (
                <div className="precioTotal">Total: ${precioTotal()}</div>
            )}

            <form className="form" onSubmit={sendOrder}>
                <input
                    type="text"
                    name="name"
                    placeholder="Ingrese el nombre"
                    onChange={handleOnChange}
                    value={formData.name}
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Ingrese el teléfono"
                    onChange={handleOnChange}
                    value={formData.phone}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Ingrese el email"
                    onChange={handleOnChange}
                    value={formData.email}
                />

                <div
                    className="buttonGreen"
                    onClick={sendOrder}
                    type="submit"
                >
                    Generar la orden
                </div> 

                <div className="buttonRed" onClick={clearCart}>
                    Vaciar Carrito
                </div>
            </form>
        </div>
    );
};

export { Cart };
