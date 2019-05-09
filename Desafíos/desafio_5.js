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

/*
Opción A
const esAlta = (persona) => {

	return persona.altura > 1.8
}*/

/*Opción B
const esAlta = persona => persona.altura >= 1.8*/

/*Opción C desglosando parámetros*/
const esAlta = ( {altura} ) => altura < 1.8

var personas = [abner, fernando, angel, daniel, nahum, gerson] //Sintáxis para declarar un arreglo en JavaScript

/* Filtrado de arreglos */
/*Opción A con la condición como función separada*/
var personasAltas = personas.filter(esAlta)

/*Opción A con la condición como función anoníma directa
var personasAltas = personas.filter(function(persona){

	return persona.altura >= 1.8
})*/

console.log(personasAltas)