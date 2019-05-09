var nombre = 'Abner' /*Variable de alcance global, esta relacionado al objeto global y este dependerá de donde estemos 
ejecutando JavaScript, por ejemplo en el navegador el objeto global es Windows, es decir, la ventana */

function imprimirNombreEnMayusculas() {
	
	nombre = nombre.toUpperCase()

	console.log(nombre)
}

imprimirNombreEnMayusculas(nombre)/* Nótese que al ejecutar esta función
se manipulara una variable que no esta dentro de esta, lo que puede
ocasionar efectos colaterales en nuestro código, a lo que denominamos side effect, esto hay que evitarlo */

/*Usando parametros podemos evitar el site effect puesto que el valor de la variable se copiará
al parametro y este sera el que se manipule localmente en la función*/

function imprimirNombreEnMayusculas(n) {
	
	n = n.toUpperCase()

	console.log(n)
}

imprimirNombreEnMayusculas(nombre)

/* También podemos usar la variable nombre localmente
sin afectar la variable homonima global */

function imprimirNombreEnMayusculas(nombre) {
	
	nombre = nombre.toUpperCase()

	console.log(nombre)
}

imprimirNombreEnMayusculas(nombre)

/* Como conclusión podemos decir que toda variable que no este definida
localmente en una función estará definida de manera global y podremos 
acceder a esta mediante el objeto global de donde este ejecutandose JavaScript*/