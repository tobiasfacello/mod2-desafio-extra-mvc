import { ProductCollection } from "./models";

class ProductController {
	products: ProductCollection;
	// El constructor crea una instancia del collection y la almacena en la propiedad "products".
	constructor() {
		this.products = new ProductCollection();
	}
	/* 1. Se crea el método processOptions(), el  cual recibe un argumento para luego decidir entre dos posibles resultados.
	2. Si el argumento ingresado tiene la propiedad "search", toma el valor de dicha propiedad y busca el producto por su "id".
	3. De lo contrario, si el argumento no tiene dicha propiedad se devuelven todos los productos.
	*/

	// 1.
	processOptions(option) {
		if (option.search) {
			return this.products.getById(option.search); // 2.
		} else {
			return this.products.getAll(); // 3.
		}
	}
}

export { ProductController };
