/* Desde ECMAScript 2015 este lenguaje soporta la 
sintáxis para clases pero siguen siendo prototipos*/
class Persona {

    constructor(nombre, apellido, altura) {//Se ejecuta al crear objetos de esta clase

        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura

    }

/* Para declarar funciones dentro de una clase ya no es
necesario colocar la palabra reservada function */

    saludar(){

         console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    siEsAlto(){

        return this.altura >= 1.80
    }
}

class Desarrollador extends Persona{

        constructor(nombre, apellido, altura) {

        super(nombre, apellido, altura)
    }

    saludar(){

    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)

    }
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