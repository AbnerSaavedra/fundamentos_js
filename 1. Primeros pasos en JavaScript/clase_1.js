console.log('¡Hola mundo JS!'); //Para imprimir en consola
var nombre;//En JavaScript no es obligatorio cerrar cada instrucción con un punto y coma, a excepción de alguno casos muy puntuales.
nombre = 'Abner';//Podemos interactuar con nuestro código en la consola del navegador.
apellido = 'Saavedra'
//nombre = 'Abner', apellido = 'Saavedra' // Así también se puede declarar variables, varías en una misma lineas, separadas por coma.
console.log('Hola '+ nombre + ' ' + apellido);

/* JavaScript es un lenguaje debilmente tipado, es decir al declararse no se puede definir el tipo de dato que va a contener, siendo esto una de sus desventajas */
// Ejemplo
var edad = 28;
edad = '28'
var peso = 60
peso = '60 Kg'
console.log('Hola soy '+ nombre + ' ' + apellido + ' y tengo ' + edad + ' años.');
