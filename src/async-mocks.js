const products = [
    { id: "1", category: "remeras", name: "Camisa", description: "Camisa blanca", stock: 6 },
    { id: "2", category: "pantalones", name: "Bermuda", description: "Bermuda de jean", stock: 3 },
    { id: "3", category: "remeras", name: "Remera", description: "Remera Oversize", stock: 10 },
    { id: "4", category: "remeras", name: "Top", description: "Top rojo", stock: 2 },
    { id: "5", category: "pantalones", name: "Pollera", description: "Pollera verde", stock: 3 },
    { id: "6", category: "pantalones", name: "Jean", description: "Jean azul", stock: 15 },
    { id: "7", category: "calzados", name: "Zapatillas", description: "Zapatillas Nike", stock: 8 },
    { id: "8", category: "calzados", name: "Borcegos", description: "Borcegos de cuero negros", stock: 7 },
    { id: "9", category: "remeras", name: "Musculosa", description: "Musculosa blanca lisa", stock: 11 },
    { id: "10", category: "calzados", name: "Crocs", description: "Crocs negras", stock: 1 }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {

        if (products.length > 0) {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        } else {
            reject("No hay productos");
        }
    });
};

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {

        const product = products.find(product => product.id === id);
        setTimeout(() => {
            if (!product) {
                reject("No se encontró el producto solicitado")
            } else {
                resolve(product);
            }
        }, 2000)

    });
};
