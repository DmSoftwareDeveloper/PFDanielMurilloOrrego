import { createContext, useContext, useState } from "react"

export const CartContext = createContext({cart: []})
// eslint-disable-next-line react/prop-types
export const CartProvider = ({children}) => 
{
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (item, quantity) => 
    {
        if (!isInCart(item.id)) 
        {
            setCart(prev => [...prev, {...item, quantity}])
        }
        else
        {
            console.error("El producto ya fue agregado")
        }
    }

    const removeItem = (itemId) => 
    {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => 
    {
        setCart([])
    }

    const isInCart = (itemId) => 
    {
        return cart.some(prod => prod.id === itemId)
    }

    const totalQuantity = () => {
        let total = 0;
        cart.forEach(prod => {
            total += prod.quantity
        })
        return total
    }

    const getTotalPrice = () => {
        let total = 0
        cart.forEach(prod => {
            total+= prod.quantity * prod.price;
        })
        return total
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalQuantity, getTotalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => 
{
    return useContext(CartContext)
}