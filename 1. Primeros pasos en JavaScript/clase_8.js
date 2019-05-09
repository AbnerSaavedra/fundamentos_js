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
/* Acá se esta referenciando el parametro edad del objeto persona
y por eso es modificado ese atributo en el objeto aún fuera de la función*/
function cumpleanios(persona){

	persona.edad += 1;
}

/*Para evitar el efecto colateral que implica usar parametros por referencia
podemos hacer una copia del objeto referenciado y trabajar con esta, así solo se modifica el nuevo 
objeto usando solo el valor del parametro, siendo por esto que se usa como valor*/

function cumpleanios(persona){

	return {

		...persona,
		edad: persona.edad + 1
	}
}