//Función que se ejecutará al crear una nueva persona, hace las veces de constructor
function Persona(nombre, apellido, altura){

	//console.table('Me ejecutaron')

	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
	//return this // Este es automático
}

Persona.prototype.saludar = function () {
	
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.siEsAlto = function(){

	if (this.altura >= 1.80) {

		console.log(`Yo ${this.nombre} ${this.apellido} soy alto, mido ${this.altura}`)
	}else{

		console.log(`Yo ${this.nombre} ${this.apellido} no soy alto, mido ${this.altura}`)
	}
}

//También usando el operador ternario para comprobar los condicionales

Persona.prototype.siEsAlto2 = function(){

	this.altura >= 1.80 ?

	console.log(`Yo ${this.nombre} ${this.apellido} soy alto, mido ${this.altura}`): console.log(`Yo ${this.nombre} ${this.apellido} no soy alto, mido ${this.altura}`)

}
var abner = new Persona('Abner', 'Saavedra', 1.65)
var angel = new Persona('Ángel', 'Rodríguez', 1.80)
var fernando = new Persona('Fernando', 'Salazar', 1.70)