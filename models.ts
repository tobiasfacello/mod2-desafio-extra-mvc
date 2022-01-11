import * as jsonfile from "jsonfile";

class Product {
	id: number;
	name: string;
}

class ProductCollection {
	products: Product[];

	/* 1. Lee de manera asíncrona el archivo json.
	2. Almacena los datos en la propiedad "products".
	3. Devuelve todos los productos y la promesa */
	getAll() {
		const promise = jsonfile.readFile("./products.json"); // 1.
		// 3. (Promesa)
		return promise.then((prods) => {
			this.products = prods; // 2.
			// 3. (Productos)
			return this.products;
		});
	}
	/* 1. Almacena la promesa del método getAll().
	2. Almacena los datos de leer el archivo json en la propiedad "products".
	3. Busca y devuelve el producto con el id especificado.
	4. Devuelve el producto coincidente y la promesa. */
	getById(id: number) {
		const promise = this.getAll(); // 1.
		return promise.then((prods) => {
			// 4. (Promesa)
			this.products = prods; // 2.
			const result = this.products.find((prod) => prod.id == id); // 3.
			// 4. (Producto)
			return result;
		});
	}
}

export { ProductCollection };
