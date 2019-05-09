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
	
	nombre = persona.nombre.toUpperCase()

	console.log(nombre)
}

imprimirNombreEnMayusculas(abner)
imprimirNombreEnMayusculas(fernando)

/* Otra manera desglosando los parametros, obteniendo el atributo que nos interesa*/

function imprimirNombreEnMayusculas({nombre}) {
	
	nombre = nombre.toUpperCase()

	console.log(nombre)
}

imprimirNombreEnMayusculas(abner)
imprimirNombreEnMayusculas(fernando)
imprimirNombreEnMayusculas({nombre: 'Mamerto'})
//imprimirNombreEnMayusculas() //Acá no funciona puesto que no se puede desglosar el parametro de un objeto inexistente
//imprimirNombreEnMayusculas({ apellido: 'Gómez'}) // En este caso pasa algo parecido ya que el cuerpo de la función no esta ejecutando operaciones con la clave apellido