var nombre = 'Abner', apellido = 'Saavedra' // Así también se puede declarar variables, varías en una misma lineas, separadas por coma.

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length // Es un atributo, no una función.

//var nombreCompleto = nombre + ' ' + apellido; // Método tradicional
var nombreCompleto = `${nombre} ${apellido}` //Por interpolación de texto, en esta forma se usa la comilla invertida: ``.

/* Sustraer substring de un string */
var str = nombre.charAt(1) + nombre.charAt(2) //Con la función charAt() puede hacerse.
var str = nombre.substr(1, 2) //Con la función substr()
