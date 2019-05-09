//Función que se ejecutará al crear una nueva persona, hace las veces de constructor
function Persona(nombre, apellido){

	//console.table('Me ejecutaron')

	this.nombre = nombre
	this.apellido = apellido
	//return this // Este es automático
}

Persona.prototype.saludar = function () {
	
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
var abner = new Persona('Abner', 'Saavedra')
var angel = new Persona('Ángel', 'Rodríguez')
var fernando = new Persona('Fernando', 'Salazar')