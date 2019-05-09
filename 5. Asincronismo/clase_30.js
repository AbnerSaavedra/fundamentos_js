const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onResponse = function(data){

	console.log(`Hola yo soy ${data.name}`) // Para ver los parámetros que recibe la funcion get()
}

function obtenerPersonaje(id){

	const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

	//Invocamos al callback
	$.get(URL, opts, onResponse)
}

obtenerPersonaje(1) //Luke Skywalker
obtenerPersonaje(2) // C3-PO
obtenerPersonaje(3) //R2-D2

/*
Debido al asincronismo con que trabaja JavaScript no es
posible saber en que orden llegaran las respuestas solicitadas
al servidor, todo va a depender del mismo, en otras palabras, el
un orden de instrucciones (de peticiones) no implica que las respuestas llegaran en el
mismo orden.
*/
//Un callback es una función que se ejecuta luego de que llega una respuesta o se cumpla algo necesario para su ejecución