import './CartWidget.css'
import cart from './assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => 
{
    const {totalQuantity} = useContext(CartContext)
    console.log(totalQuantity())

    return (
        <Link to='/cart' className="CartWidget">
            <img className="CartImg" src={cart} style={{width: 25}} alt="cart-widget" />
            {totalQuantity() > 0 && <span className="cart-quantity">{totalQuantity()}</span>}
        </Link>
    )
}

export default CartWidget