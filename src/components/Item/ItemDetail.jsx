import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ producto }) => {
    const { agregarCarrito } = useCartContext();

    const onAdd = (cant) => {
        agregarCarrito({ ...producto, cantidad: cant });
    };

    return (
        <div className="product">
            <div className="productCardDetail">
                <div className="productCard-header">
                    {producto.name}
                    <Link to="/shop" className="closingTag noLink">
                        x
                    </Link>
                </div>

                <div className="productCard-body">
                    <img
                        src={producto.foto}
                        alt="foto"
                        className="imagenDetail"
                    />

                    <div className="productCard-description">
                        <div className="productCard-text">
                            <p>Categoria: {producto.categoria}</p>
                            <p>Descripcion: {producto.description}</p>
                            <p>
                                Precio: <span> ${producto.price} </span>
                            </p>
                        </div>

                        <div className="addToCart">
                            <ItemCount
                                onAdd={onAdd}
                                initial={1}
                                stock={producto.stock}
                            />
                        </div>
                    </div>
                </div>

                <div className="btnEliminar">
                    <NavLink to="/cart" className="buttonGreenOutline noLink">
                        Terminar mi compra
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
