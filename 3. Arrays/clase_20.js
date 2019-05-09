var abner = {

	nombre: 'Abner',
	apellido: 'Saavedra',
	altura: 1.65,
	cantidadDeLibros: 167

}

var fernando = {

	nombre: 'Fernando',
	apellido: 'Salazar',
	altura: 1.70,
	cantidadDeLibros: 155

}

var angel = {

	nombre: 'Ángel',
	apellido: 'Rodríguez',
	altura: 1.80,
	cantidadDeLibros: 143

}

var daniel = {

	nombre: 'Daniel',
	apellido: 'Heredía',
	altura: 1.75,
	cantidadDeLibros: 187

}

var nahum = {

	nombre: 'Nahum',
	apellido: 'Saavedra',
	altura: 1.72,
	cantidadDeLibros: 170

}

var gerson = {

	nombre: 'Gersón',
	apellido: 'Saavedra',
	altura: 1.70,
	cantidadDeLibros: 190

}

const esAlta = ( {altura} ) => altura >= 1.8

var personas = [abner, fernando, angel, daniel, nahum, gerson] //Sintáxis para declarar un arreglo en JavaScript

/* Filtrado de arreglos */
var personasAltas = personas.filter(esAlta)

//const pasarAlturaACms = ({altura}) => altura *=100 //Acá se pasa solo la altura, es decir solo se crea un arreglo con ese atributo

const pasarAlturaACms = persona => {

	return {

		...persona,//Creamos nuevo objeto para no modificar al original
		altura: persona.altura * 100
	}
}

/* Otra manera prescindiendo de las llaves del cuerpo 
de la función y de la palabra reservada return */

 const pasarAlturaACms2 = persona => ({

		...persona,//Creamos nuevo objeto para no modificar al original
		altura: persona.altura * 100
	})

var personasCms = personas.map(pasarAlturaACms2) //Map devuelve un nuevo array

console.table(personasCms)

/*Reducir un arreglo*/

//Método tradicional 

/*var acum = 0

for (var i = 0; i < personas.length; i++) {

	acum += personas[i].cantidadDeLibros
}
totalDeLibros = acum
*/

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienes ${totalDeLibros} libros`)
