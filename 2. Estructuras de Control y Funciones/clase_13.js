var abner = {

	nombre: 'Abner',
	apellido: 'Saavedra',
	edad: 27,
	peso: 60
}

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365

console.log(`Al inicio del año ${abner.nombre} pesa ${abner.peso}`)

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO

const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANIO; i++){

	var random = Math.random(); //Número aleatorio entre (0. 1)

	if (random < 0.25) {

		aumentarDePeso(abner)

	}else if (random < 0.5){

		adelgazar(abner)
	}
}

console.log(`Al final del año ${abner.nombre} pesa ${abner.peso.toFixed(1)}`)


