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