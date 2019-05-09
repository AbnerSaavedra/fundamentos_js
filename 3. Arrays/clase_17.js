var abner = {

	nombre: 'Abner',
	apellido: 'Saavedra',
	altura: 1.65

}

var fernando = {

	nombre: 'Fernando',
	apellido: 'Salazar',
	altura: 1.70

}

var angel = {

	nombre: 'Ángel',
	apellido: 'Rodríguez',
	altura: 1.80

}

var daniel = {

	nombre: 'Daniel',
	apellido: 'Heredía',
	altura: 1.75

}

var nahum = {

	nombre: 'Nahum',
	apellido: 'Saavedra',
	altura: 1.72

}

var gerson = {

	nombre: 'Gersón',
	apellido: 'Saavedra',
	altura: 1.70

}

var personas = [abner, fernando, angel, daniel, nahum, gerson] //Sintáxis para declarar un arreglo en JavaScript

/* En consola para acceder a arreglos

personas

(6) [{…}, {…}, {…}, {…}, {…}, {…}]
0: {nombre: "Abner", apellido: "Saavedra", altura: 1.65}
1: {nombre: "Fernando", apellido: "Salazar", altura: 1.7}
2: {nombre: "Ángel", apellido: "Rodríguez", altura: 1.8}
3: {nombre: "Daniel", apellido: "Heredía", altura: 1.75}
4: {nombre: "Nahum", apellido: "Saavedra", altura: 1.72}
5: {nombre: "Gersón", apellido: "Saavedra", altura: 1.7}
length: 6
__proto__: Array(0)

personas[0]

{nombre: "Abner", apellido: "Saavedra", altura: 1.65}
altura: 1.65
apellido: "Saavedra"
nombre: "Abner"
__proto__: Object

personas[0].altura
1.65

personas[0]['altura']
1.65
*/

for (var i = 0; i < personas.length; i++) {
	
	var persona = personas[i];

	console.log(`${persona.nombre} ${persona.apellido} mide ${persona.altura}`)
}