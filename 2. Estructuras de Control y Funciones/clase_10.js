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

imprimirProfesiones(abner)
