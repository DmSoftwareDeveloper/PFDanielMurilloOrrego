Nombre del Proyecto : E-commerce "Tienda online de videojuegos"

Es una App de tienda carrito de compras online de productos tanto consolas, como accesorios , equipos y juegos.

Requisitos Previos: -Creacion del entorno con React.js Vite: utilizando:Node.js, y creando en la terminal el proyecto mediante la instalacion de react: comandos utilizados : 1- npm create vite@latest 2- cd E-commerce 3- npm install o npm i 4- npm run dev -Istalacion de dependecias: -React-Dom -React-router-dom

Para las entregas los requisitos fueron: -1er Preentrega: -NavBar: -Brand (titulo) -Listado de categorias clickeables -Utilice hojas de estilos CSS en los componentes -CartWidget (icono y numero hardcordeado fijo)
-Componente contenedor ItemListContainer.jsx (con prop greeting)

    -2da Preentrega:
            -Crear rutas utilizando react-router-dom permitiendo la navegabilidad entre el catalogo y los detalles (rutas y links)
            -componentes (NavBar, Catalogo, Detalle del producto)
            
    -3era Entrega Final :
            -Desarrolla una app de E-commerce rubro a eleccion
            -Componentes:
                NavBar
                Catalogo
                Detalle del producto
                CartContext
                CartWidget
                ItemListContainer
                ItemList
                ItemDetailContainer
                ItemDetail
                    ItemQuantitySelector
                    Description
                    AddItemButton
                Checkout

                Extras:
                    CheckoutForm (con base dee datos en firebase)
                    Spiner
                    Las imagenes estan en base de datos utilizada

Por ultimo cambiamos los datos de firebase por el archivo .env para crear las variables de entorno luego los ingresamos a .gitignore para evitar subir informacion sensible.

Se guardará el archivo asyncMock.jsx aquí por si más adelante se necesita utilizar nuevamente.

"asyncMock.jsx"
const products = 
[
    {
        id: '1',
        name: 'Xbox-One',
        price: 500000,
        category: 'Consolas',
        img: 'https://quo.mx/wp-content/uploads/2023/08/diferencia-entre-xbox-one-y-xbox-one-s.png',
        stock: 25,
        description: 'Xbox-One X Black 4G'
    },

    {
        id: '2',
        name: 'Playstation 4',
        price: 600000,
        category: 'Consolas',
        img: 'https://masqnuevo.net/11034-large_default/playstation-4-fat-500gb-negra-mando-cables.jpg',
        stock: 25,
        description: 'Playstation 4 Slim 1TB'
    },

    {
        id: '3',
        name: 'Sega Saturn',
        price: 300000,
        category: 'Consolas',
        img: 'https://i.blogs.es/7df590/portada-mejores-juegos-sega-saturn/1366_2000.jpeg',
        stock: 25,
        description: 'Sega Saturn Black Generation 1'
    }
]

export const getProducts = () => 
{
    return new Promise((resolve) => 
    {
        setTimeout(() => 
        {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => 
{
    return new Promise((resolve) => 
    {
        setTimeout(() => 
        {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => 
{
    return new Promise((resolve) => 
    {
        setTimeout(() => 
        {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}