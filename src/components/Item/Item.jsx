import './Item.css'
import { Link } from "react-router-dom"

/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line react/prop-types
const Item = ({id, name, img, price, stock}) => 
{
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>

            <picture>
                <img src={img} alt={name} style={{width: 100}} className="ItemImg" />
            </picture>

            <section>
                <p className="Info">
                    Precio: ${price}
                </p>

                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>

            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item