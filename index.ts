import * as minimist from "minimist";
import { ProductController } from "./controller";

/* 1. Parsea los argumentos pasados usando minimist.
2. Si el argumento tiene la propiedad "search" devuelve un objeto (por ej, {search: 1}).
3. De lo contrario, devuelve un objeto vacío.
*/
function parsearArgs(argv) {
	const argsParseados = minimist(argv); // 1.
	if (argsParseados.search) {
		return { search: argsParseados.search }; // 2.
	} else {
		return {}; // 3.
	}
}

/* 1. Se instancia el controlador.
2. Corta los argumentos pasados por terminal usando el método slice()
3. Se parsean los argumentos anteriormente mencionados usando la función parsearArgs()
4. El resultado de parsear los argumentos se pasa por el método processOptions() para luego imprimir el resultado obtenido.
*/
function main() {
	const controller = new ProductController(); // 1.
	const params = process.argv.slice(2); // 2.
	const result = parsearArgs(params); // 3.
	controller.processOptions(result).then((res) => console.log(res)); // 4.
}

main();
