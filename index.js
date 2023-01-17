    const fs = require("fs")
    
    class ProductManager{
        constructor(){
        this.products = []
    }

    addProduct = function (title, description, price, thumbnail, code, stock,) {

        if (!title || !description || !price || !thumbnail || !code || !stock) {
  
            console.log('Falta completar datos del producto');
  
        } else {
  
            const nuevoProducto = this.#evaluarSiExisteProducto(code);
  
            if (nuevoProducto) {
  
                console.log('error, producto ya existente, código repetido');
  
            } else {
  
                this.#idAutoIncremental ++;
  
                this.products.push({
  
                    title,
  
                    description,
  
                    price,
  
                    thumbnail,
  
                    code,
  
                    stock,
  
                    id: this.#idAutoIncremental,
  
                })
  
            }
        }
    }

    getProducts(){
        return this.products
    }

    getProductById(productoId) {
        const productoEncontradoPorId = this.products.find(el => productoId == el.id)
        if (productoEncontradoPorId) {
            console.log(productoEncontradoPorId);
        } else {
            console.log('not found');
        }
    }
}

const ProductManager1 = new ProductManager()
const ProductManager2 = new ProductManager()
ProductManager1.addProduct("Pelota", "roja", 4999, "https://tse3.mm.bing.net/th?id=OIP.jz3Xp1IxeVAmMWsb2sq-_wAAAA&pid=Api&P=0", 76443, 100)
ProductManager1.addProduct("botines", "nike color verde", 29999, "https://tusbotasdefutbol.com/wp-content/uploads/2021/08/Nike-Mercurial-Vapor-14-green-300x300.jpg", 76444, 180)
ProductManager1.addProduct("remera", "adidas negra", 10999, "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw282567b8/products/AD_GN1478/AD_GN1478-1.JPG", 76445, 500)
