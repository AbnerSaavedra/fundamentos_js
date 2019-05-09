/* Función para implementar la herencia prototipal */

function heredaDe(prototipoHijo, prototipoPadre) {

    var fn = function () {}

    	//Todas las funciones tienes el atributo prototype
    	fn.prototype = prototipoPadre.prototype
    	prototipoHijo.prototype = new fn
    	prototipoHijo.prototype.constructor = prototipoHijo
    

}

//Función que se ejecutará al crear una nueva persona, hace las veces de constructor
function Persona(nombre, apellido, altura) {

    //console.table('Me ejecutaron')

    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    //return this // Este es automático
}

Persona.prototype.saludar = function() {

    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.siEsAlto = function() {

    return this.altura >= 1.80 

    //? console.log(`Yo ${this.nombre} ${this.apellido} soy alto, mido ${this.altura}`) : console.log(`Yo ${this.nombre} ${this.apellido} no soy alto, mido ${this.altura}`)

}

/* Recordemos que esto hace las veces de un constructor */

function Desarrollador(nombre, apellido) {

    this.nombre = nombre
    this.apellido = apellido
}

//Luego de definir el constructor heredamos

heredaDe(Desarrollador, Persona)

//Para así implementar funciones propias

Desarrollador.prototype.saludar = function() {

    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

/*var abner = new Persona('Abner', 'Saavedra', 1.65)
var angel = new Persona('Ángel', 'Rodríguez', 1.80)
var fernando = new Desarrollador('Fernando', 'Salazar', 1.70)*/







































/*
En consola

Persona

ƒ Persona(nombre, apellido) {

    //console.table('Me ejecutaron')

    this.nombre = nombre
    this.apellido = apellido
    //return this // Este es automático
}

Persona.prototype

{saludar: ƒ, siEsAlto: ƒ, constructor: ƒ}
saludar: ƒ ()
siEsAlto: ƒ ()
constructor: ƒ Persona(nombre, apellido)
__proto__: Object

*/
