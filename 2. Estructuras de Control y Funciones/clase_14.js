var abner = {

	nombre: 'Abner',
	apellido: 'Saavedra',
	edad: 27,
	peso: 60
}

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANIO = 365

console.log(`Al inicio del año ${abner.nombre} pesa ${abner.peso}`)

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO

const adelgazar = persona => persona.peso -= INCREMENTO_PESO

const comeMucho = () => Math.random() < 0.3

const haceDeporte = () => Math.random()	 < 0.4

const META = abner.peso -3

var dias = 0

while (abner.peso > META) {

 //debugger //detiene la ejecución del programa

	if (comeMucho()) {

		aumentarDePeso(abner)
	}
	if (haceDeporte()) {


		adelgazar(abner)
	}

	dias += 1
}

console.log(`Pasaron ${dias} hasta que ${abner.nombre} adelgazó 3Kg`)


