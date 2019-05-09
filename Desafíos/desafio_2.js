var abner = {

	nombre: 'Abner',
	apellido: 'Saavedra',
	edad: 27

}

var fernando = {

	nombre: 'Fernando',
	apellido: 'Salazar',
	edad: 28

}

function imprimirNombreEnMayusculas(persona) {
	
	// var nombre = persona.nombre
	var { nombre } = persona
	var { edad } = persona

	console.log('Hola soy ' + nombre + ' y tengo '+ edad + ' años')
}

imprimirNombreEnMayusculas(abner)
imprimirNombreEnMayusculas(fernando)