var abner = {

	nombre: 'Abner',
	apellido: 'Saavedra',
	edad: 27,
	ingeniero: true,
	cocinero: false,
	cantante: false,
	dj: false,
	guitarrista: true,
	drone: false
}

var isaias = {

	nombre: 'Isaías',
	apellido: 'Hernández',
	edad: 13
}

/*Función que imprime las profesiones que tiene
una persona*/

function imprimirProfesiones(persona) {
	
	console.log(`${persona.nombre} es:`)

	if (persona.ingeniero) {

		console.log('Es Ingeniero')
	}else{

		console.log('No es ingeniero')
	}

	if (persona.cocinero) {

		console.log('Es Cocinero')
	}else{

		console.log('No es Cocinero')
	}
		if (persona.cantante) {

		console.log('Es Cantante')
	}else{

		console.log('No es Cantante')
	}
	if (persona.dj) {

		console.log('Es Dj')
	}else{

		console.log('No es Dj')
	}

	if (persona.guitarrista) {

		console.log('Es Guitarrista')
	}else{

		console.log('No es Guitarrista')
	}

	if (persona.drone) {

		console.log('Es piloto de drones')
	}else{

		console.log('No es piloto drones')
	}

}

/*Función que imprime si una persona es mayor de edad
ó no*/

const MAYORIA_DE_EDAD = 18

/***
Función escrita de forma normal.
function esMayorDeEdad(persona) {
	
	return persona.edad >= MAYORIA_DE_EDAD
}*/

/* En JavaScript podemos asignar una función a una 
variable o a una constante

var esMayorDeEdad = function (persona) {
	
	return persona.edad >= MAYORIA_DE_EDAD
}
*/

/* También podemos implementar funciones como Arrow
functions */

const esMayorDeEdad =  persona => persona.edad >= MAYORIA_DE_EDAD

/*Desestructutarando el parametro*/

//const esMayorDeEdad =  ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
	
	console.log(`${persona.nombre} `)

	if (esMayorDeEdad(persona)) {

		console.log('es mayor de edad.')
	}else{

		console.log('no es mayor de edad.')
	}

}

function permitirAcceso(persona) {
	
	if (!esMayorDeEdad(persona)) {

		console.log('¡ACCESO DENEGADO!')
	}
}
