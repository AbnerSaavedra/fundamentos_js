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

Persona.prototype.siEsAlto = function(){

	this.altura >= 1.80 ?

	console.log(`Yo ${this.nombre} ${this.apellido} soy alto, mido ${this.altura}`): console.log(`Yo ${this.nombre} ${this.apellido} no soy alto, mido ${this.altura}`)

}

/* Si cambiamos la función a arrow function también habrá
un error pero ahora por el contexto de la funcion en cuanto a this */

Persona.prototype.siEsAlto = () => this.altura > 1.80

var abner = new Persona('Abner', 'Saavedra', 1.65)
var angel = new Persona('Ángel', 'Rodríguez', 1.80)
var fernando = new Persona('Fernando', 'Salazar', 1.70)


/* Si colocamos una función debajo de las instancias de los prototipos 
no se ejecutaran debido a la naturaleza estructurada del lenguaje JavaScript 

Persona.prototype.siEsAlto = function(){

	this.altura >= 1.80 ?

	console.log(`Yo ${this.nombre} ${this.apellido} soy alto, mido ${this.altura}`): console.log(`Yo ${this.nombre} ${this.apellido} no soy alto, mido ${this.altura}`)

}
*/
