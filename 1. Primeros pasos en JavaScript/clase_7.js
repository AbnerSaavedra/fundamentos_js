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

	console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(abner)
imprimirNombreEnMayusculas(fernando)
imprimirNombreEnMayusculas({nombre: 'Mamerto'})
//imprimirNombreEnMayusculas() //Acá no funciona puesto que no se puede desglosar el parametro de un objeto inexistente
//imprimirNombreEnMayusculas({ apellido: 'Gómez'}) // En este caso pasa algo parecido ya que el cuerpo de la función no esta ejecutando operaciones con la clave apellido