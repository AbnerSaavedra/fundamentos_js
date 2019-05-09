var abner = {

	nombre: 'Abner',
	apellido: 'Saavedra',
	altura: 1.65

}

var fernando = {

	nombre: 'Fernando',
	apellido: 'Salazar',
	altura: 1.70

}

var angel = {

	nombre: 'Ángel',
	apellido: 'Rodríguez',
	altura: 1.80

}

var daniel = {

	nombre: 'Daniel',
	apellido: 'Heredía',
	altura: 1.75

}

var nahum = {

	nombre: 'Nahum',
	apellido: 'Saavedra',
	altura: 1.72

}

var gerson = {

	nombre: 'Gersón',
	apellido: 'Saavedra',
	altura: 1.70

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
