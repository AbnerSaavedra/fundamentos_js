var nombre = 'Abner', edad = 27

function imprimirEdad(n, e){

	console.log(`${n} tiene ${e} años`)
}

imprimirEdad(nombre, edad)
imprimirEdad('Daniel', 13)
imprimirEdad('Lorenzo', 16)
imprimirEdad('Roberto', 30)
/*Acá vemos que JavaScript ejecutará la función con los parametros que tenga sin importar el orden, siempre que sea posible ejecutará código*/
imprimirEdad(30, 'Roberto')
/*Inclusive sin parametros, esto se debe en parte a que es un lenguaje debilmente tipado*/
imprimirEdad()