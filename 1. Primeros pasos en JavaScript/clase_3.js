var edad = 27

/* Incrementar variables numericas */
//edad = edad + 1 //Forma larga

edad += 1 // Forma corta

var peso = 60 

/* Decrementar variables numericas */
//peso = peso - 2 // Forma larga
peso -= 1 //Forma corta

var sandwich = 1

peso = peso + sandwich

var jugarFutbol = 3

peso = peso - jugarFutbol

/*Calculo con decimales*/
var precioDeVino = 200.3

var total = precioDeVino * 3

/*
Nota: Tener en cuenta que JavaScript no es muy preciso al trabajar con decimales, almacena decimales poco precisos, es otra de la particularidades del lenguaje.
Por lo que hay que si bien trabajar con librerías externas o redondearlos con calcular o formular matemáticas.
*/

total = precioDeVino * 100 * 3 / 100 //Calculo para cifras con solo un decimal
total = Math.round(precioDeVino * 100 * 3) / 100 //Usando el módulo Math de JavaScript para mayor exactitud sin importar el numero de decimales
var totalStr = total.toFixed(2) //Para obtener la cifra con un número especifico de decimales
var total2 = parseFloat(totalStr) //Convertir un string a un decimal

/*Divisiones*/
var pizza = 8
var personas = 2
var cantidadDePorcionesPorPersonas = pizza / personas