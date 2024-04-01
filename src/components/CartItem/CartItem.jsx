import {useCart} from "../../context/CartContext"

// eslint-disable-next-line react/prop-types
const CartItem = ({id, name, quantity, price}) => 
{
    const {removeItem} = useCart()
    const handleRemove = (id) => 
    {
        removeItem(id)
    }

    return (
        <article>
            <header>
                <h2>{name}</h2>
            </header>

            <section>
                <p>Cantidad: {quantity}</p>
                <p>Precio x unidad: ${price}</p>
            </section>
            
            <footer>
                <p>Subtotal: ${price * quantity}</p>
                <button onClick={() => handleRemove(id)}>X</button>
            </footer>
        </article>
    )
}

export default CartItem