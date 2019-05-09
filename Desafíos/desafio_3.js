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

/*Función que imprime si una persona es mayor de edad
ó no*/

function imprimirSiEsMayorDeEdad(persona) {
	
	console.log(`${persona.nombre} `)

	if (persona.edad >= 18) {

		console.log('es mayor de edad.')
	}else{

		console.log('no es mayor de edad.')
	}

}

imprimirSiEsMayorDeEdad(abner)
