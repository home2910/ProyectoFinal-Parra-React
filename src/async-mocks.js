const products = [
    { id: "1", category: "remeras", name: "Camisa", description: "Camisa blanca", img: "https://http2.mlstatic.com/D_NQ_NP_659498-MLA41913000672_052020-O.webp", price: "$8999", stock: 6 },
    { id: "2", category: "pantalones", name: "Bermuda", description: "Bermuda de jean", img: "https://acdn.mitiendanube.com/stores/001/193/991/products/1abtgl_-4061-f9cb7e0112fe302c5e16606695563088-480-0.jpg", price: "$3000", stock: 3 },
    { id: "3", category: "remeras", name: "Remera", description: "Remera Oversize", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/002/157/879/products/dsc087371-bd1ef0bcc030f4f0cd16824640717770-640-0.webp", price: "$4000", stock: 10 },
    { id: "4", category: "remeras", name: "Top", description: "Top rojo", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/141/587/products/shop-img_31821-14a7907f4b6438424416666366313223-480-0.webp", price: "$2899", stock: 2 },
    { id: "5", category: "pantalones", name: "Pollera", description: "Pollera verde", img: "https://acdn.mitiendanube.com/stores/001/458/807/products/pll-thf-verde_ingles-2e16083d149c8d29f916141249286335-640-0.webp", price: "$4289", stock: 3 },
    { id: "6", category: "pantalones", name: "Jean", description: "Jean azul", img: "https://www.nuqaclothing.com/cdn/shop/products/MomJeanClasico-Acero-Frontal_1024x1024.jpg?v=1599594392", stock: 15 },
    { id: "7", category: "calzados", name: "Zapatillas", description: "Zapatillas Nike", img: "https://nikearprod.vtexassets.com/arquivos/ids/620539-800-800?v=638204509577130000&width=800&height=800&aspect=true", price: "$18260", stock: 8 },
    { id: "8", category: "calzados", name: "Borcegos", description: "Borcegos de cuero negros", img: "https://zorzaldelvaga.com/wp-content/uploads/2022/07/61.jpg", price: "$15000", stock: 7 },
    { id: "9", category: "remeras", name: "Musculosa", description: "Musculosa blanca lisa", img: "https://http2.mlstatic.com/D_NQ_NP_902319-MLA53497427061_012023-O.webp", price: "$2500", stock: 11 },
    { id: "10", category: "calzados", name: "Crocs", description: "Crocs negras", img: "https://crocsarg.vtexassets.com/arquivos/ids/156382-800-auto?width=800&height=auto&aspect=true", price: "$9999", stock: 1 },
    { id: "11", category: "remeras", name: "Campera", description: "Campera nike negra", img: "https://sporting.vtexassets.com/arquivos/ids/296674-800-800?width=800&height=800&aspect=true", price: "$10000", stock: 14 },
    { id: "12", category: "remeras", name: "Vestido", description: "Vestido verde", img: "https://cdn0.casamientos.com.ar/article-dress/1737/original/960/jpg/m387371.webp", price: "$5000", stock: 6 }
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
